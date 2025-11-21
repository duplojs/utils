import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("getLastDayOfWeek", () => {
	it("returns Sunday end of day for midweek date", () => {
		const result = DDate.getLastDayOfWeek(
			fromIso("2024-01-03T15:30:00.000Z"),
		);

		expect(result).toBe(fromIso("2024-01-07T23:59:59.999Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("returns Sunday for Monday input", () => {
		const result = DDate.getLastDayOfWeek(
			fromIso("2024-01-01T00:00:00.000Z"),
		);

		expect(result).toBe(fromIso("2024-01-07T23:59:59.999Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("returns same Sunday at end of day for Sunday input", () => {
		const result = DDate.getLastDayOfWeek(
			fromIso("2024-01-07T10:00:00.000Z"),
		);

		expect(result).toBe(fromIso("2024-01-07T23:59:59.999Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			fromIso("2021-01-06T00:00:00.000Z"),
			DDate.getLastDayOfWeek,
		);

		expect(result).toBe(fromIso("2021-01-10T23:59:59.999Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.getLastDayOfWeek(
			fromIso("1969-07-16T00:00:00.000Z"),
		);

		expect(result).toBe(fromIso("1969-07-20T23:59:59.999Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
