import { DDate, type ExpectType, pipe } from "@scripts/index";

describe("getDay", () => {
	it("should return day", () => {
		const date = "2023-12-25T14:30:45.123Z" as DDate.NewDate<"2023-12-25T14:30:45.123Z">;
		const result = DDate.getDay(date);

		expect(result).toBe(25);

		type check = ExpectType<
			typeof result,
			25,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			"2024-06-15T12:00:00Z" as DDate.NewDate<"2024-06-15T12:00:00Z">,
			DDate.getDay,
		);

		expect(result).toBe(15);

		type check = ExpectType<
			typeof result,
			15,
			"strict"
		>;
	});
});
