import { DClean, DDataParser, DEither, wrapValue, type ExpectType, type WrappedValue } from "@scripts";

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
			| DEither.EitherRight<
				"createConstrainedType",
				DClean.Constraint<typeof constraint, "hello">
			>
			| DEither.EitherLeft<
				"createConstrainedTypeError",
				DDataParser.DataParserError
			>,
			"strict"
		>;
	});

	it("create returns error on invalid input", () => {
		const result = constraint.create("hi");

		const expectedError = DDataParser.addIssue(
			DDataParser.createError(),
			minLengthChecker,
			"hi",
		);

		expect(result).toStrictEqual(
			DEither.left(
				"createConstrainedTypeError",
				expectedError,
			),
		);

		type Check = ExpectType<
			typeof result,
			| DEither.EitherLeft<"createConstrainedTypeError", DDataParser.DataParserError>
			| DEither.EitherRight<"createConstrainedType", DClean.ConstrainedType<"username", "hi">>,
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
				| DEither.EitherLeft<"createConstrainedTypeError", DDataParser.DataParserError>
				| DEither.EitherRight<
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
			DClean.Constraint<typeof constraint, "world">,
			"strict"
		>;
	});

	it("createOrThrow throws on invalid input", () => {
		expect(() => constraint.createOrThrow("no"))
			.toThrow(DClean.CreateConstrainedTypeError);
	});

	it("is detects constrained type", () => {
		const value = wrapValue("x") as WrappedValue<string> | DClean.Constraint<typeof constraint, string>;

		const predicate = constraint.is(value);

		expect(predicate).toBe(false);

		if (predicate) {
			type Check = ExpectType<
				typeof value,
				DClean.Constraint<typeof constraint, string>,
				"strict"
			>;
		}

		const constrained = constraint.createOrThrow("cool");
		const predicateConstrained = constraint.is(constrained);

		expect(predicateConstrained).toBe(true);

		if (predicateConstrained) {
			type Check = ExpectType<
				typeof constrained,
				DClean.Constraint<typeof constraint, "cool">,
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
});
