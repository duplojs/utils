import { pipe, type ExpectType, DEither } from "@scripts";

describe("whenEitherIsRight", () => {
	it("match", () => {
		const either = true
			? DEither.nullableFilled(true)
			: DEither.nullableEmpty();

		const result = DEither.whenIsRight(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					true,
					"strict"
				>;

				return 10;
			},
		);

		expect(result).toBe(10);

		type check = ExpectType<
			typeof result,
			DEither.NullableEmpty | 10,
			"strict"
		>;
	});

	it("not match with right", () => {
		const either = DEither.nullableEmpty();

		const result = DEither.whenIsRight(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					never,
					"strict"
				>;

				return value;
			},
		);

		expect(result).toBe(either);

		type check = ExpectType<
			typeof result,
			DEither.NullableEmpty,
			"strict"
		>;
	});

	it("not match with any value", () => {
		const either = true
			? 30
			: DEither.nullableFilled(true);

		const result = DEither.whenIsRight(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					true,
					"strict"
				>;

				return value;
			},
		);

		expect(result).toBe(30);

			type check = ExpectType<
				typeof result,
				true | 30,
				"strict"
			>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true
				? DEither.nullableFilled(true)
				: DEither.nullableEmpty(),
			DEither.whenIsRight(
				(value) => {
					type check = ExpectType<
						typeof value,
						true,
						"strict"
					>;

					return value;
				},
			),
		);

		expect(result).toBe(true);

		type check = ExpectType<
			typeof result,
			DEither.NullableEmpty | true,
			"strict"
		>;
	});
});
