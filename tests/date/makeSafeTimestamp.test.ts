import { type ExpectType, DDate } from "@scripts";

describe("makeSafeTimestamp", () => {
	it("returns 0 for NaN", () => {
		const result = DDate.makeSafeTimestamp(Number.NaN);

		expect(result).toBe(0);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("clamps above maxTimestamp", () => {
		const result = DDate.makeSafeTimestamp(DDate.maxTimestamp + 1);

		expect(result).toBe(DDate.maxTimestamp);

		expect(
			DDate.makeSafeTimestamp(Infinity),
		).toBe(DDate.maxTimestamp);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("clamps below minTimestamp", () => {
		const result = DDate.makeSafeTimestamp(DDate.minTimestamp - 1);

		expect(result).toBe(DDate.minTimestamp);

		expect(
			DDate.makeSafeTimestamp(-Infinity),
		).toBe(DDate.minTimestamp);

		expect(
			DDate.makeSafeTimestamp(DDate.minTimestamp - 1),
		).toBe(DDate.minTimestamp);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("returns unchanged timestamp within range", () => {
		const value = 1234567890;
		const result = DDate.makeSafeTimestamp(value);

		expect(result).toBe(value);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("rounds fractional values", () => {
		expect(DDate.makeSafeTimestamp(1.4)).toBe(1);
		expect(DDate.makeSafeTimestamp(-2.6)).toBe(-3);
	});

	it("keeps boundary values", () => {
		const maxResult = DDate.makeSafeTimestamp(DDate.maxTimestamp);
		const minResult = DDate.makeSafeTimestamp(DDate.minTimestamp);

		expect(maxResult).toBe(DDate.maxTimestamp);
		expect(minResult).toBe(DDate.minTimestamp);

		type maxCheck = ExpectType<
			typeof maxResult,
			number,
			"strict"
		>;

		type minCheck = ExpectType<
			typeof minResult,
			number,
			"strict"
		>;
	});
});
