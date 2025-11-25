import { pipe, type ExpectType, DDate } from "@scripts";

describe("subtractSeconds", () => {
	const baseDate = DDate.create("2020-01-01");
	const beforeEpochDate = DDate.create("-0010-01-01", { minute: "01" });

	it("subtracts seconds from a date", () => {
		const result = DDate.subtractSeconds(
			baseDate,
			75,
		);

		expect(result).toBe(DDate.create("2019-12-31", {
			hour: "23",
			minute: "58",
			second: "45",
		}));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.subtractSeconds(
			baseDate,
			(-30 as number),
		);

		expect(result).toBe(DDate.create("2019-12-31", {
			hour: "23",
			minute: "59",
			second: "30",
		}));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.subtractSeconds(10),
		);

		expect(result).toBe(DDate.create("2019-12-31", {
			hour: "23",
			minute: "59",
			second: "50",
		}));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.subtractSeconds(
			beforeEpochDate,
			30,
		);

		expect(result).toBe(DDate.create("-0010-01-01", { second: "30" }));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
