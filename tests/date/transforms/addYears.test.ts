import { DDate, pipe, type ExpectType } from "@scripts/index";

describe("addYears", () => {
	it("adds years to date", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.addYears(date, 2);

		expect(result).toBe("2026-01-15T10:30:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});

	it("adds zero years", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.addYears(date, 0);

		expect(result).toBe("2024-01-15T10:30:00.000Z");
	});

	it("adds negative years", () => {
		const date = "2026-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.addYears(date, -1);

		expect(result).toBe("2025-01-15T10:30:00.000Z");
	});

	it("adds years with leap year handling", () => {
		const date = "2024-02-29T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.addYears(date, 1);

		expect(result).toBe("2025-03-01T10:30:00.000Z");
	});

	it("use in pipe", () => {
		const result = pipe(
			"2024-01-15T10:30:00.000Z" as DDate.NewDate,
			DDate.addYears(5),
		);

		expect(result).toBe("2029-01-15T10:30:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});
});
