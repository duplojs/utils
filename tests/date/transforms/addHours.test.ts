import { DDate, pipe, type ExpectType } from "@scripts/index";

describe("addHours", () => {
	it("adds hours to date", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.addHours(date, 5);

		expect(result).toBe("2024-01-15T15:30:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});

	it("adds zero hours", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.addHours(date, 0);

		expect(result).toBe("2024-01-15T10:30:00.000Z");
	});

	it("adds negative hours", () => {
		const date = "2024-01-15T15:30:00.000Z" as DDate.NewDate;
		const result = DDate.addHours(date, -3);

		expect(result).toBe("2024-01-15T12:30:00.000Z");
	});

	it("adds hours across day boundary", () => {
		const date = "2024-01-15T22:30:00.000Z" as DDate.NewDate;
		const result = DDate.addHours(date, 4);

		expect(result).toBe("2024-01-16T02:30:00.000Z");
	});

	it("use in pipe", () => {
		const result = pipe(
			"2024-01-15T10:30:00.000Z" as DDate.NewDate,
			DDate.addHours(12),
		);

		expect(result).toBe("2024-01-15T22:30:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});
});
