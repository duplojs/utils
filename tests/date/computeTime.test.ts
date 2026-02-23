import { DDate, pipe, type ExpectType } from "@scripts";

describe("computeTime", () => {
	it("converts TheTime to requested unit with classic call", () => {
		const input = DDate.createTime(604_800_000, "millisecond");
		const result = DDate.computeTime(input, "day");

		expect(result).toBe(7);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("converts serialized TheTime to requested unit", () => {
		const result = DDate.computeTime("time3600000-", "minute");

		expect(result).toBe(-60);
	});

	it("supports all supported units", () => {
		const input = DDate.createTime(604800000, "millisecond");

		expect(DDate.computeTime(input, "week")).toBe(1);
		expect(DDate.computeTime(input, "day")).toBe(7);
		expect(DDate.computeTime(input, "hour")).toBe(168);
		expect(DDate.computeTime(input, "minute")).toBe(10_080);
		expect(DDate.computeTime(input, "second")).toBe(604_800);
		expect(DDate.computeTime(input, "millisecond")).toBe(604_800_000);
	});

	it("works in pipe with curried overload", () => {
		const result = pipe(
			DDate.createTime(7_200_000, "millisecond"),
			DDate.computeTime("hour"),
		);

		expect(result).toBeCloseTo(2);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});
});
