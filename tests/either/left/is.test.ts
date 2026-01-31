import { type ExpectType, DEither } from "@scripts";

describe("isEitherLeft", () => {
	it("return true", () => {
		const either = true
			? DEither.fail()
			: DEither.ok();

		const predicate = DEither.isLeft(either);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				DEither.Fail,
				"strict"
			>;
		}
	});

	it("return false", () => {
		const either = DEither.ok();

		const predicate = DEither.isLeft(either);

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
		const either = DEither.fail() as unknown;

		const predicate = DEither.isLeft(either);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				never,
				"strict"
			>;
		}
	});

	it("unknown return false", () => {
		const either = 1 as unknown;

		const predicate = DEither.isLeft(either);

		expect(predicate).toBe(false);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				never,
				"strict"
			>;
		}
	});
});
