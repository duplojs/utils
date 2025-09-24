import { DDate, type ExpectType } from "@scripts/index";

describe("toTimestamp", () => {
	it("should convert to timestamp number", () => {
		const date = "2023-12-25T14:30:45.123Z" as DDate.NewDate;
		const result = DDate.toTimestamp(date);

		expect(result).toBe(1703514645123);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});
});
