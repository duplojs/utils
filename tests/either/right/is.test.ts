import { type ExpectType } from "@scripts/common/types/expectType";
import { createEitherFail, createEitherOk, type EitherOk, type EitherRight, isEitherRight, unknownIsEitherRight } from "@scripts/either";

describe("isEitherRight", () => {
	it("return true", () => {
		const either = true
			? createEitherOk()
			: createEitherFail();

		const predicate = isEitherRight(either);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				EitherOk,
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
				never,
				"strict"
			>;
		}
	});

	it("unknown return true", () => {
		const either = createEitherOk() as unknown;

		const predicate = unknownIsEitherRight(either);

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

		const predicate = unknownIsEitherRight(either);

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
