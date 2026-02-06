import { pipe, type ExpectType, DDate } from "@scripts";

describe("addMonths", () => {
	const baseDate = DDate.create("2020-01-01");
	const beforeEpochDate = DDate.create("-0010-06-01");

	it("adds months to a date", () => {
		const result = DDate.addMonths(
			baseDate,
			2,
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2020-03-01")),
		);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("supports negative numbers", () => {
		const result = DDate.addMonths(
			baseDate,
			(-5 as number),
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2019-08-01")),
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
			DDate.addMonths(1),
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2020-02-01")),
		);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.addMonths(
			beforeEpochDate,
			2,
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("-0010-08-01")),
		);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
