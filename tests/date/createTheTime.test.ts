import { type ExpectType, DDate } from "@scripts";

describe("createTheTime", () => {
	it("creates with positive timestamp", () => {
		const result = DDate.createTheTime(123);

		expect(result).toBe("time123+");

		type check = ExpectType<
			typeof result,
			DDate.TheTime,
			"strict"
		>;
	});

	it("creates with negative timestamp", () => {
		const result = DDate.createTheTime(-456);

		expect(result).toBe("time456-");

		type check = ExpectType<
			typeof result,
			DDate.TheTime,
			"strict"
		>;
	});

	it("returns time0+ for NaN", () => {
		const result = DDate.createTheTime(Number.NaN);

		expect(result).toBe("time0+");

		type check = ExpectType<
			typeof result,
			DDate.TheTime,
			"strict"
		>;
	});

	it("clamps above maxTimestamp", () => {
		const result = DDate.createTheTime(DDate.maxTimestamp + 1);

		expect(result).toBe(`time${DDate.maxTimestamp}+`);

		type check = ExpectType<
			typeof result,
			DDate.TheTime,
			"strict"
		>;
	});

	it("clamps below minTimestamp", () => {
		const result = DDate.createTheTime(DDate.minTimestamp - 1);

		expect(result).toBe(`time${Math.abs(DDate.minTimestamp)}-`);

		type check = ExpectType<
			typeof result,
			DDate.TheTime,
			"strict"
		>;
	});
});
