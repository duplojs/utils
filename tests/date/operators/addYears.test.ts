import { pipe, type ExpectType, DDate } from "@scripts";

describe("addYears", () => {
	const baseDate = DDate.create("2020-01-01");
	const beforeEpochDate = DDate.create("-0010-06-01");

	it("adds years to a date", () => {
		const result = DDate.addYears(
			baseDate,
			3,
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2023-01-01")),
		);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("supports negative numbers", () => {
		const result = DDate.addYears(
			baseDate,
			(-2 as number),
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2018-01-01")),
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
			DDate.addYears(1),
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2021-01-01")),
		);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.addYears(
			beforeEpochDate,
			2,
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("-0008-06-01")),
		);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
