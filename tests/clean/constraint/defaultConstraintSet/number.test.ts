import { DClean, DEither, wrapValue, type ExpectType } from "@scripts";

describe("default number constraints sets", () => {
	it("validates positive integer numbers", () => {
		const result = DClean.PositiveInt.create(0);

		expect(result).toStrictEqual(
			DEither.right(
				"createConstraintsSet",
				DClean.constrainedTypeKind.setTo(
					wrapValue(0),
					{
						positive: null,
						int: null,
					},
				),
			),
		);
		expect(() => DClean.PositiveInt.createOrThrow(-1))
			.toThrow(DClean.CreateConstraintsSetError);
		expect(() => DClean.PositiveInt.createOrThrow(1.5))
			.toThrow(DClean.CreateConstraintsSetError);

		type check = ExpectType<
			typeof DClean.PositiveInt,
			DClean.ConstraintsSetHandler<
				number,
				readonly [
					typeof DClean.Positive,
					typeof DClean.Int,
				],
				never
			>,
			"strict"
		>;
	});

	it("validates strictly positive integer numbers", () => {
		const value = DClean.StrictPositiveInt.createOrThrow(1);

		expect(value).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue(1),
				{
					"strict-positive": null,
					int: null,
				},
			),
		);
		expect(() => DClean.StrictPositiveInt.createOrThrow(0))
			.toThrow(DClean.CreateConstraintsSetError);
		expect(() => DClean.StrictPositiveInt.createOrThrow(1.5))
			.toThrow(DClean.CreateConstraintsSetError);

		type check = ExpectType<
			typeof DClean.StrictPositiveInt,
			DClean.ConstraintsSetHandler<
				number,
				readonly [
					typeof DClean.StrictPositive,
					typeof DClean.Int,
				],
				never
			>,
			"strict"
		>;
	});

	it("validates negative integer numbers", () => {
		const value = DClean.NegativeInt.createOrThrow(0);

		expect(value).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue(0),
				{
					negative: null,
					int: null,
				},
			),
		);
		expect(() => DClean.NegativeInt.createOrThrow(1))
			.toThrow(DClean.CreateConstraintsSetError);
		expect(() => DClean.NegativeInt.createOrThrow(-1.5))
			.toThrow(DClean.CreateConstraintsSetError);

		type check = ExpectType<
			typeof DClean.NegativeInt,
			DClean.ConstraintsSetHandler<
				number,
				readonly [
					typeof DClean.Negative,
					typeof DClean.Int,
				],
				never
			>,
			"strict"
		>;
	});

	it("validates strictly negative integer numbers", () => {
		const value = DClean.StrictNegativeInt.createOrThrow(-1);

		expect(value).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue(-1),
				{
					"strict-negative": null,
					int: null,
				},
			),
		);
		expect(() => DClean.StrictNegativeInt.createOrThrow(0))
			.toThrow(DClean.CreateConstraintsSetError);
		expect(() => DClean.StrictNegativeInt.createOrThrow(-1.5))
			.toThrow(DClean.CreateConstraintsSetError);

		type check = ExpectType<
			typeof DClean.StrictNegativeInt,
			DClean.ConstraintsSetHandler<
				number,
				readonly [
					typeof DClean.StrictNegative,
					typeof DClean.Int,
				],
				never
			>,
			"strict"
		>;
	});

	it("validates percent numbers", () => {
		const value = DClean.Percent.createOrThrow(100);

		expect(value).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue(100),
				{
					"number-min-0": null,
					"number-max-100": null,
				},
			),
		);
		expect(() => DClean.Percent.createOrThrow(-1))
			.toThrow(DClean.CreateConstraintsSetError);
		expect(() => DClean.Percent.createOrThrow(101))
			.toThrow(DClean.CreateConstraintsSetError);

		type check = ExpectType<
			typeof DClean.Percent,
			DClean.ConstraintsSetHandler<
				number,
				readonly [
					DClean.NumberMinHandlerInternal<0>,
					DClean.NumberMaxHandlerInternal<100>,
				],
				never
			>,
			"strict"
		>;
	});
});
