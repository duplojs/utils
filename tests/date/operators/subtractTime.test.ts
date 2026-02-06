import { type ExpectType, DDate } from "@scripts";

describe("subtractTime", () => {
	it("subtracts a TheTime from a TheDate", () => {
		const result = DDate.subtractTime("date3000+", "time2000+");

		expect(DDate.serialize(result)).toBe("date1000+");

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("subtracts a negative TheTime from a TheDate", () => {
		const result = DDate.subtractTime("date1000+", "time1500-");

		expect(DDate.serialize(result)).toBe("date2500+");
	});

	it("subtracts two TheTime values", () => {
		const result = DDate.subtractTime("time1000+", "time500+");

		expect(DDate.serialize(result)).toBe("time500+");

		type check = ExpectType<
			typeof result,
			DDate.TheTime,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = DDate.subtractTime("time1000+")("date2000+");

		expect(DDate.serialize(result)).toBe("date1000+");
	});
});
