import { pipe, type ExpectType, DDate } from "@scripts";

describe("lessTime", () => {
	const thresholdTime = DDate.createTime(60, "second");

	it("returns true when input is less than threshold", () => {
		const result = DDate.lessTime(
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

	it("returns true when input equals threshold", () => {
		expect(DDate.lessTime(thresholdTime, thresholdTime)).toBe(true);
	});

	it("returns false when input is greater than threshold", () => {
		expect(DDate.lessTime(DDate.createTime(90, "second"), thresholdTime)).toBe(false);
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.createTime(30, "second"),
			DDate.lessTime(thresholdTime),
		);

		expect(result).toBe(true);
	});
});
