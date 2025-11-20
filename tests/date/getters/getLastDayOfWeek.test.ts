import { pipe, type ExpectType, DDate } from "@scripts";

describe("getLastDayOfWeek", () => {
	it("returns Sunday end of day for midweek date", () => {
		const result = DDate.getLastDayOfWeek(
			DDate.create("2024y-1m-3d-15h-30mn"),
		);

		expect(result).toBe(DDate.create("2024y-1m-7d-23h-59mn-59s-999ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("returns Sunday for Monday input", () => {
		const result = DDate.getLastDayOfWeek(
			DDate.create("2024y-1m-1d"),
		);

		expect(result).toBe(DDate.create("2024y-1m-7d-23h-59mn-59s-999ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("returns same Sunday at end of day for Sunday input", () => {
		const result = DDate.getLastDayOfWeek(
			DDate.create("2024y-1m-7d-10h"),
		);

		expect(result).toBe(DDate.create("2024y-1m-7d-23h-59mn-59s-999ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.create("2021y-1m-6d"),
			DDate.getLastDayOfWeek,
		);

		expect(result).toBe(DDate.create("2021y-1m-10d-23h-59mn-59s-999ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.getLastDayOfWeek(
			DDate.create("1969y-7m-16d"),
		);

		expect(result).toBe(DDate.create("1969y-7m-20d-23h-59mn-59s-999ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
