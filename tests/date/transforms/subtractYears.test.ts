import { DDate, pipe, type ExpectType } from "@scripts/index";

describe("subtractYears", () => {
	it("subtracts years from date", () => {
		const date = "2026-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.subtractYears(date, 2);

		expect(result).toBe("2024-01-15T10:30:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});

	it("subtracts zero years", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.subtractYears(date, 0);

		expect(result).toBe("2024-01-15T10:30:00.000Z");
	});

	it("subtracts negative years (adds)", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.subtractYears(date, -1);

		expect(result).toBe("2025-01-15T10:30:00.000Z");
	});

	it("subtracts years with leap year handling", () => {
		const date = "2025-02-28T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.subtractYears(date, 1);

		expect(result).toBe("2024-02-28T10:30:00.000Z");
	});

	it("use in pipe", () => {
		const result = pipe(
			"2029-01-15T10:30:00.000Z" as DDate.NewDate,
			DDate.subtractYears(5),
		);

		expect(result).toBe("2024-01-15T10:30:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});
});
