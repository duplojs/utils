import { DDate, pipe, type ExpectType } from "@scripts/index";

describe("addSeconds", () => {
	it("adds seconds to date", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.addSeconds(date, 45);

		expect(result).toBe("2024-01-15T10:30:45.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});

	it("adds zero seconds", () => {
		const date = "2024-01-15T10:30:00.000Z" as DDate.NewDate;
		const result = DDate.addSeconds(date, 0);

		expect(result).toBe("2024-01-15T10:30:00.000Z");
	});

	it("adds negative seconds", () => {
		const date = "2024-01-15T10:30:45.000Z" as DDate.NewDate;
		const result = DDate.addSeconds(date, -30);

		expect(result).toBe("2024-01-15T10:30:15.000Z");
	});

	it("adds seconds across minute boundary", () => {
		const date = "2024-01-15T10:30:45.000Z" as DDate.NewDate;
		const result = DDate.addSeconds(date, 30);

		expect(result).toBe("2024-01-15T10:31:15.000Z");
	});

	it("use in pipe", () => {
		const result = pipe(
			"2024-01-15T10:30:00.000Z" as DDate.NewDate,
			DDate.addSeconds(120),
		);

		expect(result).toBe("2024-01-15T10:32:00.000Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});
});
