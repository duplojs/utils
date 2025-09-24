import { DDate, pipe, type ExpectType } from "@scripts/index";

describe("subtractMonths", () => {
	it("subtracts months from date", () => {
		const date = "2024-04-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.subtractMonths(date, 3);

		expect(result).toBe("2024-01-15T10:30:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});

	it("subtracts zero months", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.subtractMonths(date, 0);

		expect(result).toBe("2024-01-15T10:30:00.000Z");
	});

	it("subtracts negative months (adds)", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.subtractMonths(date, -2);

		expect(result).toBe("2024-03-15T10:30:00.000Z");
	});

	it("subtracts months across year boundary", () => {
		const date = "2025-04-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.subtractMonths(date, 6);

		expect(result).toBe("2024-10-15T10:30:00.000Z");
	});

	it("use in pipe", () => {
		const result = pipe(
			"2024-07-15T10:30:00.000Z" as DDate.NewDate,
			DDate.subtractMonths(6),
		);

		expect(result).toBe("2024-01-15T10:30:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});
});
