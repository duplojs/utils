import { pipe, type ExpectType, DDate } from "@scripts";

describe("addMinutes", () => {
	const baseDate = DDate.create("2020-01-01");
	const beforeEpochDate = DDate.create("-0010-01-01");

	it("adds minutes to a date", () => {
		const result = DDate.addMinutes(
			baseDate,
			90,
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2020-01-01", {
				hour: "01",
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
		const result = DDate.addMinutes(
			baseDate,
			(-45 as number),
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2019-12-31", {
				hour: "23",
				minute: "15",
			})),
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
			DDate.addMinutes(15),
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("2020-01-01", { minute: "15" })),
		);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.addMinutes(
			beforeEpochDate,
			45,
		);

		expect(DDate.serialize(result)).toBe(
			DDate.serialize(DDate.create("-0010-01-01", { minute: "45" })),
		);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
