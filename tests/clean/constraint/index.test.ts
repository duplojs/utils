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
			| DEither.Right<
				"createConstrainedType",
				DClean.GetConstraint<typeof constraint, "hello">
			>
			| DEither.Left<
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
			| DEither.Left<"createConstrainedTypeError", DDataParser.DataParserError>
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
				| DEither.Left<"createConstrainedTypeError", DDataParser.DataParserError>
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
		expect(() => constraint.createOrThrow("no"))
			.toThrow(DClean.CreateConstrainedTypeError);
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

	it("string nim and max", () => {
		const stringMax = DClean.StringMax(10);
		const stringMin = DClean.StringMin(10);

		expect(stringMax.name).toBe("string-max-10");
		expect(stringMin.name).toBe("string-min-10");

		type check = ExpectType<
			typeof stringMax,
			DClean.ConstraintHandler<"string-max-10", string, readonly [DDataParser.DataParserCheckerStringMax], never>,
			"strict"
		>;

		type check1 = ExpectType<
			typeof stringMin,
			DClean.ConstraintHandler<"string-min-10", string, readonly [DDataParser.DataParserCheckerStringMin], never>,
			"strict"
		>;
	});

	it("number nim and max", () => {
		const numberMax = DClean.NumberMax(10);
		const numberMin = DClean.NumberMin(10);

		expect(numberMax.name).toBe("number-max-10");
		expect(numberMin.name).toBe("number-min-10");

		type check = ExpectType<
			typeof numberMax,
			DClean.ConstraintHandler<"number-max-10", number, readonly [DDataParser.DataParserCheckerNumberMax], never>,
			"strict"
		>;

		type check1 = ExpectType<
			typeof numberMin,
			DClean.ConstraintHandler<"number-min-10", number, readonly [DDataParser.DataParserCheckerNumberMin], never>,
			"strict"
		>;
	});
});
