import { type ExpectType } from "@scripts/common/types/expectType";
import { createBool, createFail, createOk, type EitherBoolTruthy, type EitherFail, type EitherOk, type EitherRight, isRight } from "@scripts/either";

describe("isEitherRight", () => {
	it("return true", () => {
		const either = true
			? createBool(10)
			: createFail();

		const predicate = isRight(either);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				EitherBoolTruthy<10>,
				"strict"
			>;
		}
	});

	it("return false", () => {
		const either = createFail();

		const predicate = isRight(either);

		expect(predicate).toBe(false);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				EitherFail & EitherRight<string, unknown>,
				"strict"
			>;
		}
	});

	it("object return true", () => {
		const either = createOk() as object;

		const predicate = isRight(either);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				EitherRight,
				"strict"
			>;
		}
	});

	it("unknown return false", () => {
		const either = 1 as unknown;

		const predicate = isRight(either);

		expect(predicate).toBe(false);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				EitherRight,
				"strict"
			>;
		}
	});
});
