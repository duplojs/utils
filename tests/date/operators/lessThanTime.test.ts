import { pipe, type ExpectType, DDate } from "@scripts";

describe("lessThanTime", () => {
	const thresholdTime = DDate.createTime(60, "second");

	it("returns true when input is strictly less than threshold", () => {
		const result = DDate.lessThanTime(
			DDate.createTime(30, "second"),
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
		expect(DDate.lessThanTime(DDate.createTime(90, "second"), thresholdTime)).toBe(false);
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.createTime(30, "second"),
			DDate.lessThanTime(thresholdTime),
		);

		expect(result).toBe(true);
	});
});
