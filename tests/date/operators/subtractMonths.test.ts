import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("subtractMonths", () => {
	const baseDate = fromIso("2020-01-01T00:00:00.000Z");
	const beforeEpochDate = fromIso("-0010-06-01T00:00:00.000Z");

	it("subtracts months from a date", () => {
		const result = DDate.subtractMonths(
			baseDate,
			2,
		);

		expect(result).toBe(fromIso("2019-11-01T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.subtractMonths(
			baseDate,
			(-4 as number),
		);

		expect(result).toBe(fromIso("2019-09-01T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.subtractMonths(1),
		);

		expect(result).toBe(fromIso("2019-12-01T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.subtractMonths(
			beforeEpochDate,
			2,
		);

		expect(result).toBe(fromIso("-0010-04-01T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
