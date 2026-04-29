import { DClean, type DDataParser, DEither, wrapValue, type ExpectType } from "@scripts";

describe("defaultConstraint number", () => {
	it("validates integer numbers", () => {
		const result = DClean.Int.create(1);

		expect(result).toStrictEqual(
			DEither.right(
				"createConstrainedType",
				DClean.constrainedTypeKind.setTo(
					wrapValue(1),
					{ int: null },
				),
			),
		);
		expect(() => DClean.Int.createOrThrow(1.5))
			.toThrow(DClean.CreateConstrainedTypeError);

		type check = ExpectType<
			typeof DClean.Int,
			DClean.ConstraintHandler<"int", number, readonly [DDataParser.DataParserCheckerInt], never>,
			"strict"
		>;

		type check1 = ExpectType<
			DClean.Int,
			DClean.ConstrainedType<"int", number>,
			"strict"
		>;
	});

	it("validates positive numbers", () => {
		const value = DClean.Positive.createOrThrow(0);

		expect(value).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue(0),
				{ positive: null },
			),
		);
		expect(() => DClean.Positive.createOrThrow(-1))
			.toThrow(DClean.CreateConstrainedTypeError);

		type check = ExpectType<
			typeof DClean.Positive,
			DClean.ConstraintHandler<"positive", number, readonly [DDataParser.DataParserCheckerNumberMin], never>,
			"strict"
		>;

		type check1 = ExpectType<
			DClean.Positive,
			DClean.ConstrainedType<"positive", number>,
			"strict"
		>;
	});

	it("validates strictly positive numbers", () => {
		const value = DClean.StrictPositive.createOrThrow(Number.EPSILON);

		expect(value).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue(Number.EPSILON),
				{ "strict-positive": null },
			),
		);
		expect(DClean.Positive.createOrThrow(0)).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue(0),
				{ positive: null },
			),
		);
		expect(() => DClean.StrictPositive.createOrThrow(0))
			.toThrow(DClean.CreateConstrainedTypeError);

		type check = ExpectType<
			typeof DClean.StrictPositive,
			DClean.ConstraintHandler<"strict-positive", number, readonly [DDataParser.DataParserCheckerNumberMin], never>,
			"strict"
		>;

		type check1 = ExpectType<
			DClean.StrictPositive,
			DClean.ConstrainedType<"strict-positive", number>,
			"strict"
		>;
	});

	it("validates negative numbers", () => {
		const value = DClean.Negative.createOrThrow(0);

		expect(value).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue(0),
				{ negative: null },
			),
		);
		expect(() => DClean.Negative.createOrThrow(1))
			.toThrow(DClean.CreateConstrainedTypeError);

		type check = ExpectType<
			typeof DClean.Negative,
			DClean.ConstraintHandler<"negative", number, readonly [DDataParser.DataParserCheckerNumberMax], never>,
			"strict"
		>;

		type check1 = ExpectType<
			DClean.Negative,
			DClean.ConstrainedType<"negative", number>,
			"strict"
		>;
	});

	it("validates strictly negative numbers", () => {
		const value = DClean.StrictNegative.createOrThrow(-Number.EPSILON);

		expect(value).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue(-Number.EPSILON),
				{ "strict-negative": null },
			),
		);
		expect(DClean.Negative.createOrThrow(0)).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue(0),
				{ negative: null },
			),
		);
		expect(() => DClean.StrictNegative.createOrThrow(0))
			.toThrow(DClean.CreateConstrainedTypeError);

		type check = ExpectType<
			typeof DClean.StrictNegative,
			DClean.ConstraintHandler<"strict-negative", number, readonly [DDataParser.DataParserCheckerNumberMax], never>,
			"strict"
		>;

		type check1 = ExpectType<
			DClean.StrictNegative,
			DClean.ConstrainedType<"strict-negative", number>,
			"strict"
		>;
	});

	it("creates minimum and maximum number constraints", () => {
		const numberMin = DClean.NumberMin(10);
		const numberMax = DClean.NumberMax(20);

		expect(numberMin.name).toBe("number-min-10");
		expect(numberMax.name).toBe("number-max-20");
		expect(numberMin.createOrThrow(10)).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue(10),
				{ "number-min-10": null },
			),
		);
		expect(numberMax.createOrThrow(20)).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue(20),
				{ "number-max-20": null },
			),
		);
		expect(() => numberMin.createOrThrow(9))
			.toThrow(DClean.CreateConstrainedTypeError);
		expect(() => numberMax.createOrThrow(21))
			.toThrow(DClean.CreateConstrainedTypeError);

		type check = ExpectType<
			typeof numberMin,
			DClean.ConstraintHandler<"number-min-10", number, readonly [DDataParser.DataParserCheckerNumberMin], never>,
			"strict"
		>;

		type check1 = ExpectType<
			typeof numberMax,
			DClean.ConstraintHandler<"number-max-20", number, readonly [DDataParser.DataParserCheckerNumberMax], never>,
			"strict"
		>;
	});
});
