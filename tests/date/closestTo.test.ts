import { pipe, type ExpectType, DDate } from "@scripts";

describe("closestTo", () => {
	const dates = [
		DDate.create("2024-01-01"),
		DDate.create("2024-01-05"),
		DDate.create("2024-01-09"),
		DDate.create("2024-01-15"),
	];

	it("returns closest date without tie breaker", () => {
		const result = DDate.closestTo(
			dates,
			DDate.create("2024-01-06"),
		);

		expect(result).toBe(DDate.create("2024-01-05"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate | undefined,
			"strict"
		>;
	});

	it("filters to past dates when tieBreaker is favorPast", () => {
		const result = DDate.closestTo(
			dates,
			DDate.create("2024-01-08"),
			{ tieBreaker: "favorPast" },
		);

		expect(result).toBe(DDate.create("2024-01-05"));
	});

	it("filters to future dates when tieBreaker is favorFuture", () => {
		const result = DDate.closestTo(
			dates,
			DDate.create("2024-01-08"),
			{ tieBreaker: "favorFuture" },
		);

		expect(result).toBe(DDate.create("2024-01-09"));
	});

	it("use in pipe", () => {
		const selectClosest = DDate.closestTo(
			DDate.create("2024-01-10"),
			{ tieBreaker: "favorFuture" },
		);

		const result = pipe(
			dates,
			selectClosest,
		);

		expect(result).toBe(DDate.create("2024-01-15"));
	});

	it("when iterable is empty or filtered out", () => {
		expect(DDate.closestTo(
			[],
			DDate.create("2024-01-01"),
		)).toBeUndefined();

		expect(DDate.closestTo(
			dates,
			DDate.create("2023-12-15"),
			{ tieBreaker: "favorPast" },
		)).toBeUndefined();

		expect(DDate.closestTo(
			dates,
			DDate.create("2024-12-01"),
			{ tieBreaker: "favorFuture" },
		)).toBeUndefined();
	});
});
