import { pipe, type ExpectType, DDate } from "@scripts";

describe("getDayOfMonth", () => {
	it("getDayOfMonth returns day of month in UTC", () => {
		const result = DDate.getDayOfMonth(
			DDate.create("2021-01-15"),
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
			DDate.create("2021-01-01"),
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
			DDate.create("2021-12-25"),
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
			DDate.create("2021-01-15"),
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
			DDate.create("2021-01-01"),
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
