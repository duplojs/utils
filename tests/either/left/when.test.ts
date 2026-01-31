import { pipe, type ExpectType, DEither } from "@scripts";

describe("whenEitherIsLeft", () => {
	it("match", () => {
		const either = true
			? DEither.nullableEmpty()
			: DEither.nullableFilled(true);

		const result = DEither.whenIsLeft(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					null,
					"strict"
				>;

				return value;
			},
		);

		expect(result).toBe(null);

			type check = ExpectType<
				typeof result,
				DEither.NullableFilled<true> | null,
				"strict"
			>;
	});

	it("not match with right", () => {
		const either = DEither.nullableFilled(10);

		const result = DEither.whenIsLeft(
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
			DEither.NullableFilled<10>,
			"strict"
		>;
	});

	it("not match with any value", () => {
		const either = true
			? 30
			: DEither.nullableEmpty();

		const result = DEither.whenIsLeft(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					null,
					"strict"
				>;

				return 0;
			},
		);

		expect(result).toBe(30);

		type check = ExpectType<
			typeof result,
			0 | 30,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true
				? DEither.nullableEmpty()
				: DEither.nullableFilled(true),
			DEither.whenIsLeft(
				(value) => {
					type check = ExpectType<
						typeof value,
						null,
						"strict"
					>;

					return value;
				},
			),
		);

		expect(result).toBe(null);

		type check = ExpectType<
			typeof result,
			DEither.NullableFilled<true> | null,
			"strict"
		>;
	});
});
