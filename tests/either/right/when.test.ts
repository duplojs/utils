import { pipe } from "@scripts/common/pipe";
import { type ExpectType } from "@scripts/common/types/expectType";
import { createNullableEmpty, createNullableFilled, type EitherNullableEmpty, whenIsRight } from "@scripts/either";

describe("whenEitherIsRight", () => {
	it("match", () => {
		const either = true
			? createNullableFilled(true)
			: createNullableEmpty();

		const result = whenIsRight(
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
			EitherNullableEmpty | 10,
			"strict"
		>;
	});

	it("not match with right", () => {
		const either = createNullableEmpty();

		const result = whenIsRight(
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
			: createNullableFilled(true);

		const result = whenIsRight(
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
				? createNullableFilled(true)
				: createNullableEmpty(),
			whenIsRight(
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
