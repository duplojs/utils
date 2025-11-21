import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("addHours", () => {
	const baseDate = fromIso("2020-01-01T00:00:00.000Z");
	const beforeEpochDate = fromIso("-0010-01-01T00:00:00.000Z");

	it("adds hours to a date", () => {
		const result = DDate.addHours(
			baseDate,
			6,
		);

		expect(result).toBe(fromIso("2020-01-01T06:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.addHours(
			baseDate,
			(-10 as number),
		);

		expect(result).toBe(fromIso("2020-01-01T10:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.addHours(1),
		);

		expect(result).toBe(fromIso("2020-01-01T01:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.addHours(
			beforeEpochDate,
			6,
		);

		expect(result).toBe(fromIso("-0010-01-01T06:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
