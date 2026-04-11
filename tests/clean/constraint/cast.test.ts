import { DClean, DPE, unwrap, type ExpectType } from "@scripts";

describe("castConstraint", () => {
	it("adds a single constraint to an already constrained value", () => {
		const base = DClean.StringMin(5).createOrThrow("hello");
		const result = DClean.castConstraint(base, DClean.StringMin(3));

		expect(result).toStrictEqual(
			DClean.constrainedTypeKind.addTo(
				base,
				{
					"string-min-5": null,
					"string-min-3": null,
				},
			),
		);

		expect(DClean.StringMin(3).is(result)).toBe(true);
		expect(DClean.StringMin(5).is(result)).toBe(true);

		type Check = ExpectType<
			typeof result,
			& DClean.ConstrainedType<"string-min-5", "hello">
			& DClean.ConstrainedType<"string-min-3", string>,
			"strict"
		>;
	});

	it("adds multiple constraints when handlers are provided as an array", () => {
		const base = DClean.NumberMin(5).createOrThrow(7);
		const result = DClean.castConstraint(
			base,
			[
				DClean.NumberMin(3),
				DClean.NumberMin(-1),
			],
		);

		expect(result).toStrictEqual(
			DClean.constrainedTypeKind.addTo(
				base,
				{
					"number-min-5": null,
					"number-min-3": null,
					"number-min--1": null,
				},
			),
		);

		type Check = ExpectType<
			typeof result,
			& DClean.ConstrainedType<"number-min-5", 7>
			& DClean.ConstrainedType<"number-min-3", number>
			& DClean.ConstrainedType<"number-min--1", number>,
			"strict"
		>;
	});

	it("preserves wrapped value identity while extending constraint metadata", () => {
		const base = DClean.createNewType("nt", DPE.number(), DClean.NumberMax(2)).createOrThrow(-2);
		const result = DClean.castConstraint(base, DClean.NumberMax(5));

		expect(result).not.toBe(base);
		expect(unwrap(result)).toBe(unwrap(base));
		expect(unwrap(result)).toBe(-2);
		expect(DClean.constrainedTypeKind.getValue(result)).toStrictEqual({
			"number-max-2": null,
			"number-max-5": null,
		});
	});

	it("supports every valid cast combination at the type level", () => {
		const positive = DClean.Positive.createOrThrow(2);
		const numberMinFromPositive = DClean.castConstraint(
			positive,
			DClean.NumberMin(-5),
		);
		type CheckNumberMinFromPositive = ExpectType<
			typeof numberMinFromPositive,
			& DClean.ConstrainedType<"positive", 2>
			& DClean.ConstrainedType<"number-min--5", number>,
			"strict"
		>;

		DClean.castConstraint(
			//@ts-expect-error 10 is greater than zero
			positive,
			DClean.NumberMin(10),
		);

		const numberMin = DClean.NumberMin(5).createOrThrow(7);
		const narrowedNumberMin = DClean.castConstraint(
			numberMin,
			DClean.NumberMin(3),
		);
		type CheckNumberMinFromNumberMin = ExpectType<
			typeof narrowedNumberMin,
			& DClean.ConstrainedType<"number-min-5", 7>
			& DClean.ConstrainedType<"number-min-3", number>,
			"strict"
		>;

		DClean.castConstraint(
			//@ts-expect-error 50 is greater than 6
			numberMin,
			DClean.NumberMin(50),
		);

		const negative = DClean.Negative.createOrThrow(-2);
		const numberMaxFromNegative = DClean.castConstraint(
			negative,
			DClean.NumberMax(20),
		);
		type CheckNumberMaxFromNegative = ExpectType<
			typeof numberMaxFromNegative,
			& DClean.ConstrainedType<"negative", -2>
			& DClean.ConstrainedType<"number-max-20", number>,
			"strict"
		>;

		DClean.castConstraint(
			//@ts-expect-error -60 is less than zero
			negative,
			DClean.NumberMax(-60),
		);

		const numberMax = DClean.NumberMax(2).createOrThrow(-1);
		const widenedNumberMax = DClean.castConstraint(
			numberMax,
			DClean.NumberMax(5),
		);
		type CheckNumberMaxFromNumberMax = ExpectType<
			typeof widenedNumberMax,
			& DClean.ConstrainedType<"number-max-2", -1>
			& DClean.ConstrainedType<"number-max-5", number>,
			"strict"
		>;

		DClean.castConstraint(
			//@ts-expect-error -2 is less than 2
			numberMax,
			DClean.NumberMax(-22),
		);

		const stringMin = DClean.StringMin(5).createOrThrow("hello");
		const narrowedStringMin = DClean.castConstraint(
			stringMin,
			DClean.StringMin(3),
		);
		type CheckStringMinFromStringMin = ExpectType<
			typeof narrowedStringMin,
			& DClean.ConstrainedType<"string-min-5", "hello">
			& DClean.ConstrainedType<"string-min-3", string>,
			"strict"
		>;

		DClean.castConstraint(
			//@ts-expect-error 10 is greater than 5
			stringMin,
			DClean.StringMin(10),
		);

		const stringMax = DClean.StringMax(5).createOrThrow("hello");
		const widenedStringMax = DClean.castConstraint(
			stringMax,
			DClean.StringMax(8),
		);
		type CheckStringMaxFromStringMax = ExpectType<
			typeof widenedStringMax,
			& DClean.ConstrainedType<"string-max-5", "hello">
			& DClean.ConstrainedType<"string-max-8", string>,
			"strict"
		>;

		DClean.castConstraint(
			//@ts-expect-error -800 is less than 5
			stringMax,
			DClean.StringMax(-800),
		);

		const positiveFromNumberMin = DClean.castConstraint(
			DClean.NumberMin(15).createOrThrow(20),
			DClean.Positive,
		);
		type CheckPositiveFromNumberMin = ExpectType<
			typeof positiveFromNumberMin,
			& DClean.ConstrainedType<"number-min-15", 20>
			& DClean.ConstrainedType<"positive", number>,
			"strict"
		>;

		DClean.castConstraint(
			//@ts-expect-error -2 is less than 0
			DClean.NumberMin(-2).createOrThrow(3),
			DClean.Positive,
		);

		const negativeFromNumberMin = DClean.castConstraint(
			DClean.NumberMax(-10).createOrThrow(-60),
			DClean.Negative,
		);
		type CheckNegativeFromNumberMin = ExpectType<
			typeof negativeFromNumberMin,
			& DClean.ConstrainedType<"number-max--10", -60>
			& DClean.ConstrainedType<"negative", number>,
			"strict"
		>;

		DClean.castConstraint(
			//@ts-expect-error 10 is greater than 0
			DClean.NumberMax(10).createOrThrow(-60),
			DClean.Negative,
		);

		DClean.castConstraint(
			//@ts-expect-error no casting possible
			DClean.NumberMax(10).createOrThrow(-60),
			DClean.Email,
		);
	});
});
