import { DDate, type ExpectType, pipe } from "@scripts/index";

describe("getWeekdayName", () => {
	it("should return weekday name", () => {
		const date = "2023-12-25T14:30:45.123Z" as DDate.NewDate<"2023-12-25T14:30:45.123Z" >;
		const result = DDate.getWeekdayName(date);

		expect(result).toBe("Monday");

		type check = ExpectType<
			typeof result,
			DDate.Days,
			"strict"
		>;
	});
});
