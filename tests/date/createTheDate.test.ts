import { type ExpectType, DDate } from "@scripts";

describe("createTheDate", () => {
	it("creates with positive timestamp", () => {
		const result = DDate.createTheDate(123);

		expect(result).toBe("date123+");

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("creates with negative timestamp", () => {
		const result = DDate.createTheDate(-456);

		expect(result).toBe("date456-");

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("returns date0+ for NaN", () => {
		const result = DDate.createTheDate(Number.NaN);

		expect(result).toBe("date0+");

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("clamps above maxTimestamp", () => {
		const result = DDate.createTheDate(DDate.maxTimestamp + 1);

		expect(result).toBe(`date${DDate.maxTimestamp}+`);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("clamps below minTimestamp", () => {
		const result = DDate.createTheDate(DDate.minTimestamp - 1);

		expect(result).toBe(`date${Math.abs(DDate.minTimestamp)}-`);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
