import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("subtractWeeks", () => {
	const baseDate = fromIso("2020-01-01T00:00:00.000Z");
	const beforeEpochDate = fromIso("-0010-01-15T00:00:00.000Z");

	it("subtracts weeks from a date", () => {
		const result = DDate.subtractWeeks(
			baseDate,
			1,
		);

		expect(result).toBe(fromIso("2019-12-25T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.subtractWeeks(
			baseDate,
			(-2 as number),
		);

		expect(result).toBe(fromIso("2019-12-18T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.subtractWeeks(1),
		);

		expect(result).toBe(fromIso("2019-12-25T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.subtractWeeks(
			beforeEpochDate,
			2,
		);

		expect(result).toBe(fromIso("-0010-01-01T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
