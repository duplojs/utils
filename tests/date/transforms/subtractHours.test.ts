import { DDate, pipe, type ExpectType } from "@scripts/index";

describe("subtractHours", () => {
	it("subtracts hours from date", () => {
		const date = "2024-01-15T15:30:00.000Z" as DDate.NewDate;
		const result = DDate.subtractHours(date, 5);

		expect(result).toBe("2024-01-15T10:30:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});

	it("subtracts zero hours", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.subtractHours(date, 0);

		expect(result).toBe("2024-01-15T10:30:00.000Z");
	});

	it("subtracts negative hours (adds)", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.subtractHours(date, -3);

		expect(result).toBe("2024-01-15T13:30:00.000Z");
	});

	it("subtracts hours across day boundary", () => {
		const date = "2024-01-16T02:30:00.000Z" as DDate.NewDate;
		const result = DDate.subtractHours(date, 4);

		expect(result).toBe("2024-01-15T22:30:00.000Z");
	});

	it("use in pipe", () => {
		const result = pipe(
			"2024-01-15T22:30:00.000Z" as DDate.NewDate,
			DDate.subtractHours(12),
		);

		expect(result).toBe("2024-01-15T10:30:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});
});
