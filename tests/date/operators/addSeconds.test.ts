import { pipe, type ExpectType, DDate } from "@scripts";

describe("addSeconds", () => {
	const baseDate = DDate.create("2020-01-01");
	const beforeEpochDate = DDate.create("-0010-01-01");

	it("adds seconds to a date", () => {
		const result = DDate.addSeconds(
			baseDate,
			75,
		);

		expect(result).toBe(DDate.create("2020-01-01", {
			minute: "01",
			second: "15",
		}));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.addSeconds(
			baseDate,
			(-30 as number),
		);

		expect(result).toBe(DDate.create("2020-01-01", { second: "30" }));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.addSeconds(10),
		);

		expect(result).toBe(DDate.create("2020-01-01", { second: "10" }));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.addSeconds(
			beforeEpochDate,
			45,
		);

		expect(result).toBe(DDate.create("-0010-01-01", { second: "45" }));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
