import { pipe, type ExpectType, DDate } from "@scripts";

describe("lessTime", () => {
	const thresholdTime = DDate.createTime(60000);

	it("returns true when input is less than threshold", () => {
		const result = DDate.lessTime(
			DDate.createTime(30000),
			thresholdTime,
		);

		expect(result).toBe(true);

		type check = ExpectType<
			typeof result,
			boolean,
			"strict"
		>;
	});

	it("returns true when input equals threshold", () => {
		expect(DDate.lessTime(thresholdTime, thresholdTime)).toBe(true);
	});

	it("returns false when input is greater than threshold", () => {
		expect(DDate.lessTime(DDate.createTime(90000), thresholdTime)).toBe(false);
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.createTime(30000),
			DDate.lessTime(thresholdTime),
		);

		expect(result).toBe(true);
	});
});
