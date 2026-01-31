import { type ExpectType, DDate } from "@scripts";

describe("makeSafeTimeValue", () => {
	it("returns 0 for NaN", () => {
		const result = DDate.makeSafeTimeValue(Number.NaN);

		expect(result).toBe(0);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("clamps above maxTimeValue", () => {
		const result = DDate.makeSafeTimeValue(DDate.maxTimeValue + 1);

		expect(result).toBe(DDate.maxTimeValue);
		expect(DDate.makeSafeTimeValue(Infinity)).toBe(DDate.maxTimeValue);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("clamps below minTimeValue", () => {
		const result = DDate.makeSafeTimeValue(DDate.minTimeValue - 1);

		expect(result).toBe(DDate.minTimeValue);
		expect(DDate.makeSafeTimeValue(-Infinity)).toBe(DDate.minTimeValue);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("returns integers within range", () => {
		const value = 123456;
		const result = DDate.makeSafeTimeValue(value);

		expect(result).toBe(value);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("rounds fractional values", () => {
		expect(DDate.makeSafeTimeValue(1.4)).toBe(1);
		expect(DDate.makeSafeTimeValue(-2.6)).toBe(-3);
	});
});
