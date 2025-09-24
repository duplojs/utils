import { DDate, pipe, type ExpectType } from "@scripts/index";

describe("addMinutes", () => {
	it("adds minutes to date", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.addMinutes(date, 25);

		expect(result).toBe("2024-01-15T10:55:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});

	it("adds zero minutes", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.addMinutes(date, 0);

		expect(result).toBe("2024-01-15T10:30:00.000Z");
	});

	it("adds negative minutes", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.addMinutes(date, -15);

		expect(result).toBe("2024-01-15T10:15:00.000Z");
	});

	it("adds minutes across hour boundary", () => {
		const date = "2024-01-15T10:45:00.000Z" as DDate.NewDate;
		const result = DDate.addMinutes(date, 30);

		expect(result).toBe("2024-01-15T11:15:00.000Z");
	});

	it("use in pipe", () => {
		const result = pipe(
			"2024-01-15T10:30:00.000Z" as DDate.NewDate,
			DDate.addMinutes(90),
		);

		expect(result).toBe("2024-01-15T12:00:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});
});
