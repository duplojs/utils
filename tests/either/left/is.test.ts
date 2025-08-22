import { type ExpectType } from "@scripts/common/types/expectType";
import { createEitherFail, createEitherOk, type EitherFail, type EitherLeft, isEitherLeft, unknownIsEitherLeft } from "@scripts/either";

describe("isEitherLeft", () => {
	it("return true", () => {
		const either = true
			? createEitherFail()
			: createEitherOk();

		const predicate = isEitherLeft(either);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				EitherFail,
				"strict"
			>;
		}
	});

	it("return false", () => {
		const either = createEitherOk();

		const predicate = isEitherLeft(either);

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
		const either = createEitherFail() as unknown;

		const predicate = unknownIsEitherLeft(either);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				EitherLeft,
				"strict"
			>;
		}
	});

	it("unknown return false", () => {
		const either = 1 as unknown;

		const predicate = unknownIsEitherLeft(either);

		expect(predicate).toBe(false);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				EitherLeft,
				"strict"
			>;
		}
	});
});
