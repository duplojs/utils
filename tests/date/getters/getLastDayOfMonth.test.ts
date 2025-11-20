import { pipe, type ExpectType, DDate } from "@scripts";

describe("getLastDayOfMonth", () => {
	it("returns month end for mid-month date", () => {
		const result = DDate.getLastDayOfMonth(
			DDate.create("2024y-2m-15d-10h"),
		);

		expect(result).toBe(DDate.create("2024y-2m-29d-23h-59mn-59s-999ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("returns same date when already last day", () => {
		const result = DDate.getLastDayOfMonth(
			DDate.create("2024y-2m-29d-20h"),
		);

		expect(result).toBe(DDate.create("2024y-2m-29d-23h-59mn-59s-999ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles thirty-day month", () => {
		const result = DDate.getLastDayOfMonth(
			DDate.create("2024y-4m-10d"),
		);

		expect(result).toBe(DDate.create("2024y-4m-30d-23h-59mn-59s-999ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.create("2021y-12m-25d"),
			DDate.getLastDayOfMonth,
		);

		expect(result).toBe(DDate.create("2021y-12m-31d-23h-59mn-59s-999ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.getLastDayOfMonth(
			DDate.create("1969y-7m-16d"),
		);

		expect(result).toBe(DDate.create("1969y-7m-31d-23h-59mn-59s-999ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
