import { DClean, DDataParser, DEither, DString, pipe, wrapValue, type ExpectType, type WrappedValue } from "@scripts";

describe("createConstraintsSet", () => {
	const minConstraint = DClean.StringMin(3);
	const maxConstraint = DClean.StringMax(5);
	const handler = DClean.createConstraintsSet(
		DClean.String,
		[minConstraint, maxConstraint],
	);

	it("create returns constrained type on valid input", () => {
		const result = handler.create("hello");

		expect(result).toStrictEqual(
			DEither.right(
				"createConstraintsSet",
				DClean.constrainedTypeKind.setTo(
					wrapValue("hello"),
					{
						"string-min-3": null,
						"string-max-5": null,
					},
				),
			),
		);

		type Check = ExpectType<
			typeof result,
			| DEither.Right<
				"createConstraintsSet",
				& DClean.Primitive<"hello">
				& DClean.ConstrainedType<"string-min-3", string>
				& DClean.ConstrainedType<"string-max-5", string>
			>
			| DEither.Left<
				"createConstraintsSetError",
				| DClean.ConstraintError<"string-min-3">
				| DClean.ConstraintError<"string-max-5">
			>,
			"strict"
		>;
	});

	it("create returns error on invalid input", () => {
		const result = handler.create("hi");

		const expectedError = DDataParser.createError();
		DDataParser.addIssue(
			expectedError,
			"string.length >= 3",
			"hi",
			undefined,
			DDataParser.checkerStringMin(3),
		);

		expect(result).toStrictEqual(
			DEither.left(
				"createConstraintsSetError",
				{
					constraintName: "string-min-3",
					dataParserError: expectedError,
				},
			),
		);

		type Check = ExpectType<
			typeof result,
			| DEither.Left<
				"createConstraintsSetError",
				| DClean.ConstraintError<"string-min-3">
				| DClean.ConstraintError<"string-max-5">
			>
			| DEither.Right<
				"createConstraintsSet",
				& DClean.Primitive<"hi">
				& DClean.ConstrainedType<"string-min-3", string>
				& DClean.ConstrainedType<"string-max-5", string>
			>,
			"strict"
		>;
	});

	it("create returns the constraint name linked to a failing checker", () => {
		const strictLengthConstraint = DClean.createConstraint(
			"strict-length",
			DClean.String,
			[
				DDataParser.checkerStringMin(3),
				DDataParser.checkerStringMax(5),
			],
		);
		const suffixConstraint = DClean.createConstraint(
			"suffix",
			DClean.String,
			DDataParser.checkerRefine<string>((value) => value.endsWith("-ok")),
		);
		const handler = DClean.createConstraintsSet(
			DClean.String,
			[
				strictLengthConstraint,
				suffixConstraint,
			],
		);

		const result = handler.create("abcdef");

		const expectedError = DDataParser.createError();
		DDataParser.addIssue(
			expectedError,
			"string.length <= 5",
			"abcdef",
			undefined,
			strictLengthConstraint.internal.checkers[1]!,
		);

		expect(result).toStrictEqual(
			DEither.left(
				"createConstraintsSetError",
				{
					constraintName: "strict-length",
					dataParserError: expectedError,
				},
			),
		);

		type Check = ExpectType<
			typeof result,
			| DEither.Left<
				"createConstraintsSetError",
				| DClean.ConstraintError<"strict-length">
				| DClean.ConstraintError<"suffix">
			>
			| DEither.Right<
				"createConstraintsSet",
				& DClean.Primitive<"abcdef">
				& DClean.ConstrainedType<"strict-length", string>
				& DClean.ConstrainedType<"suffix", string>
			>,
			"strict"
		>;
	});

	it("create returns the nested constraint name linked to a failing checker", () => {
		const minConstraint = DClean.StringMin(3);
		const suffixChecker = DDataParser.checkerRefine<string>(
			(value) => value.endsWith("-ok"),
		);
		const suffixConstraint = DClean.createConstraint(
			"suffix",
			DClean.String,
			suffixChecker,
		);
		const nestedConstraintsSet = DClean.createConstraintsSet(
			DClean.String,
			[
				minConstraint,
				suffixConstraint,
			],
		);
		const handler = DClean.createConstraintsSet(
			DClean.String,
			nestedConstraintsSet,
		);

		const result = handler.create("valid");

		const expectedError = DDataParser.createError();
		DDataParser.addIssue(
			expectedError,
			"value matching refine predicate",
			"valid",
			undefined,
			suffixChecker,
		);

		expect(result).toStrictEqual(
			DEither.left(
				"createConstraintsSetError",
				{
					constraintName: "suffix",
					dataParserError: expectedError,
				},
			),
		);
	});

	it("createOrThrow throws the constraint name linked to a failing checker", () => {
		const minConstraint = DClean.StringMin(3);
		const suffixChecker = DDataParser.checkerRefine<string>(
			(value) => value.endsWith("-ok"),
		);
		const suffixConstraint = DClean.createConstraint(
			"suffix",
			DClean.String,
			suffixChecker,
		);
		const handler = DClean.createConstraintsSet(
			DClean.String,
			[
				minConstraint,
				suffixConstraint,
			],
		);

		const expectedError = DDataParser.createError();
		DDataParser.addIssue(
			expectedError,
			"value matching refine predicate",
			"valid",
			undefined,
			suffixChecker,
		);

		try {
			handler.createOrThrow("valid");
			expect.fail("Expected createOrThrow to throw.");
		} catch (error) {
			expect(error).toBeInstanceOf(DClean.CreateConstraintsSetError);
			expect(error).toMatchObject({
				constraintName: "suffix",
				data: "valid",
				dataParserError: expectedError,
			});
		}
	});

	it("create exposes the first constraint fallback when primitive parsing fails before constraints", () => {
		const result = handler.create(12 as never);

		const expectedError = DDataParser.createError();
		DDataParser.addIssue(
			expectedError,
			"string",
			12,
			undefined,
			DClean.String.internal.dataParser,
		);

		expect(result).toStrictEqual(
			DEither.left(
				"createConstraintsSetError",
				{
					constraintName: "string-min-3",
					dataParserError: expectedError,
				},
			),
		);
	});

	it("create keeps constraint metadata when input already constrained", () => {
		const base = DClean.StringMin(2).createOrThrow("hello");

		const result = handler.create(base);

		expect(result).toStrictEqual(
			DEither.right(
				"createConstraintsSet",
				DClean.constrainedTypeKind.addTo(
					base,
					{
						"string-min-2": null,
						"string-min-3": null,
						"string-max-5": null,
					},
				),
			),
		);
	});

	it("createOrThrow returns constrained type", () => {
		const value = handler.createOrThrow("hello");

		expect(value).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue("hello"),
				{
					"string-min-3": null,
					"string-max-5": null,
				},
			),
		);

		type Check = ExpectType<
			typeof value,
			& DClean.Primitive<"hello">
			& DClean.GetConstraints<typeof handler>,
			"strict"
		>;
	});

	it("createOrThrow throws on invalid input", () => {
		expect(() => handler.createOrThrow("no")).toThrow(DClean.CreateConstraintsSetError);
	});

	it("is detects constrained values", () => {
		const value = wrapValue("x") as (
			| WrappedValue<string>
			| (
				& DClean.Primitive<"x">
				& DClean.ConstrainedType<"string-min-3", string>
				& DClean.ConstrainedType<"string-max-5", string>
			)
		);

		const predicate = handler.is(value);

		expect(predicate).toBe(false);

		if (predicate) {
			type Check = ExpectType<
				typeof value,
				& DClean.Primitive<"x">
				& DClean.ConstrainedType<"string-min-3", string>
				& DClean.ConstrainedType<"string-max-5", string>,
				"strict"
			>;
		}

		const constrained = handler.createOrThrow("hello");
		const predicateConstrained = handler.is(constrained);

		expect(predicateConstrained).toBe(true);

		if (predicateConstrained) {
			type Check = ExpectType<
				typeof constrained,
				& DClean.Primitive<"hello">
				& DClean.ConstrainedType<"string-min-3", string>
				& DClean.ConstrainedType<"string-max-5", string>,
				"strict"
			>;
		}

		expect(handler.is(maxConstraint.createOrThrow("test"))).toBe(false);

		expect(
			pipe(
				"test",
				(value) => maxConstraint.createOrThrow(value),
				(value) => minConstraint.createOrThrow(value),
				handler.is,
			),
		).toBe(true);
	});

	it("createWithUnknown matches create", () => {
		const createResult = handler.create("hello");
		const result = handler.createWithUnknown("hello");

		expect(result).toStrictEqual(createResult);
	});

	it("createWithUnknownOrThrow matches createOrThrow", () => {
		const createResult = handler.createOrThrow("hello");
		const result = handler.createWithUnknownOrThrow("hello");

		expect(result).toStrictEqual(createResult);
	});

	it("getConstraint returns a constraint handler by name", () => {
		const result = handler.getConstraint("string-max-5");

		expect(result).toBe(maxConstraint);

		type Check = ExpectType<
			typeof result,
			DClean.ConstraintHandler<
				"string-max-5",
				string,
				readonly [DDataParser.DataParserCheckerStringMax],
				never
			>,
			"strict"
		>;
	});

	it("supports creation inside pipe", () => {
		const pipedHandler = pipe(
			DClean.String,
			(primitiveHandler) => DClean.createConstraintsSet(
				primitiveHandler,
				[minConstraint, maxConstraint],
			),
		);

		const value = pipedHandler.createOrThrow("hello");

		expect(value).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue("hello"),
				{
					"string-min-3": null,
					"string-max-5": null,
				},
			),
		);
	});

	it("accepts a constraints set as input", () => {
		const minConstraint = DClean.StringMin(2);
		const maxConstraint = DClean.StringMax(5);
		const constraintsSet = DClean.createConstraintsSet(
			DClean.String,
			[
				minConstraint,
				maxConstraint,
			],
		);

		const handler = DClean.createConstraintsSet(
			DClean.String,
			constraintsSet,
		);

		const value = handler.createOrThrow("test");

		expect(value).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue("test"),
				{
					"string-min-2": null,
					"string-max-5": null,
				},
			),
		);

		type CheckHandler = ExpectType<
			typeof handler,
			DClean.ConstraintsSetHandler<
				string,
				readonly [
					typeof minConstraint,
					typeof maxConstraint,
				],
				never
			>,
			"strict"
		>;
	});

	it("preserves mixed constraints and constraints sets order in types and runtime", () => {
		const executionOrder: string[] = [];
		const firstConstraint = DClean.createConstraint(
			"first",
			DClean.String,
			DDataParser.checkerRefine<string>(() => {
				executionOrder.push("first");
				return true;
			}),
		);
		const secondConstraint = DClean.createConstraint(
			"second",
			DClean.String,
			DDataParser.checkerRefine<string>(() => {
				executionOrder.push("second");
				return true;
			}),
		);
		const thirdConstraint = DClean.createConstraint(
			"third",
			DClean.String,
			DDataParser.checkerRefine<string>(() => {
				executionOrder.push("third");
				return true;
			}),
		);
		const fourthConstraint = DClean.createConstraint(
			"fourth",
			DClean.String,
			DDataParser.checkerRefine<string>(() => {
				executionOrder.push("fourth");
				return true;
			}),
		);
		const fifthConstraint = DClean.createConstraint(
			"fifth",
			DClean.String,
			DDataParser.checkerRefine<string>(() => {
				executionOrder.push("fifth");
				return true;
			}),
		);
		const middleConstraintsSet = DClean.createConstraintsSet(
			DClean.String,
			[
				secondConstraint,
				thirdConstraint,
			],
		);
		const lastConstraintsSet = DClean.createConstraintsSet(
			DClean.String,
			fifthConstraint,
		);

		const handler = DClean.createConstraintsSet(
			DClean.String,
			[
				firstConstraint,
				middleConstraintsSet,
				fourthConstraint,
				lastConstraintsSet,
			],
		);

		type CheckHandler = ExpectType<
			typeof handler,
			DClean.ConstraintsSetHandler<
				string,
				readonly [
					typeof firstConstraint,
					typeof secondConstraint,
					typeof thirdConstraint,
					typeof fourthConstraint,
					typeof fifthConstraint,
				],
				never
			>,
			"strict"
		>;

		const value = handler.createOrThrow("test");

		expect(handler.internal.constraints.map(({ name }) => name)).toStrictEqual([
			"first",
			"second",
			"third",
			"fourth",
			"fifth",
		]);
		expect(Object.keys(DClean.constrainedTypeKind.getValue(value))).toStrictEqual([
			"first",
			"second",
			"third",
			"fourth",
			"fifth",
		]);
		expect(executionOrder).toStrictEqual([
			"first",
			"second",
			"third",
			"fourth",
			"fifth",
		]);
	});

	it("refines constraints set primitive value type with a predicate checker", () => {
		const prefixChecker = DDataParser.checkerRefine(
			DString.startsWith("prefix-"),
		);
		const prefixedConstraint = DClean.createConstraint(
			"prefixed",
			DClean.String,
			prefixChecker,
		);
		const handler = DClean.createConstraintsSet(
			DClean.String,
			prefixedConstraint,
		);

		const value = handler.createOrThrow("prefix-value");

		expect(value).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue("prefix-value"),
				{ prefixed: null },
			),
		);
		expect(() => handler.createWithUnknownOrThrow("value"))
			.toThrow(DClean.CreateConstraintsSetError);

		type CheckHandler = ExpectType<
			typeof handler,
			DClean.ConstraintsSetHandler<
				`prefix-${string}`,
				readonly [typeof prefixedConstraint],
				never
			>,
			"strict"
		>;

		type CheckValue = ExpectType<
			typeof value,
			& DClean.Primitive<"prefix-value">
			& DClean.ConstrainedType<"prefixed", `prefix-${string}`>,
			"strict"
		>;

		type CheckConstraints = ExpectType<
			DClean.GetConstraints<typeof handler>,
			DClean.ConstrainedType<"prefixed", `prefix-${string}`>,
			"strict"
		>;
	});

	it("intersects constraints set primitive value types from multiple checkers", () => {
		const emailChecker = DDataParser.checkerEmail();
		const adminChecker = DDataParser.checkerRefine(
			DString.startsWith("admin@"),
		);
		const emailConstraint = DClean.createConstraint(
			"email-like",
			DClean.String,
			emailChecker,
		);
		const adminConstraint = DClean.createConstraint(
			"admin-like",
			DClean.String,
			adminChecker,
		);
		const handler = DClean.createConstraintsSet(
			DClean.String,
			[
				emailConstraint,
				adminConstraint,
			],
		);

		type AdminEmail = `admin@${string}` & `${string}@${string}.${string}`;

		const value = handler.createOrThrow("admin@example.com");

		expect(value).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue("admin@example.com"),
				{
					"email-like": null,
					"admin-like": null,
				},
			),
		);
		expect(() => handler.createWithUnknownOrThrow("user@example.com"))
			.toThrow(DClean.CreateConstraintsSetError);

		type CheckHandler = ExpectType<
			typeof handler,
			DClean.ConstraintsSetHandler<
				AdminEmail,
				readonly [
					typeof emailConstraint,
					typeof adminConstraint,
				],
				never
			>,
			"strict"
		>;

		type CheckValue = ExpectType<
			typeof value,
			& DClean.Primitive<"admin@example.com">
			& DClean.ConstrainedType<"email-like", `${string}@${string}.${string}`>
			& DClean.ConstrainedType<"admin-like", `admin@${string}`>,
			"strict"
		>;

		type CheckConstraints = ExpectType<
			DClean.GetConstraints<typeof handler>,
			& DClean.ConstrainedType<"email-like", `${string}@${string}.${string}`>
			& DClean.ConstrainedType<"admin-like", `admin@${string}`>,
			"strict"
		>;
	});

	it("keeps constraints set primitive value type unchanged with non-refining checkers", () => {
		const lengthConstraint = DClean.createConstraint(
			"length",
			DClean.String,
			[
				DDataParser.checkerStringMin(3),
				DDataParser.checkerStringMax(5),
			],
		);
		const handler = DClean.createConstraintsSet(
			DClean.String,
			lengthConstraint,
		);

		const value = handler.createOrThrow("test");

		expect(value).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue("test"),
				{ length: null },
			),
		);

		type CheckHandler = ExpectType<
			typeof handler,
			DClean.ConstraintsSetHandler<
				string,
				readonly [typeof lengthConstraint],
				never
			>,
			"strict"
		>;

		type CheckValue = ExpectType<
			typeof value,
			& DClean.Primitive<"test">
			& DClean.ConstrainedType<"length", string>,
			"strict"
		>;

		type CheckConstraints = ExpectType<
			DClean.GetConstraints<typeof handler>,
			DClean.ConstrainedType<"length", string>,
			"strict"
		>;
	});

	it("flattens nested constraints sets while keeping refined primitive value type", () => {
		const prefixChecker = DDataParser.checkerRefine(
			DString.startsWith("prefix-"),
		);
		const prefixedConstraint = DClean.createConstraint(
			"prefixed",
			DClean.String,
			prefixChecker,
		);
		const lengthConstraint = DClean.createConstraint(
			"length",
			DClean.String,
			[
				DDataParser.checkerStringMin(3),
				DDataParser.checkerStringMax(20),
			],
		);
		const nestedConstraintsSet = DClean.createConstraintsSet(
			DClean.String,
			prefixedConstraint,
		);
		const handler = DClean.createConstraintsSet(
			DClean.String,
			[
				nestedConstraintsSet,
				lengthConstraint,
			],
		);

		const value = handler.createOrThrow("prefix-value");

		expect(value).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue("prefix-value"),
				{
					prefixed: null,
					length: null,
				},
			),
		);
		expect(handler.internal.constraints.map(({ name }) => name)).toStrictEqual([
			"prefixed",
			"length",
		]);

		type CheckHandler = ExpectType<
			typeof handler,
			DClean.ConstraintsSetHandler<
				`prefix-${string}`,
				readonly [
					typeof prefixedConstraint,
					typeof lengthConstraint,
				],
				never
			>,
			"strict"
		>;

		type CheckConstraints = ExpectType<
			DClean.GetConstraints<typeof handler>,
			& DClean.ConstrainedType<"prefixed", `prefix-${string}`>
			& DClean.ConstrainedType<"length", string>,
			"strict"
		>;
	});
});
