import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("addDays", () => {
	const baseDate = fromIso("2020-01-01T00:00:00.000Z");
	const beforeEpochDate = fromIso("-0010-01-01T00:00:00.000Z");

	it("adds days to a date", () => {
		const result = DDate.addDays(
			baseDate,
			5,
		);

		expect(result).toBe(fromIso("2020-01-06T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.addDays(
			baseDate,
			(-3 as number),
		);

		expect(result).toBe(fromIso("2020-01-04T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.addDays(1),
		);

		expect(result).toBe(fromIso("2020-01-02T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.addDays(
			beforeEpochDate,
			5,
		);

		expect(result).toBe(fromIso("-0010-01-06T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
