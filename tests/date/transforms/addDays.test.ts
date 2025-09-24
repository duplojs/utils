import { DDate, pipe, type ExpectType } from "@scripts/index";

describe("addDays", () => {
	it("adds days to date", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.addDays(date, 5);

		expect(result).toBe("2024-01-20T10:30:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});

	it("adds zero days", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.addDays(date, 0);

		expect(result).toBe("2024-01-15T10:30:00.000Z");
	});

	it("adds negative days", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.addDays(date, -3);

		expect(result).toBe("2024-01-12T10:30:00.000Z");
	});

	it("adds days across month boundary", () => {
		const date = "2024-01-28T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.addDays(date, 10);

		expect(result).toBe("2024-02-07T10:30:00.000Z");
	});

	it("use in pipe", () => {
		const result = pipe(
			"2024-01-15T10:30:00.000Z" as DDate.NewDate,
			DDate.addDays(7),
		);

		expect(result).toBe("2024-01-22T10:30:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});
});
