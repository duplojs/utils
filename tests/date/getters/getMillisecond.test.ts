import { DDate, type ExpectType, pipe } from "@scripts/index";

describe("getMillisecond", () => {
	it("should return millisecond", () => {
		const date = "2023-12-25T14:30:45.123Z" as DDate.NewDate<"2023-12-25T14:30:45.123Z">;
		const result = DDate.getMillisecond(date);

		expect(result).toBe(123);

		type check = ExpectType<
			typeof result,
			123,
			"strict"
		>;
	});

	it("should return undefined when no milliseconds", () => {
		const date = "2023-12-25T14:30:45Z" as DDate.NewDate<"2023-12-25T14:30:45Z">;

		const result = DDate.getMillisecond(date);

		expect(result).toBe(0);

		type check = ExpectType<
			typeof result,
			0,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			"2024-06-15T12:45:30.500Z" as DDate.NewDate<"2024-06-15T12:45:30.500Z">,
			DDate.getMillisecond,
		);

		expect(result).toBe(500);

		type check = ExpectType<
			typeof result,
			500,
			"strict"
		>;
	});
});
