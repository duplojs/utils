import { type ExpectType } from "@scripts/common/types/expectType";
import { bool, fail, ok, type EitherBoolTruthy, type EitherFail, type EitherOk, type EitherRight, isRight } from "@scripts/either";

describe("isEitherRight", () => {
	it("return true", () => {
		const either = true
			? bool(10)
			: fail();

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
		const either = fail();

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
		const either = ok() as object;

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
