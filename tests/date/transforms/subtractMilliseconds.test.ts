import { DDate, pipe, type ExpectType } from "@scripts/index";

describe("subtractMilliseconds", () => {
	it("subtracts milliseconds from date", () => {
		const date = "2024-01-15T10:30:00.500Z" as DDate.NewDate;
		const result = DDate.subtractMilliseconds(date, 500);

		expect(result).toBe("2024-01-15T10:30:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});

	it("subtracts zero milliseconds", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.subtractMilliseconds(date, 0);

		expect(result).toBe("2024-01-15T10:30:00.000Z");
	});

	it("subtracts negative milliseconds (adds)", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.subtractMilliseconds(date, -250);

		expect(result).toBe("2024-01-15T10:30:00.250Z");
	});

	it("subtracts milliseconds across second boundary", () => {
		const date = "2024-01-15T10:30:01.300Z" as DDate.NewDate;
		const result = DDate.subtractMilliseconds(date, 500);

		expect(result).toBe("2024-01-15T10:30:00.800Z");
	});

	it("use in pipe", () => {
		const result = pipe(
			"2024-01-15T10:30:01.500Z" as DDate.NewDate,
			DDate.subtractMilliseconds(1500),
		);

		expect(result).toBe("2024-01-15T10:30:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});
});
