import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("subtractSeconds", () => {
	const baseDate = fromIso("2020-01-01T00:00:00.000Z");
	const beforeEpochDate = fromIso("-0010-01-01T00:01:00.000Z");

	it("subtracts seconds from a date", () => {
		const result = DDate.subtractSeconds(
			baseDate,
			75,
		);

		expect(result).toBe(fromIso("2019-12-31T23:58:45.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.subtractSeconds(
			baseDate,
			(-30 as number),
		);

		expect(result).toBe(fromIso("2019-12-31T23:59:30.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.subtractSeconds(10),
		);

		expect(result).toBe(fromIso("2019-12-31T23:59:50.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.subtractSeconds(
			beforeEpochDate,
			30,
		);

		expect(result).toBe(fromIso("-0010-01-01T00:00:30.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
