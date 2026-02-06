import { pipe, type ExpectType, DDate } from "@scripts";

describe("subtractMinutes", () => {
	const baseDate = DDate.create("2020-01-01");
	const beforeEpochDate = DDate.create("-0010-01-01", { hour: "01" });

	it("subtracts minutes from a date", () => {
		const result = DDate.subtractMinutes(
			baseDate,
			90,
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2019-12-31", {
				hour: "22",
				minute: "30",
			})),
		);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("supports negative numbers", () => {
		const result = DDate.subtractMinutes(
			baseDate,
			(-45 as number),
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2020-01-01", { minute: "45" })),
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
			DDate.subtractMinutes(15),
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2019-12-31", {
				hour: "23",
				minute: "45",
			})),
		);

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

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("-0010-01-01", { minute: "30" })),
		);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
