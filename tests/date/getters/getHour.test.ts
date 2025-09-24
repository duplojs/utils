import { DDate, type ExpectType, pipe } from "@scripts/index";

describe("getHour", () => {
	it("should return hour", () => {
		const date = "2023-12-25T14:30:45.123Z" as DDate.NewDate<"2023-12-25T14:30:45.123Z">;
		const result = DDate.getHour(date);

		expect(result).toBe(14);

		type check = ExpectType<
			typeof result,
			14,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			"2024-06-15T12:00:00Z" as DDate.NewDate<"2024-06-15T12:00:00Z">,
			DDate.getHour,
		);

		expect(result).toBe(12);

		type check = ExpectType<
			typeof result,
			12,
			"strict"
		>;
	});
});
