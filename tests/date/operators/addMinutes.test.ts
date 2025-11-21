import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("addMinutes", () => {
	const baseDate = fromIso("2020-01-01T00:00:00.000Z");
	const beforeEpochDate = fromIso("-0010-01-01T00:00:00.000Z");

	it("adds minutes to a date", () => {
		const result = DDate.addMinutes(
			baseDate,
			90,
		);

		expect(result).toBe(fromIso("2020-01-01T01:30:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.addMinutes(
			baseDate,
			(-45 as number),
		);

		expect(result).toBe(fromIso("2020-01-01T00:45:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.addMinutes(15),
		);

		expect(result).toBe(fromIso("2020-01-01T00:15:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.addMinutes(
			beforeEpochDate,
			45,
		);

		expect(result).toBe(fromIso("-0010-01-01T00:45:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
