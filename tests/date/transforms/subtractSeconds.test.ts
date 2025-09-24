import { DDate, pipe, type ExpectType } from "@scripts/index";

describe("subtractSeconds", () => {
	it("subtracts seconds from date", () => {
		const date = "2024-01-15T10:30:45.000Z" as DDate.NewDate;
		const result = DDate.subtractSeconds(date, 45);

		expect(result).toBe("2024-01-15T10:30:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});

	it("subtracts zero seconds", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.subtractSeconds(date, 0);

		expect(result).toBe("2024-01-15T10:30:00.000Z");
	});

	it("subtracts negative seconds (adds)", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.subtractSeconds(date, -30);

		expect(result).toBe("2024-01-15T10:30:30.000Z");
	});

	it("subtracts seconds across minute boundary", () => {
		const date = "2024-01-15T10:31:15.000Z" as DDate.NewDate;
		const result = DDate.subtractSeconds(date, 30);

		expect(result).toBe("2024-01-15T10:30:45.000Z");
	});

	it("use in pipe", () => {
		const result = pipe(
			"2024-01-15T10:32:00.000Z" as DDate.NewDate,
			DDate.subtractSeconds(120),
		);

		expect(result).toBe("2024-01-15T10:30:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});
});
