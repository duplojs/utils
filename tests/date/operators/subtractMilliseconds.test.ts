import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("subtractMilliseconds", () => {
	const baseDate = fromIso("2020-01-01T00:00:00.000Z");
	const beforeEpochDate = fromIso("-0010-01-01T00:00:01.000Z");

	it("subtracts milliseconds from a date", () => {
		const result = DDate.subtractMilliseconds(
			baseDate,
			250,
		);

		expect(result).toBe(fromIso("2019-12-31T23:59:59.750Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.subtractMilliseconds(
			baseDate,
			(-400 as number),
		);

		expect(result).toBe(fromIso("2019-12-31T23:59:59.600Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.subtractMilliseconds(100),
		);

		expect(result).toBe(fromIso("2019-12-31T23:59:59.900Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.subtractMilliseconds(
			beforeEpochDate,
			250,
		);

		expect(result).toBe(fromIso("-0010-01-01T00:00:00.750Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
