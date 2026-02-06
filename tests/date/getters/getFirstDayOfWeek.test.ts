import { pipe, type ExpectType, DDate } from "@scripts";

describe("getFirstDayOfWeek", () => {
	it("returns Monday of the same week for midweek date", () => {
		const result = DDate.getFirstDayOfWeek(
			DDate.create("2024-01-03", {
				hour: "15",
				minute: "30",
			}),
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2024-01-01")),
		);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("returns the same date when already Monday", () => {
		const result = DDate.getFirstDayOfWeek(
			DDate.create("2024-01-01"),
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2024-01-01")),
		);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("returns previous Monday for Sunday input", () => {
		const result = DDate.getFirstDayOfWeek(
			DDate.create("2024-01-07"),
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2024-01-01")),
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
			DDate.getFirstDayOfWeek,
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2021-01-04")),
		);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.getFirstDayOfWeek(
			DDate.create("1969-07-16"),
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("1969-07-14")),
		);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
