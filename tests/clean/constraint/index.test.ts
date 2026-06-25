import { DClean, DDataParser, DEither, DString, wrapValue, type ExpectType, type WrappedValue } from "@scripts";

describe("createConstraint", () => {
	const minLengthChecker = DDataParser.checkerStringMin(3);
	const constraint = DClean.createConstraint(
		"username",
		DClean.String,
		minLengthChecker,
	);

	it("create returns constrained type on valid input", () => {
		const result = constraint.create("hello");

		expect(result).toStrictEqual(
			DEither.right(
				"createConstrainedType",
				DClean.constrainedTypeKind.setTo(
					wrapValue("hello"),
					{ username: null },
				),
			),
		);

		type Check = ExpectType<
			typeof result,
			| DEither.Right<
				"createConstrainedType",
				DClean.GetConstraint<typeof constraint, "hello">
			>
			| DEither.Left<
				"createConstrainedTypeError",
				DClean.ConstraintError<"username">
			>,
			"strict"
		>;
	});

	it("create returns error on invalid input", () => {
		const result = constraint.create("hi");

		const expectedError = DDataParser.createError();
		DDataParser.addIssue(
			expectedError,
			"string.length >= 3",
			"hi",
			undefined,
			minLengthChecker,
		);

		expect(result).toStrictEqual(
			DEither.left(
				"createConstrainedTypeError",
				{
					constraintName: "username",
					dataParserError: expectedError,
				},
			),
		);

		type Check = ExpectType<
			typeof result,
			| DEither.Left<"createConstrainedTypeError", DClean.ConstraintError<"username">>
			| DEither.Right<"createConstrainedType", DClean.ConstrainedType<"username", "hi">>,
			"strict"
		>;
	});

	it("create keeps constrained kind when input already constrained", () => {
		const constraintOther = DClean.createConstraint(
			"other",
			DClean.String,
			DDataParser.checkerStringMax(10),
		);

		const base = constraintOther.createOrThrow("valid");

		const result = constraint.create(base);

		expect(result).toStrictEqual(
			DEither.right(
				"createConstrainedType",
				DClean.constrainedTypeKind.addTo(
					base,
					{
						...DClean.constrainedTypeKind.getValue(base),
						username: null,
					},
				),
			),
		);

		type Check = ExpectType<
			typeof result,
			(
				| DEither.Left<"createConstrainedTypeError", DClean.ConstraintError<"username">>
				| DEither.Right<
					"createConstrainedType",
					& DClean.ConstrainedType<"other", "valid">
					& DClean.ConstrainedType<"username", "valid">
				>
			),
			"strict"
		>;
	});

	it("createOrThrow returns constrained type", () => {
		const constrained = constraint.createOrThrow("world");

		expect(constrained).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue("world"),
				{ username: null },
			),
		);

		type Check = ExpectType<
			typeof constrained,
			DClean.GetConstraint<typeof constraint, "world">,
			"strict"
		>;
	});

	it("createOrThrow throws on invalid input", () => {
		const expectedError = DDataParser.createError();
		DDataParser.addIssue(
			expectedError,
			"string.length >= 3",
			"no",
			undefined,
			minLengthChecker,
		);

		try {
			constraint.createOrThrow("no");
			expect.fail("Expected createOrThrow to throw.");
		} catch (error) {
			expect(error).toBeInstanceOf(DClean.CreateConstrainedTypeError);
			expect(error).toMatchObject({
				constraintName: "username",
				data: "no",
				dataParserError: expectedError,
			});
		}
	});

	it("is detects constrained type", () => {
		const value = wrapValue("x") as WrappedValue<string> | DClean.GetConstraint<typeof constraint, string>;

		const predicate = constraint.is(value);

		expect(predicate).toBe(false);

		if (predicate) {
			type Check = ExpectType<
				typeof value,
				DClean.GetConstraint<typeof constraint, string>,
				"strict"
			>;
		}

		const constrained = constraint.createOrThrow("cool");
		const predicateConstrained = constraint.is(constrained);

		expect(predicateConstrained).toBe(true);

		if (predicateConstrained) {
			type Check = ExpectType<
				typeof constrained,
				DClean.GetConstraint<typeof constraint, "cool">,
				"strict"
			>;
		}
	});

	it("createWithUnknown matches create", () => {
		const createResult = constraint.create("test");
		const result = constraint.createWithUnknown("test");

		expect(result).toStrictEqual(createResult);
	});

	it("createWithUnknownOrThrow matches createOrThrow", () => {
		const createResult = constraint.createOrThrow("test");
		const result = constraint.createWithUnknownOrThrow("test");

		expect(result).toStrictEqual(createResult);
	});

	it("refines constrained value type with a predicate checker", () => {
		const prefixChecker = DDataParser.checkerRefine(
			DString.startsWith("prefix-"),
		);
		const prefixedConstraint = DClean.createConstraint(
			"prefixed",
			DClean.String,
			prefixChecker,
		);

		const result = prefixedConstraint.createOrThrow("prefix-value");

		expect(result).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue("prefix-value"),
				{ prefixed: null },
			),
		);
		expect(() => prefixedConstraint.createOrThrow("value" as `prefix-${string}`))
			.toThrow(DClean.CreateConstrainedTypeError);

		type CheckHandler = ExpectType<
			typeof prefixedConstraint,
			DClean.ConstraintHandler<
				"prefixed",
				`prefix-${string}`,
				readonly [typeof prefixChecker],
				never
			>,
			"strict"
		>;

		type CheckResult = ExpectType<
			typeof result,
			DClean.ConstrainedType<"prefixed", "prefix-value">,
			"strict"
		>;

		type CheckConstraint = ExpectType<
			DClean.GetConstraint<typeof prefixedConstraint>,
			DClean.ConstrainedType<"prefixed", `prefix-${string}`>,
			"strict"
		>;
	});

	it("intersects refined constrained value types from multiple checkers", () => {
		const emailChecker = DDataParser.checkerEmail();
		const adminChecker = DDataParser.checkerRefine(
			DString.startsWith("admin@"),
		);
		const adminEmailConstraint = DClean.createConstraint(
			"admin-email",
			DClean.String,
			[
				emailChecker,
				adminChecker,
			],
		);

		type AdminEmail = `admin@${string}` & `${string}@${string}.${string}`;

		const result = adminEmailConstraint.createOrThrow("admin@example.com");

		expect(result).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue("admin@example.com"),
				{ "admin-email": null },
			),
		);
		expect(() => adminEmailConstraint.createWithUnknownOrThrow("user@example.com"))
			.toThrow(DClean.CreateConstrainedTypeError);

		type CheckHandler = ExpectType<
			typeof adminEmailConstraint,
			DClean.ConstraintHandler<
				"admin-email",
				AdminEmail,
				readonly [
					typeof emailChecker,
					typeof adminChecker,
				],
				never
			>,
			"strict"
		>;

		type CheckConstraint = ExpectType<
			DClean.GetConstraint<typeof adminEmailConstraint>,
			DClean.ConstrainedType<"admin-email", AdminEmail>,
			"strict"
		>;
	});

	it("keeps constrained value type unchanged with non-refining checkers", () => {
		const lengthConstraint = DClean.createConstraint(
			"length",
			DClean.String,
			[
				DDataParser.checkerStringMin(3),
				DDataParser.checkerStringMax(5),
			],
		);

		const result = lengthConstraint.createOrThrow("test");

		expect(result).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue("test"),
				{ length: null },
			),
		);

		type CheckHandler = ExpectType<
			typeof lengthConstraint,
			DClean.ConstraintHandler<
				"length",
				string,
				readonly [
					DDataParser.DataParserCheckerStringMin,
					DDataParser.DataParserCheckerStringMax,
				],
				never
			>,
			"strict"
		>;

		type CheckConstraint = ExpectType<
			DClean.GetConstraint<typeof lengthConstraint>,
			DClean.ConstrainedType<"length", string>,
			"strict"
		>;
	});
});
