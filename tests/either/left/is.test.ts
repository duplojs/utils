import { type ExpectType } from "@scripts/common/types/expectType";
import { createFail, createOk, type EitherFail, type EitherLeft, isLeft } from "@scripts/either";

describe("isEitherLeft", () => {
	it("return true", () => {
		const either = true
			? createFail()
			: createOk();

		const predicate = isLeft(either);

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
		const either = createOk();

		const predicate = isLeft(either);

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
		const either = createFail() as unknown;

		const predicate = isLeft(either);

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

		const predicate = isLeft(either);

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
