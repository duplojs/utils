import { pipe, type ExpectType, DDate } from "@scripts";

describe("subtractHours", () => {
	const baseDate = DDate.create("2020-01-01");
	const beforeEpochDate = DDate.create("-0010-01-01", { hour: "12" });

	it("subtracts hours from a date", () => {
		const result = DDate.subtractHours(
			baseDate,
			6,
		);

		expect(result).toBe(DDate.create("2019-12-31", { hour: "18" }));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("supports negative numbers", () => {
		const result = DDate.subtractHours(
			baseDate,
			(-10 as number),
		);

		expect(result).toBe(DDate.create("2020-01-01", { hour: "10" }));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.subtractHours(1),
		);

		expect(result).toBe(DDate.create("2019-12-31", { hour: "23" }));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.subtractHours(
			beforeEpochDate,
			6,
		);

		expect(result).toBe(DDate.create("-0010-01-01", { hour: "06" }));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
