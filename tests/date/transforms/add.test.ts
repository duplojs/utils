import { DDate, pipe, type ExpectType } from "@scripts/index";

describe("add", () => {
	it("adds multiple units to date", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.add(date, {
			years: 1,
			months: 2,
			days: 3,
			hours: 4,
			minutes: 5,
			seconds: 6,
			milliseconds: 7,
		});

		expect(result).toBe("2025-03-18T14:35:06.007Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});

	it("adds only years", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.add(date, { years: 2 });

		expect(result).toBe("2026-01-15T10:30:00.000Z");
	});

	it("adds only months", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.add(date, { months: 6 });

		expect(result).toBe("2024-07-15T10:30:00.000Z");
	});

	it("adds weeks", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.add(date, { weeks: 2 });

		expect(result).toBe("2024-01-29T10:30:00.000Z");
	});

	it("use in pipe", () => {
		const result = pipe(
			"2024-01-15T10:30:00.000Z" as DDate.NewDate,
			DDate.add({
				days: 5,
				hours: 3,
			}),
		);

		expect(result).toBe("2024-01-20T13:30:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});
});
