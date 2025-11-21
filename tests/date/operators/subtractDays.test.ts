import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("subtractDays", () => {
	const baseDate = fromIso("2020-01-01T00:00:00.000Z");
	const beforeEpochDate = fromIso("-0010-01-10T00:00:00.000Z");

	it("subtracts days from a date", () => {
		const result = DDate.subtractDays(
			baseDate,
			4,
		);

		expect(result).toBe(fromIso("2019-12-28T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.subtractDays(
			baseDate,
			(-3 as number),
		);

		expect(result).toBe(fromIso("2019-12-29T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.subtractDays(1),
		);

		expect(result).toBe(fromIso("2019-12-31T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.subtractDays(
			beforeEpochDate,
			5,
		);

		expect(result).toBe(fromIso("-0010-01-05T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
