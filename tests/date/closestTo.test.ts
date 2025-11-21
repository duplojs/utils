import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "./utils";

describe("closestTo", () => {
	const dates = [
		fromIso("2024-01-01T00:00:00.000Z"),
		fromIso("2024-01-05T00:00:00.000Z"),
		fromIso("2024-01-09T00:00:00.000Z"),
		fromIso("2024-01-15T00:00:00.000Z"),
	];

	it("returns closest date without tie breaker", () => {
		const result = DDate.closestTo(
			dates,
			fromIso("2024-01-06T00:00:00.000Z"),
		);

		expect(result).toBe(fromIso("2024-01-05T00:00:00.000Z"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate | undefined,
			"strict"
		>;
	});

	it("filters to past dates when tieBreaker is favorPast", () => {
		const result = DDate.closestTo(
			dates,
			fromIso("2024-01-08T00:00:00.000Z"),
			{ tieBreaker: "favorPast" },
		);

		expect(result).toBe(fromIso("2024-01-05T00:00:00.000Z"));
	});

	it("filters to future dates when tieBreaker is favorFuture", () => {
		const result = DDate.closestTo(
			dates,
			fromIso("2024-01-08T00:00:00.000Z"),
			{ tieBreaker: "favorFuture" },
		);

		expect(result).toBe(fromIso("2024-01-09T00:00:00.000Z"));
	});

	it("use in pipe", () => {
		const selectClosest = DDate.closestTo(
			fromIso("2024-01-10T00:00:00.000Z"),
			{ tieBreaker: "favorFuture" },
		);

		const result = pipe(
			dates,
			selectClosest,
		);

		expect(result).toBe(fromIso("2024-01-15T00:00:00.000Z"));
	});

	it("when iterable is empty or filtered out", () => {
		expect(DDate.closestTo(
			[],
			fromIso("2024-01-01T00:00:00.000Z"),
		)).toBeUndefined();

		expect(DDate.closestTo(
			dates,
			fromIso("2023-12-15T00:00:00.000Z"),
			{ tieBreaker: "favorPast" },
		)).toBeUndefined();

		expect(DDate.closestTo(
			dates,
			fromIso("2024-12-01T00:00:00.000Z"),
			{ tieBreaker: "favorFuture" },
		)).toBeUndefined();
	});
});
