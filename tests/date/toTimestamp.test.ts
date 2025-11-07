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

	it("use in pipe", () => {
		const result = pipe(
			DDate.create(1609459200000),
			DDate.toTimestamp,
		);

		expect(result).toBe(1609459200000);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});
});
