import { pipe, type ExpectType, DDate } from "@scripts";

describe("greaterThanTime", () => {
	const thresholdTime = DDate.createTime(60000);

	it("returns true when input is strictly greater than threshold", () => {
		const result = DDate.greaterThanTime(
			DDate.createTime(120000),
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
		expect(DDate.greaterThanTime(thresholdTime, thresholdTime)).toBe(false);
	});

	it("returns false when input is less", () => {
		expect(DDate.greaterThanTime(DDate.createTime(30000), thresholdTime)).toBe(false);
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.createTime(90000),
			DDate.greaterThanTime(thresholdTime),
		);

		expect(result).toBe(true);
	});
});
