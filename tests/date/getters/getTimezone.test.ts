import { DDate, type ExpectType, pipe } from "@scripts/index";

describe("getTimezone", () => {
	it("should return UTC timezone", () => {
		const date = "2023-12-25T14:30:45.123Z" as DDate.NewDate<"2023-12-25T14:30:45.123Z">;
		const result = DDate.getTimezone(date);

		expect(result).toBe("Z");

		type check = ExpectType<
			typeof result,
			"Z",
			"strict"
		>;
	});

	it("should return positive timezone offset", () => {
		const date = "2023-12-25T14:30:45+01:00" as DDate.NewDate<"2023-12-25T14:30:45+01:00">;
		const result = DDate.getTimezone(date);

		expect(result).toBe("+01:00");

		type check = ExpectType<
			typeof result,
			"+01:00",
			"strict"
		>;
	});
});
