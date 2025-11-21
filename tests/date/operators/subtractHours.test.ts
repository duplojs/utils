import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("subtractHours", () => {
	const baseDate = fromIso("2020-01-01T00:00:00.000Z");
	const beforeEpochDate = fromIso("-0010-01-01T12:00:00.000Z");

	it("subtracts hours from a date", () => {
		const result = DDate.subtractHours(
			baseDate,
			6,
		);

		expect(result).toBe(fromIso("2019-12-31T18:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.subtractHours(
			baseDate,
			(-10 as number),
		);

		expect(result).toBe(fromIso("2019-12-31T14:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.subtractHours(1),
		);

		expect(result).toBe(fromIso("2019-12-31T23:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.subtractHours(
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
