import { DDate, type ExpectType, pipe } from "@scripts/index";

describe("getSecond", () => {
	it("should return second", () => {
		const date = "2023-12-25T14:30:45.123Z" as DDate.NewDate<"2023-12-25T14:30:45.123Z">;
		const result = DDate.getSecond(date);

		expect(result).toBe(45);

		type check = ExpectType<
			typeof result,
			45,
			"strict"
		>;
	});
});
