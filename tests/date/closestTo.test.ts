import { pipe, type ExpectType, DDate } from "@scripts";

describe("closestTo", () => {
	it("returns closest date without tie breaker", () => {
		const dates = [
			DDate.create("2024-01-01"),
			DDate.create("2024-01-05"),
			DDate.create("2024-01-09"),
			DDate.create("2024-01-15"),
		];

		const result = DDate.closestTo(
			dates,
			DDate.create("2024-01-06"),
		);

		expect(
			DDate.toTimestamp(result!),
		).toBe(
			DDate.toTimestamp(DDate.create("2024-01-05")),
		);

		type check = ExpectType<
			typeof result,
			DDate.TheDate | undefined,
			"strict"
		>;
	});

	it("handles TheDate instances in iterable", () => {
		const input = [
			DDate.create("2024-01-02"),
			DDate.create("2024-01-10"),
		];

		const result = DDate.closestTo(
			input,
			DDate.create("2024-01-03"),
		);

		expect(
			DDate.toTimestamp(result!),
		).toBe(
			DDate.toTimestamp(DDate.create("2024-01-02")),
		);
	});

	it("keeps TheDate paths in the reducer", () => {
		const input = [
			DDate.TheDate.new(0),
			DDate.serialize(DDate.create("2024-01-01")),
		];

		const result = DDate.closestTo(
			input,
			DDate.create("1970-01-01"),
		);

		expect(result).toBeInstanceOf(DDate.TheDate);
	});

	it("executes TheDate branch when distance improves", () => {
		const input = [DDate.TheDate.new(0)];

		const result = DDate.closestTo(
			input,
			DDate.create("1970-01-01"),
		);

		expect(result).toBeInstanceOf(DDate.TheDate);
	});

	it("executes non-TheDate branch when distance improves", () => {
		const input = [
			DDate.serialize(DDate.create("1970-01-02")),
			DDate.TheDate.new(0),
		];

		const result = DDate.closestTo(
			input,
			DDate.create("1970-01-03"),
		);

		expect(result).toBeInstanceOf(DDate.TheDate);
	});

	it("filters to past dates when tieBreaker is favorPast", () => {
		const dates = [
			DDate.create("2024-01-01"),
			DDate.create("2024-01-05"),
			DDate.create("2024-01-09"),
			DDate.create("2024-01-15"),
		];

		const result = DDate.closestTo(
			dates,
			DDate.create("2024-01-08"),
			{ tieBreaker: "favorPast" },
		);

		expect(
			DDate.toTimestamp(result!),
		).toBe(
			DDate.toTimestamp(DDate.create("2024-01-05")),
		);
	});

	it("filters to future dates when tieBreaker is favorFuture", () => {
		const dates = [
			DDate.create("2024-01-01"),
			DDate.create("2024-01-05"),
			DDate.create("2024-01-09"),
			DDate.create("2024-01-15"),
		];

		const result = DDate.closestTo(
			dates,
			DDate.create("2024-01-08"),
			{ tieBreaker: "favorFuture" },
		);

		expect(
			DDate.toTimestamp(result!),
		).toBe(
			DDate.toTimestamp(DDate.create("2024-01-09")),
		);
	});

	it("use in pipe", () => {
		const dates = [
			DDate.create("2024-01-01"),
			DDate.create("2024-01-05"),
			DDate.create("2024-01-09"),
			DDate.create("2024-01-15"),
		];

		const selectClosest = DDate.closestTo(
			DDate.create("2024-01-10"),
			{ tieBreaker: "favorFuture" },
		);

		const result = pipe(
			dates,
			selectClosest,
		);

		expect(
			DDate.toTimestamp(result!),
		).toBe(
			DDate.toTimestamp(DDate.create("2024-01-15")),
		);
	});

	it("when iterable is empty or filtered out", () => {
		const dates = [
			DDate.create("2024-01-01"),
			DDate.create("2024-01-05"),
			DDate.create("2024-01-09"),
			DDate.create("2024-01-15"),
		];

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
