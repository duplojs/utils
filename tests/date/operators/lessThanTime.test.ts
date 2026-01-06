import { pipe, type ExpectType, DDate } from "@scripts";

describe("lessThanTime", () => {
	const thresholdTime = DDate.createTime(60000);

	it("returns true when input is strictly less than threshold", () => {
		const result = DDate.lessThanTime(
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

	it("returns false when input equals threshold", () => {
		expect(DDate.lessThanTime(thresholdTime, thresholdTime)).toBe(false);
	});

	it("returns false when input is greater", () => {
		expect(DDate.lessThanTime(DDate.createTime(90000), thresholdTime)).toBe(false);
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.createTime(30000),
			DDate.lessThanTime(thresholdTime),
		);

		expect(result).toBe(true);
	});
});
