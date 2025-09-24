import { DDate, type ExpectType, pipe } from "@scripts/index";

describe("getMonthName", () => {
	it("should return month name", () => {
		const date = "2023-12-25T14:30:45.123Z" as DDate.NewDate<"2023-12-25T14:30:45.123Z">;
		const result = DDate.getMonthName(date);

		expect(result).toBe("December");

		type check = ExpectType<
			typeof result,
			"December",
			"strict"
		>;
	});
});
