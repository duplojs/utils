import { type ExpectType, DDate } from "@scripts";

describe("isSafeTimeValue", () => {
	it("returns true for safe integers inside bounds", () => {
		const result = DDate.isSafeTimeValue(0);

		expect(result).toBe(true);
		expect(DDate.isSafeTimeValue(DDate.minTimeValue + 1)).toBe(true);
		expect(DDate.isSafeTimeValue(DDate.maxTimeValue - 1)).toBe(true);

		type check = ExpectType<
			typeof result,
			boolean,
			"strict"
		>;
	});

	it("returns false for non-safe integers", () => {
		expect(DDate.isSafeTimeValue(1.2)).toBe(false);
		expect(DDate.isSafeTimeValue(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
	});

	it("returns false at boundaries", () => {
		expect(DDate.isSafeTimeValue(DDate.minTimeValue)).toBe(false);
		expect(DDate.isSafeTimeValue(DDate.maxTimeValue)).toBe(false);
	});

	it("returns false outside bounds", () => {
		expect(DDate.isSafeTimeValue(DDate.minTimeValue - 1)).toBe(false);
		expect(DDate.isSafeTimeValue(DDate.maxTimeValue + 1)).toBe(false);
	});
});
