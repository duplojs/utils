import { type ExpectType, DEither } from "@scripts";

describe("isEitherRight", () => {
	it("return true", () => {
		const either = true
			? DEither.bool(10)
			: DEither.fail();

		const predicate = DEither.isRight(either);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				DEither.BoolTruthy<10>,
				"strict"
			>;
		}
	});

	it("return false", () => {
		const either = DEither.fail();

		const predicate = DEither.isRight(either);

		expect(predicate).toBe(false);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				never,
				"strict"
			>;
		}
	});

	it("object return true", () => {
		const either = DEither.ok() as object;

		const predicate = DEither.isRight(either);

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

		const predicate = DEither.isRight(either);

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
