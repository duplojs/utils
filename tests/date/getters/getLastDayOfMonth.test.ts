import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("getLastDayOfMonth", () => {
	it("returns month end for mid-month date", () => {
		const result = DDate.getLastDayOfMonth(
			fromIso("2024-02-15T10:00:00.000Z"),
		);

		expect(result).toBe(fromIso("2024-02-29T23:59:59.999Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("returns same date when already last day", () => {
		const result = DDate.getLastDayOfMonth(
			fromIso("2024-02-29T20:00:00.000Z"),
		);

		expect(result).toBe(fromIso("2024-02-29T23:59:59.999Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles thirty-day month", () => {
		const result = DDate.getLastDayOfMonth(
			fromIso("2024-04-10T00:00:00.000Z"),
		);

		expect(result).toBe(fromIso("2024-04-30T23:59:59.999Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			fromIso("2021-12-25T00:00:00.000Z"),
			DDate.getLastDayOfMonth,
		);

		expect(result).toBe(fromIso("2021-12-31T23:59:59.999Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.getLastDayOfMonth(
			fromIso("1969-07-16T00:00:00.000Z"),
		);

		expect(result).toBe(fromIso("1969-07-31T23:59:59.999Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
