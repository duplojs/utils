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
});
