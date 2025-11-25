import { pipe, type ExpectType, DDate } from "@scripts";

describe("getFirstDayOfMonth", () => {
	it("returns first day start for mid-month date", () => {
		const result = DDate.getFirstDayOfMonth(
			DDate.create("2024-02-15", { hour: "10" }),
		);

		expect(result).toBe(DDate.create("2024-02-01"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("returns same date when already first day", () => {
		const result = DDate.getFirstDayOfMonth(
			DDate.create("2024-02-01"),
		);

		expect(result).toBe(DDate.create("2024-02-01"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles date before Christ", () => {
		const result = DDate.getFirstDayOfMonth(
			DDate.create("-0005-03-15"),
		);

		expect(result).toBe(DDate.create("-0005-03-01"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("can be used in pipe", () => {
		const result = pipe(
			DDate.create("2021-12-25"),
			DDate.getFirstDayOfMonth,
		);

		expect(result).toBe(DDate.create("2021-12-01"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
