import { DDate, type ExpectType, pipe } from "@scripts/index";

describe("getMinute", () => {
	it("should return minute", () => {
		const date = "2023-12-25T14:30:45.123Z" as DDate.NewDate<"2023-12-25T14:30:45.123Z">;
		const result = DDate.getMinute(date);

		expect(result).toBe(30);

		type check = ExpectType<
			typeof result,
			30,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			"2024-06-15T12:45:00Z" as DDate.NewDate<"2024-06-15T12:45:00Z">,
			DDate.getMinute,
		);

		expect(result).toBe(45);

		type check = ExpectType<
			typeof result,
			45,
			"strict"
		>;
	});
});
