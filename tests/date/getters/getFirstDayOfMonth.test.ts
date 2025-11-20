import { pipe, type ExpectType, DDate } from "@scripts";

describe("getFirstDayOfMonth", () => {
	it("returns first day start for mid-month date", () => {
		const result = DDate.getFirstDayOfMonth(
			DDate.create("2024y-2m-15d-10h"),
		);

		expect(result).toBe(DDate.create("2024y-2m-1d"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("returns same date when already first day", () => {
		const result = DDate.getFirstDayOfMonth(
			DDate.create("2024y-2m-1d"),
		);

		expect(result).toBe(DDate.create("2024y-2m-1d"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles date before Christ", () => {
		const result = DDate.getFirstDayOfMonth(
			DDate.create("-5y-3m-15d"),
		);

		expect(result).toBe(DDate.create("-5y-3m-1d"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("can be used in pipe", () => {
		const result = pipe(
			DDate.create("2021y-12m-25d"),
			DDate.getFirstDayOfMonth,
		);

		expect(result).toBe(DDate.create("2021y-12m-1d"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
