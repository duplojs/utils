import { DDate, pipe, type ExpectType } from "@scripts/index";

describe("addWeeks", () => {
	it("adds weeks to date", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.addWeeks(date, 2);

		expect(result).toBe("2024-01-29T10:30:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});

	it("adds zero weeks", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.addWeeks(date, 0);

		expect(result).toBe("2024-01-15T10:30:00.000Z");
	});

	it("adds negative weeks", () => {
		const date = "2024-01-29T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.addWeeks(date, -1);

		expect(result).toBe("2024-01-22T10:30:00.000Z");
	});

	it("adds weeks across month boundary", () => {
		const date = "2024-01-22T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.addWeeks(date, 3);

		expect(result).toBe("2024-02-12T10:30:00.000Z");
	});

	it("use in pipe", () => {
		const result = pipe(
			"2024-01-15T10:30:00.000Z" as DDate.NewDate,
			DDate.addWeeks(4),
		);

		expect(result).toBe("2024-02-12T10:30:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});
});
