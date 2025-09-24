import { DDate, pipe, type ExpectType } from "@scripts/index";

describe("addMonths", () => {
	it("adds months to date", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.addMonths(date, 3);

		expect(result).toBe("2024-04-15T10:30:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});

	it("adds zero months", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.addMonths(date, 0);

		expect(result).toBe("2024-01-15T10:30:00.000Z");
	});

	it("adds negative months", () => {
		const date = "2024-04-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.addMonths(date, -2);

		expect(result).toBe("2024-02-15T10:30:00.000Z");
	});

	it("adds months across year boundary", () => {
		const date = "2024-10-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.addMonths(date, 6);

		expect(result).toBe("2025-04-15T10:30:00.000Z");
	});

	it("use in pipe", () => {
		const result = pipe(
			"2024-01-15T10:30:00.000Z" as DDate.NewDate,
			DDate.addMonths(6),
		);

		expect(result).toBe("2024-07-15T10:30:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});
});
