import { pipe } from "@scripts/common/pipe";
import { type ExpectType } from "@scripts/common/types/expectType";
import { createFail, createNullableEmpty, createNullableFilled, type EitherNullableFilled, whenIsLeft } from "@scripts/either";

describe("whenEitherIsLeft", () => {
	it("match", () => {
		const either = true
			? createNullableEmpty()
			: createNullableFilled(true);

		const result = whenIsLeft(
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
				EitherNullableFilled<true> | null,
				"strict"
			>;
	});

	it("not match with right", () => {
		const either = createNullableFilled(10);

		const result = whenIsLeft(
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
			EitherNullableFilled<10>,
			"strict"
		>;
	});

	it("not match with any value", () => {
		const either = true
			? 30
			: createNullableEmpty();

		const result = whenIsLeft(
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
				? createNullableEmpty()
				: createNullableFilled(true),
			whenIsLeft(
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
			EitherNullableFilled<true> | null,
			"strict"
		>;
	});
});
