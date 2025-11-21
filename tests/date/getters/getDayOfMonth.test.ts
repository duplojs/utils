import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("getDayOfMonth", () => {
	it("getDayOfMonth returns day of month in UTC", () => {
		const result = DDate.getDayOfMonth(
			fromIso("2021-01-15T00:00:00.000Z"),
		);

		expect(result).toBe(15);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getDayOfMonth returns day of month with timezone", () => {
		const result = DDate.getDayOfMonth(
			fromIso("2021-01-01T00:00:00.000Z"),
			"America/New_York",
		);

		expect(result).toBe(31);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getDayOfMonth returns day of month in UTC by default", () => {
		const result = DDate.getDayOfMonth(
			fromIso("2021-12-25T00:00:00.000Z"),
		);

		expect(result).toBe(25);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			fromIso("2021-01-15T00:00:00.000Z"),
			DDate.getDayOfMonth,
		);

		expect(result).toBe(15);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("use in pipe with timezone", () => {
		const result = pipe(
			fromIso("2021-01-01T00:00:00.000Z"),
			(date) => DDate.getDayOfMonth(date, "America/New_York"),
		);

		expect(result).toBe(31);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});
});
