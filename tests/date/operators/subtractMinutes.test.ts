import { pipe, type ExpectType, DDate } from "@scripts";

describe("subtractMinutes", () => {
	const baseDate = DDate.create("2020-01-01");
	const beforeEpochDate = DDate.create("-0010-01-01", { hour: "01" });

	it("subtracts minutes from a date", () => {
		const result = DDate.subtractMinutes(
			baseDate,
			90,
		);

		expect(result).toBe(DDate.create("2019-12-31", {
			hour: "22",
			minute: "30",
		}));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.subtractMinutes(
			baseDate,
			(-45 as number),
		);

		expect(result).toBe(DDate.create("2019-12-31", {
			hour: "23",
			minute: "15",
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
			DDate.subtractMinutes(15),
		);

		expect(result).toBe(DDate.create("2019-12-31", {
			hour: "23",
			minute: "45",
		}));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.subtractMinutes(
			beforeEpochDate,
			30,
		);

		expect(result).toBe(DDate.create("-0010-01-01", { minute: "30" }));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
