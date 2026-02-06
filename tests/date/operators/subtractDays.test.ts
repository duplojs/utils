import { pipe, type ExpectType, DDate } from "@scripts";

describe("subtractDays", () => {
	const baseDate = DDate.create("2020-01-01");
	const beforeEpochDate = DDate.create("-0010-01-10");

	it("subtracts days from a date", () => {
		const result = DDate.subtractDays(
			baseDate,
			4,
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2019-12-28")),
		);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("supports negative numbers", () => {
		const result = DDate.subtractDays(
			baseDate,
			(-3 as number),
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2020-01-04")),
		);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.subtractDays(1),
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2019-12-31")),
		);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.subtractDays(
			beforeEpochDate,
			5,
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("-0010-01-05")),
		);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
