import { pipe, type ExpectType, DDate } from "@scripts";

describe("closestTo", () => {
	const dates = [
		DDate.create("2024y-1m-1d"),
		DDate.create("2024y-1m-5d"),
		DDate.create("2024y-1m-9d"),
		DDate.create("2024y-1m-15d"),
	];

	it("returns closest date without tie breaker", () => {
		const result = DDate.closestTo(
			dates,
			DDate.create("2024y-1m-6d"),
		);

		expect(result).toBe(DDate.create("2024y-1m-5d"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate | undefined,
			"strict"
		>;
	});

	it("filters to past dates when tieBreaker is favorPast", () => {
		const result = DDate.closestTo(
			dates,
			DDate.create("2024y-1m-8d"),
			{ tieBreaker: "favorPast" },
		);

		expect(result).toBe(DDate.create("2024y-1m-5d"));
	});

	it("filters to future dates when tieBreaker is favorFuture", () => {
		const result = DDate.closestTo(
			dates,
			DDate.create("2024y-1m-8d"),
			{ tieBreaker: "favorFuture" },
		);

		expect(result).toBe(DDate.create("2024y-1m-9d"));
	});

	it("use in pipe", () => {
		const selectClosest = DDate.closestTo(
			DDate.create("2024y-1m-10d"),
			{ tieBreaker: "favorFuture" },
		);

		const result = pipe(
			dates,
			selectClosest,
		);

		expect(result).toBe(DDate.create("2024y-1m-15d"));
	});

	it("when iterable is empty or filtered out", () => {
		expect(DDate.closestTo(
			[],
			DDate.create("2024y-1m-1d"),
		)).toBeUndefined();

		expect(DDate.closestTo(
			dates,
			DDate.create("2023y-12m-15d"),
			{ tieBreaker: "favorPast" },
		)).toBeUndefined();

		expect(DDate.closestTo(
			dates,
			DDate.create("2024y-12m-1d"),
			{ tieBreaker: "favorFuture" },
		)).toBeUndefined();
	});
});
