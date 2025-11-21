import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("addMonths", () => {
	const baseDate = fromIso("2020-01-01T00:00:00.000Z");
	const beforeEpochDate = fromIso("-0010-06-01T00:00:00.000Z");

	it("adds months to a date", () => {
		const result = DDate.addMonths(
			baseDate,
			2,
		);

		expect(result).toBe(fromIso("2020-03-01T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.addMonths(
			baseDate,
			(-5 as number),
		);

		expect(result).toBe(fromIso("2020-06-01T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.addMonths(1),
		);

		expect(result).toBe(fromIso("2020-02-01T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.addMonths(
			beforeEpochDate,
			2,
		);

		expect(result).toBe(fromIso("-0010-08-01T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
