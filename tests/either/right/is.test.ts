import { type ExpectType } from "@scripts/common/types/expectType";
import { createEitherBool, createEitherFail, createEitherOk, type EitherBoolTruthy, type EitherFail, type EitherOk, type EitherRight, isEitherRight } from "@scripts/either";

describe("isEitherRight", () => {
	it("return true", () => {
		const either = true
			? createEitherBool(10)
			: createEitherFail();

		const predicate = isEitherRight(either);

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
		const either = createEitherFail();

		const predicate = isEitherRight(either);

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
		const either = createEitherOk() as object;

		const predicate = isEitherRight(either);

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

		const predicate = isEitherRight(either);

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
