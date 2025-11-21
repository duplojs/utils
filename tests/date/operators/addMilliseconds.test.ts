import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("addMilliseconds", () => {
	const baseDate = fromIso("2020-01-01T00:00:00.000Z");
	const beforeEpochDate = fromIso("-0010-01-01T00:00:00.000Z");

	it("adds milliseconds to a date", () => {
		const result = DDate.addMilliseconds(
			baseDate,
			250,
		);

		expect(result).toBe(fromIso("2020-01-01T00:00:00.250Z"));

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

		expect(result).toBe(fromIso("2020-01-01T00:00:00.400Z"));

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

		expect(result).toBe(fromIso("2020-01-01T00:00:00.100Z"));

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

		expect(result).toBe(fromIso("-0010-01-01T00:00:00.400Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
