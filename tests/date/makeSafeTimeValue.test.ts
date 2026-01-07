import { type ExpectType, DDate } from "@scripts";
import { makeSafeTimeValue } from "@scripts/date/makeSafeTimeValue";

describe("makeSafeTimeValue", () => {
	it("returns 0 for NaN", () => {
		const result = makeSafeTimeValue(Number.NaN);

		expect(result).toBe(0);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("clamps above maxTimeValue", () => {
		const result = makeSafeTimeValue(DDate.maxTimeValue + 1);

		expect(result).toBe(DDate.maxTimeValue);
		expect(makeSafeTimeValue(Infinity)).toBe(DDate.maxTimeValue);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("clamps below minTimeValue", () => {
		const result = makeSafeTimeValue(DDate.minTimeValue - 1);

		expect(result).toBe(DDate.minTimeValue);
		expect(makeSafeTimeValue(-Infinity)).toBe(DDate.minTimeValue);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("returns integers within range", () => {
		const value = 123456;
		const result = makeSafeTimeValue(value);

		expect(result).toBe(value);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("rounds fractional values", () => {
		expect(makeSafeTimeValue(1.4)).toBe(1);
		expect(makeSafeTimeValue(-2.6)).toBe(-3);
	});
});
