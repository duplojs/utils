import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "./utils";

describe("round", () => {
	it("rounds to day by default", () => {
		const result = DDate.round(fromIso("2024-01-15T12:34:56.789Z"));

		expect(result).toBe(fromIso("2024-01-15T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("rounds to hour", () => {
		const result = DDate.round(
			fromIso("2024-01-15T12:34:56.789Z"),
			"hour",
		);

		expect(result).toBe(fromIso("2024-01-15T12:00:00.000Z"));
	});

	it("rounds to minute", () => {
		const result = DDate.round(
			fromIso("2024-01-15T12:34:56.789Z"),
			"minute",
		);

		expect(result).toBe(fromIso("2024-01-15T12:34:00.000Z"));
	});

	it("rounds to second", () => {
		const result = DDate.round(
			fromIso("2024-01-15T12:34:56.789Z"),
			"second",
		);

		expect(result).toBe(fromIso("2024-01-15T12:34:56.000Z"));
	});

	it("rounds to month", () => {
		const result = DDate.round(
			fromIso("2024-03-15T12:34:56.789Z"),
			"month",
		);

		expect(result).toBe(fromIso("2024-03-01T00:00:00.000Z"));
	});

	it("rounds to year", () => {
		const result = DDate.round(
			fromIso("2024-07-10T12:34:56.789Z"),
			"year",
		);

		expect(result).toBe(fromIso("2024-01-01T00:00:00.000Z"));
	});

	it("handles dates before Christ", () => {
		const result = DDate.round(
			fromIso("-0005-03-15T10:30:00.000Z"),
			"day",
		);

		expect(result).toBe(fromIso("-0005-03-15T00:00:00.000Z"));
	});

	it("use in pipe", () => {
		const result = pipe(
			fromIso("2024-01-15T12:34:56.789Z"),
			DDate.round,
		);

		expect(result).toBe(fromIso("2024-01-15T00:00:00.000Z"));
	});
});
