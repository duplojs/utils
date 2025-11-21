import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("subtractMinutes", () => {
	const baseDate = fromIso("2020-01-01T00:00:00.000Z");
	const beforeEpochDate = fromIso("-0010-01-01T01:00:00.000Z");

	it("subtracts minutes from a date", () => {
		const result = DDate.subtractMinutes(
			baseDate,
			90,
		);

		expect(result).toBe(fromIso("2019-12-31T22:30:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.subtractMinutes(
			baseDate,
			(-45 as number),
		);

		expect(result).toBe(fromIso("2019-12-31T23:15:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.subtractMinutes(15),
		);

		expect(result).toBe(fromIso("2019-12-31T23:45:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.subtractMinutes(
			beforeEpochDate,
			30,
		);

		expect(result).toBe(fromIso("-0010-01-01T00:30:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
