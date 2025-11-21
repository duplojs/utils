import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("addWeeks", () => {
	const baseDate = fromIso("2020-01-01T00:00:00.000Z");
	const beforeEpochDate = fromIso("-0010-01-01T00:00:00.000Z");

	it("adds weeks to a date", () => {
		const result = DDate.addWeeks(
			baseDate,
			1,
		);

		expect(result).toBe(fromIso("2020-01-08T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.addWeeks(
			baseDate,
			(-2 as number),
		);

		expect(result).toBe(fromIso("2020-01-15T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.addWeeks(1),
		);

		expect(result).toBe(fromIso("2020-01-08T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.addWeeks(
			beforeEpochDate,
			2,
		);

		expect(result).toBe(fromIso("-0010-01-15T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
