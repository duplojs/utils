import { type ExpectType, DDate } from "@scripts";

describe("addTime", () => {
	it("adds a TheTime to a TheDate", () => {
		const result = DDate.addTime("date1000+", "time2000+");

		expect(result).toBe("date3000+");

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("adds a negative TheTime to a TheDate", () => {
		const result = DDate.addTime("date1000+", "time1500-");

		expect(result).toBe("date500-");
	});

	it("adds two TheTime values", () => {
		const result = DDate.addTime("time1000+", "time500-");

		expect(result).toBe("time500+");

		type check = ExpectType<
			typeof result,
			DDate.TheTime,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = DDate.addTime("time1000+")("date2000+");

		expect(result).toBe("date3000+");
	});
});
