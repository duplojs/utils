import { type ExpectType, DDate } from "@scripts";

describe("isSafeTimestamp", () => {
	it("returns true for safe timestamp within range", () => {
		const result = DDate.isSafeTimestamp(0);

		expect(result).toBe(true);

		type check = ExpectType<
			typeof result,
			boolean,
			"strict"
		>;
	});

	it("returns false for non-safe integer", () => {
		const result = DDate.isSafeTimestamp(Number.MAX_SAFE_INTEGER + 1);

		expect(result).toBe(false);
	});

	it("returns false when below minTimestamp", () => {
		const belowMin = DDate.minTimestamp - 1;

		expect(DDate.isSafeTimestamp(belowMin)).toBe(false);
	});

	it("returns false when above maxTimestamp", () => {
		const aboveMax = DDate.maxTimestamp + 1;

		expect(DDate.isSafeTimestamp(aboveMax)).toBe(false);
	});

	it("returns false at min/max boundaries", () => {
		expect(DDate.isSafeTimestamp(DDate.minTimestamp)).toBe(false);
		expect(DDate.isSafeTimestamp(DDate.maxTimestamp)).toBe(false);
	});
});
