import { pipe, type ExpectType, DDate } from "@scripts";

describe("getDayOfMonth", () => {
	it("getDayOfMonth returns day of month in UTC", () => {
		const result = DDate.getDayOfMonth(
			DDate.create("2021y-1m-15d"),
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
			DDate.create("2021y-1m-1d-0h-0mn"),
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
			DDate.create("2021y-12m-25d"),
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
			DDate.create("2021y-1m-15d"),
			(date) => DDate.getDayOfMonth(date),
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
			DDate.create("2021y-1m-1d-0h-0mn"),
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
