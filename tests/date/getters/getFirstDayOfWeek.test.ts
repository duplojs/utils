import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("getFirstDayOfWeek", () => {
	it("returns Monday of the same week for midweek date", () => {
		const result = DDate.getFirstDayOfWeek(
			fromIso("2024-01-03T15:30:00.000Z"),
		);

		expect(result).toBe(fromIso("2024-01-01T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("returns the same date when already Monday", () => {
		const result = DDate.getFirstDayOfWeek(
			fromIso("2024-01-01T00:00:00.000Z"),
		);

		expect(result).toBe(fromIso("2024-01-01T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("returns previous Monday for Sunday input", () => {
		const result = DDate.getFirstDayOfWeek(
			fromIso("2024-01-07T00:00:00.000Z"),
		);

		expect(result).toBe(fromIso("2024-01-01T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			fromIso("2021-01-06T00:00:00.000Z"),
			DDate.getFirstDayOfWeek,
		);

		expect(result).toBe(fromIso("2021-01-04T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.getFirstDayOfWeek(
			fromIso("1969-07-16T00:00:00.000Z"),
		);

		expect(result).toBe(fromIso("1969-07-14T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
