import { pipe, type ExpectType, DDate } from "@scripts";

describe("subtractMilliseconds", () => {
	const baseDate = DDate.create("2020-01-01");
	const beforeEpochDate = DDate.create("-0010-01-01", { second: "01" });

	it("subtracts milliseconds from a date", () => {
		const result = DDate.subtractMilliseconds(
			baseDate,
			250,
		);

		expect(result).toBe(DDate.create("2019-12-31", {
			hour: "23",
			minute: "59",
			second: "59",
			millisecond: "750",
		}));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("supports negative numbers", () => {
		const result = DDate.subtractMilliseconds(
			baseDate,
			(-400 as number),
		);

		expect(result).toBe(DDate.create("2020-01-01", { millisecond: "400" }));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.subtractMilliseconds(100),
		);

		expect(result).toBe(DDate.create("2019-12-31", {
			hour: "23",
			minute: "59",
			second: "59",
			millisecond: "900",
		}));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.subtractMilliseconds(
			beforeEpochDate,
			250,
		);

		expect(result).toBe(DDate.create("-0010-01-01", { millisecond: "750" }));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
