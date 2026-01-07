import { pipe, type ExpectType, DDate } from "@scripts";

describe("greaterTime", () => {
	const thresholdTime = DDate.createTime(60, "second");

	it("returns true when input is greater than threshold", () => {
		const result = DDate.greaterTime(
			DDate.createTime(120, "second"),
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
		expect(DDate.greaterTime(thresholdTime, thresholdTime)).toBe(true);
	});

	it("returns false when input is less than threshold", () => {
		expect(DDate.greaterTime(DDate.createTime(30, "second"), thresholdTime)).toBe(false);
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.createTime(90, "second"),
			DDate.greaterTime(thresholdTime),
		);

		expect(result).toBe(true);
	});
});
