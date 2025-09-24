import { DDate, pipe, type ExpectType } from "@scripts/index";

describe("subtract", () => {
	it("subtracts multiple units from date", () => {
		const date = "2025-03-18T14:35:06.007Z" as DDate.NewDate;
		const result = DDate.subtract(date, {
			years: 1,
			months: 2,
			days: 3,
			hours: 4,
			minutes: 5,
			seconds: 6,
			milliseconds: 7,
		});

		expect(result).toBe("2024-01-15T10:30:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});

	it("subtracts only years", () => {
		const date = "2026-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.subtract(date, { years: 2 });

		expect(result).toBe("2024-01-15T10:30:00.000Z");
	});

	it("subtracts only months", () => {
		const date = "2024-07-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.subtract(date, { months: 6 });

		expect(result).toBe("2024-01-15T10:30:00.000Z");
	});

	it("subtracts weeks", () => {
		const date = "2024-01-29T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.subtract(date, { weeks: 2 });

		expect(result).toBe("2024-01-15T10:30:00.000Z");
	});

	it("use in pipe", () => {
		const result = pipe(
			"2024-01-20T13:30:00.000Z" as DDate.NewDate,
			DDate.subtract({
				days: 5,
				hours: 3,
			}),
		);

		expect(result).toBe("2024-01-15T10:30:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});
});
