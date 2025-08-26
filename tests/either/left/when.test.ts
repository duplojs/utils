import { pipe } from "@scripts/common/pipe";
import { type ExpectType } from "@scripts/common/types/expectType";
import { createEitherFail, createEitherNullableEmpty, createEitherNullableFilled, type EitherNullableFilled, whenEitherIsLeft } from "@scripts/either";

describe("whenEitherIsLeft", () => {
	it("match", () => {
		const either = true
			? createEitherNullableEmpty()
			: createEitherNullableFilled(true);

		const result = whenEitherIsLeft(
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
		const either = createEitherNullableFilled(10);

		const result = whenEitherIsLeft(
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
			: createEitherNullableEmpty();

		const result = whenEitherIsLeft(
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

		expect(result).toBe(30);

		type check = ExpectType<
			typeof result,
			null | 30,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true
				? createEitherNullableEmpty()
				: createEitherNullableFilled(true),
			whenEitherIsLeft(
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
