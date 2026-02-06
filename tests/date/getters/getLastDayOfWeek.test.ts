import { pipe, type ExpectType, DDate } from "@scripts";

describe("getLastDayOfWeek", () => {
	it("returns Sunday end of day for midweek date", () => {
		const result = DDate.getLastDayOfWeek(
			DDate.create("2024-01-03", {
				hour: "15",
				minute: "30",
			}),
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2024-01-07", {
				hour: "23",
				minute: "59",
				second: "59",
				millisecond: "999",
			})),
		);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("returns Sunday for Monday input", () => {
		const result = DDate.getLastDayOfWeek(
			DDate.create("2024-01-01"),
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2024-01-07", {
				hour: "23",
				minute: "59",
				second: "59",
				millisecond: "999",
			})),
		);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("returns same Sunday at end of day for Sunday input", () => {
		const result = DDate.getLastDayOfWeek(
			DDate.create("2024-01-07", { hour: "10" }),
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2024-01-07", {
				hour: "23",
				minute: "59",
				second: "59",
				millisecond: "999",
			})),
		);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.create("2021-01-06"),
			DDate.getLastDayOfWeek,
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2021-01-10", {
				hour: "23",
				minute: "59",
				second: "59",
				millisecond: "999",
			})),
		);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.getLastDayOfWeek(
			DDate.create("1969-07-16"),
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("1969-07-20", {
				hour: "23",
				minute: "59",
				second: "59",
				millisecond: "999",
			})),
		);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
