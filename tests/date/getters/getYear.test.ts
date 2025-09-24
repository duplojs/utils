import { DDate, type ExpectType, pipe } from "@scripts/index";

describe("getYear", () => {
	it("should return year", () => {
		const date = "2023-12-25T14:30:45.123Z" as DDate.NewDate<"2023-12-25T14:30:45.123Z">;
		const result = DDate.getYear(date);

		expect(result).toBe(2023);

		type check = ExpectType<
			typeof result,
			2023,
			"strict"
		>;
	});
});
