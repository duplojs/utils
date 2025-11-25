import { pipe, type ExpectType, DDate } from "@scripts";

describe("addMilliseconds", () => {
	const baseDate = DDate.create("2020-01-01");
	const beforeEpochDate = DDate.create("-0010-01-01");

	it("adds milliseconds to a date", () => {
		const result = DDate.addMilliseconds(
			baseDate,
			250,
		);

		expect(result).toBe(DDate.create("2020-01-01", { millisecond: "250" }));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.addMilliseconds(
			baseDate,
			(-400 as number),
		);

		expect(result).toBe(DDate.create("2020-01-01", { millisecond: "400" }));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.addMilliseconds(100),
		);

		expect(result).toBe(DDate.create("2020-01-01", { millisecond: "100" }));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.addMilliseconds(
			beforeEpochDate,
			400,
		);

		expect(result).toBe(DDate.create("-0010-01-01", { millisecond: "400" }));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
