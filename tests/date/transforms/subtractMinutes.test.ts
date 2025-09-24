import { DDate, pipe, type ExpectType } from "@scripts/index";

describe("subtractMinutes", () => {
	it("subtracts minutes from date", () => {
		const date = "2024-01-15T10:55:00.000Z" as DDate.NewDate;
		const result = DDate.subtractMinutes(date, 25);

		expect(result).toBe("2024-01-15T10:30:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});

	it("subtracts zero minutes", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.subtractMinutes(date, 0);

		expect(result).toBe("2024-01-15T10:30:00.000Z");
	});

	it("subtracts negative minutes (adds)", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.subtractMinutes(date, -15);

		expect(result).toBe("2024-01-15T10:45:00.000Z");
	});

	it("subtracts minutes across hour boundary", () => {
		const date = "2024-01-15T11:15:00.000Z" as DDate.NewDate;
		const result = DDate.subtractMinutes(date, 30);

		expect(result).toBe("2024-01-15T10:45:00.000Z");
	});

	it("use in pipe", () => {
		const result = pipe(
			"2024-01-15T12:00:00.000Z" as DDate.NewDate,
			DDate.subtractMinutes(90),
		);

		expect(result).toBe("2024-01-15T10:30:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});
});
