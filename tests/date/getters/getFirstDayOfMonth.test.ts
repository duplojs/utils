import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("getFirstDayOfMonth", () => {
	it("returns first day start for mid-month date", () => {
		const result = DDate.getFirstDayOfMonth(
			fromIso("2024-02-15T10:00:00.000Z"),
		);

		expect(result).toBe(fromIso("2024-02-01T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("returns same date when already first day", () => {
		const result = DDate.getFirstDayOfMonth(
			fromIso("2024-02-01T00:00:00.000Z"),
		);

		expect(result).toBe(fromIso("2024-02-01T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles date before Christ", () => {
		const result = DDate.getFirstDayOfMonth(
			fromIso("-0005-03-15T00:00:00.000Z"),
		);

		expect(result).toBe(fromIso("-0005-03-01T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("can be used in pipe", () => {
		const result = pipe(
			fromIso("2021-12-25T00:00:00.000Z"),
			DDate.getFirstDayOfMonth,
		);

		expect(result).toBe(fromIso("2021-12-01T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
