import { DDate, pipe, type ExpectType } from "@scripts/index";

describe("addMilliseconds", () => {
	it("adds milliseconds to date", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.addMilliseconds(date, 500);

		expect(result).toBe("2024-01-15T10:30:00.500Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});

	it("adds zero milliseconds", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.addMilliseconds(date, 0);

		expect(result).toBe("2024-01-15T10:30:00.000Z");
	});

	it("adds negative milliseconds", () => {
		const date = "2024-01-15T10:30:00.500Z" as DDate.NewDate;
		const result = DDate.addMilliseconds(date, -250);

		expect(result).toBe("2024-01-15T10:30:00.250Z");
	});

	it("adds milliseconds across second boundary", () => {
		const date = "2024-01-15T10:30:00.800Z" as DDate.NewDate;
		const result = DDate.addMilliseconds(date, 500);

		expect(result).toBe("2024-01-15T10:30:01.300Z");
	});

	it("use in pipe", () => {
		const result = pipe(
			"2024-01-15T10:30:00.000Z" as DDate.NewDate,
			DDate.addMilliseconds(1500),
		);

		expect(result).toBe("2024-01-15T10:30:01.500Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});
});
