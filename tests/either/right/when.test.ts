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
});
