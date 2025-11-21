import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("addSeconds", () => {
	const baseDate = fromIso("2020-01-01T00:00:00.000Z");
	const beforeEpochDate = fromIso("-0010-01-01T00:00:00.000Z");

	it("adds seconds to a date", () => {
		const result = DDate.addSeconds(
			baseDate,
			75,
		);

		expect(result).toBe(fromIso("2020-01-01T00:01:15.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.addSeconds(
			baseDate,
			(-30 as number),
		);

		expect(result).toBe(fromIso("2020-01-01T00:00:30.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.addSeconds(10),
		);

		expect(result).toBe(fromIso("2020-01-01T00:00:10.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.addSeconds(
			beforeEpochDate,
			45,
		);

		expect(result).toBe(fromIso("-0010-01-01T00:00:45.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
