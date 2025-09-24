import { DDate, type ExpectType, pipe } from "@scripts/index";

describe("getMonth", () => {
	it("should return month", () => {
		const date = "2023-12-25T14:30:45.123Z" as DDate.NewDate<"2023-12-25T14:30:45.123Z">;
		const result = DDate.getMonth(date);

		expect(result).toBe(12);

		type check = ExpectType<
			typeof result,
			12,
			"strict"
		>;
	});
});
