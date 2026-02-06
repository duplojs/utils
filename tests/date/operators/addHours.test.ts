import { pipe, type ExpectType, DDate } from "@scripts";

describe("addHours", () => {
	const baseDate = DDate.create("2020-01-01");
	const beforeEpochDate = DDate.create("-0010-01-01");

	it("adds hours to a date", () => {
		const result = DDate.addHours(
			baseDate,
			6,
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2020-01-01", { hour: "06" })),
		);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("supports negative numbers", () => {
		const result = DDate.addHours(
			baseDate,
			(-10 as number),
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2019-12-31", { hour: "14" })),
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
			DDate.addHours(1),
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2020-01-01", { hour: "01" })),
		);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.addHours(
			beforeEpochDate,
			6,
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("-0010-01-01", { hour: "06" })),
		);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
