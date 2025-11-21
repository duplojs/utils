import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("addYears", () => {
	const baseDate = fromIso("2020-01-01T00:00:00.000Z");
	const beforeEpochDate = fromIso("-0010-06-01T00:00:00.000Z");

	it("adds years to a date", () => {
		const result = DDate.addYears(
			baseDate,
			3,
		);

		expect(result).toBe(fromIso("2023-01-01T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.addYears(
			baseDate,
			(-2 as number),
		);

		expect(result).toBe(fromIso("2022-01-01T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.addYears(1),
		);

		expect(result).toBe(fromIso("2021-01-01T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.addYears(
			beforeEpochDate,
			2,
		);

		expect(result).toBe(fromIso("-0008-06-01T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
