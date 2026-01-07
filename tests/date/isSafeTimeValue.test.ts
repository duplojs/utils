import { type ExpectType, DDate } from "@scripts";
import { isSafeTimeValue } from "@scripts/date/isSafeTimeValue";

describe("isSafeTimeValue", () => {
	it("returns true for safe integers inside bounds", () => {
		const result = isSafeTimeValue(0);

		expect(result).toBe(true);
		expect(isSafeTimeValue(DDate.minTimeValue + 1)).toBe(true);
		expect(isSafeTimeValue(DDate.maxTimeValue - 1)).toBe(true);

		type check = ExpectType<
			typeof result,
			boolean,
			"strict"
		>;
	});

	it("returns false for non-safe integers", () => {
		expect(isSafeTimeValue(1.2)).toBe(false);
		expect(isSafeTimeValue(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
	});

	it("returns false at boundaries", () => {
		expect(isSafeTimeValue(DDate.minTimeValue)).toBe(false);
		expect(isSafeTimeValue(DDate.maxTimeValue)).toBe(false);
	});

	it("returns false outside bounds", () => {
		expect(isSafeTimeValue(DDate.minTimeValue - 1)).toBe(false);
		expect(isSafeTimeValue(DDate.maxTimeValue + 1)).toBe(false);
	});
});
