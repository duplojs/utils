import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("subtractYears", () => {
	const baseDate = fromIso("2020-01-01T00:00:00.000Z");
	const beforeEpochDate = fromIso("-0010-06-01T00:00:00.000Z");

	it("subtracts years from a date", () => {
		const result = DDate.subtractYears(
			baseDate,
			2,
		);

		expect(result).toBe(fromIso("2018-01-01T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.subtractYears(
			baseDate,
			(-3 as number),
		);

		expect(result).toBe(fromIso("2017-01-01T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.subtractYears(1),
		);

		expect(result).toBe(fromIso("2019-01-01T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.subtractYears(
			beforeEpochDate,
			2,
		);

		expect(result).toBe(fromIso("-0012-06-01T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
