import { pipe, type ExpectType, DDate } from "@scripts";

describe("toTimestamp", () => {
	it("toTimestamp converts positive TheDate to number", () => {
		const result = DDate.toTimestamp("date1609459200000+");

		expect(result).toBe(1609459200000);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("toTimestamp converts negative TheDate to number", () => {
		const result = DDate.toTimestamp("date1000-");

		expect(result).toBe(-1000);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("clamps above maxTimestamp", () => {
		const result = DDate.toTimestamp("date8640000000000001+");

		expect(result).toBe(DDate.maxTimestamp);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("clamps below minTimestamp", () => {
		const result = DDate.toTimestamp("date8640000000000001-");

		expect(result).toBe(DDate.minTimestamp);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.createOrThrow(1609459200000),
			DDate.toTimestamp,
		);

		expect(result).toBe(1609459200000);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("handles legacy TheTime input", () => {
		const result = DDate.toTimestamp(
			"time1000+" as unknown as DDate.TheDate,
		);

		expect(result).toBe(1000);
	});
});
