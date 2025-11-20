import { pipe, type ExpectType, DDate } from "@scripts";

describe("getFirstDayOfWeek", () => {
	it("returns Monday of the same week for midweek date", () => {
		const result = DDate.getFirstDayOfWeek(
			DDate.create("2024y-1m-3d-15h-30mn"),
		);

		expect(result).toBe(DDate.create("2024y-1m-1d"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("returns the same date when already Monday", () => {
		const result = DDate.getFirstDayOfWeek(
			DDate.create("2024y-1m-1d"),
		);

		expect(result).toBe(DDate.create("2024y-1m-1d"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("returns previous Monday for Sunday input", () => {
		const result = DDate.getFirstDayOfWeek(
			DDate.create("2024y-1m-7d"),
		);

		expect(result).toBe(DDate.create("2024y-1m-1d"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.create("2021y-1m-6d"),
			DDate.getFirstDayOfWeek,
		);

		expect(result).toBe(DDate.create("2021y-1m-4d"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.getFirstDayOfWeek(
			DDate.create("1969y-7m-16d"),
		);

		expect(result).toBe(DDate.create("1969y-7m-14d"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
