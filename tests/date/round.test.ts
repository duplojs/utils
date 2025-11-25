import { pipe, type ExpectType, DDate } from "@scripts";

describe("round", () => {
	it("rounds to day by default", () => {
		const result = DDate.round(DDate.create("2024-01-15", {
			hour: "12",
			minute: "34",
			second: "56",
			millisecond: "789",
		}));

		expect(result).toBe(DDate.create("2024-01-15"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("rounds to hour", () => {
		const result = DDate.round(
			DDate.create("2024-01-15", {
				hour: "12",
				minute: "34",
				second: "56",
				millisecond: "789",
			}),
			"hour",
		);

		expect(result).toBe(DDate.create("2024-01-15", { hour: "12" }));
	});

	it("rounds to minute", () => {
		const result = DDate.round(
			DDate.create("2024-01-15", {
				hour: "12",
				minute: "34",
				second: "56",
				millisecond: "789",
			}),
			"minute",
		);

		expect(result).toBe(DDate.create("2024-01-15", {
			hour: "12",
			minute: "34",
		}));
	});

	it("rounds to second", () => {
		const result = DDate.round(
			DDate.create("2024-01-15", {
				hour: "12",
				minute: "34",
				second: "56",
				millisecond: "789",
			}),
			"second",
		);

		expect(result).toBe(DDate.create("2024-01-15", {
			hour: "12",
			minute: "34",
			second: "56",
		}));
	});

	it("rounds to month", () => {
		const result = DDate.round(
			DDate.create("2024-03-15", {
				hour: "12",
				minute: "34",
				second: "56",
				millisecond: "789",
			}),
			"month",
		);

		expect(result).toBe(DDate.create("2024-03-01"));
	});

	it("rounds to year", () => {
		const result = DDate.round(
			DDate.create("2024-07-10", {
				hour: "12",
				minute: "34",
				second: "56",
				millisecond: "789",
			}),
			"year",
		);

		expect(result).toBe(DDate.create("2024-01-01"));
	});

	it("handles dates before Christ", () => {
		const result = DDate.round(
			DDate.create("-0005-03-15", {
				hour: "10",
				minute: "30",
			}),
			"day",
		);

		expect(result).toBe(DDate.create("-0005-03-15"));
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.create("2024-01-15", {
				hour: "12",
				minute: "34",
				second: "56",
				millisecond: "789",
			}),
			DDate.round,
		);

		expect(result).toBe(DDate.create("2024-01-15"));
	});
});
