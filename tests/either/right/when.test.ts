import { pipe } from "@scripts/common/pipe";
import { type ExpectType } from "@scripts/common/types/expectType";
import { createEitherNullableEmpty, createEitherNullableFilled, type EitherNullableEmpty, whenEitherIsRight } from "@scripts/either";

describe("whenEitherIsRight", () => {
	it("match", () => {
		const either = true
			? createEitherNullableFilled(true)
			: createEitherNullableEmpty();

		const result = whenEitherIsRight(
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

		expect(result).toBe(true);

		type check = ExpectType<
			typeof result,
			EitherNullableEmpty | true,
			"strict"
		>;
	});

	it("not match with right", () => {
		const either = createEitherNullableEmpty();

		const result = whenEitherIsRight(
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
			EitherNullableEmpty,
			"strict"
		>;
	});

	it("not match with any value", () => {
		const either = true
			? 30
			: createEitherNullableFilled(true);

		const result = whenEitherIsRight(
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
				? createEitherNullableFilled(true)
				: createEitherNullableEmpty(),
			whenEitherIsRight(
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
			EitherNullableEmpty | true,
			"strict"
		>;
	});
});
