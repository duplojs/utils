import { pipe, type ExpectType, DDate } from "@scripts";

describe("getLastDayOfMonth", () => {
	it("returns month end for mid-month date", () => {
		const result = DDate.getLastDayOfMonth(
			DDate.create("2024-02-15", { hour: "10" }),
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2024-02-29", {
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

	it("returns same date when already last day", () => {
		const result = DDate.getLastDayOfMonth(
			DDate.create("2024-02-29", { hour: "20" }),
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2024-02-29", {
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

	it("handles thirty-day month", () => {
		const result = DDate.getLastDayOfMonth(
			DDate.create("2024-04-10"),
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2024-04-30", {
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
			DDate.create("2021-12-25"),
			DDate.getLastDayOfMonth,
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2021-12-31", {
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
		const result = DDate.getLastDayOfMonth(
			DDate.create("1969-07-16"),
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("1969-07-31", {
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
