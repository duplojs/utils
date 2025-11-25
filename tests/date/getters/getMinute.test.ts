import { pipe, type ExpectType, DDate } from "@scripts";

describe("getMinute", () => {
	it("getMinute returns minute in UTC", () => {
		const result = DDate.getMinute(
			DDate.create("2021-01-01", {
				hour: "12",
				minute: "30",
			}),
		);

		expect(result).toBe(30);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getMinute returns 0 when no minutes", () => {
		const result = DDate.getMinute(
			DDate.create("2021-01-01", { hour: "12" }),
		);

		expect(result).toBe(0);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getMinute returns 59 for max minutes", () => {
		const result = DDate.getMinute(
			DDate.create("2021-01-01", {
				hour: "12",
				minute: "59",
			}),
		);

		expect(result).toBe(59);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getMinute returns minute with timezone", () => {
		const result = DDate.getMinute(
			DDate.create("2021-01-01", { minute: "45" }),
			"America/New_York",
		);

		expect(result).toBe(45);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.create("2021-01-01", {
				hour: "12",
				minute: "30",
			}),
			DDate.getMinute,
		);

		expect(result).toBe(30);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("use in pipe with timezone", () => {
		const result = pipe(
			DDate.create("2021-01-01", { minute: "45" }),
			(date) => DDate.getMinute(date, "America/New_York"),
		);

		expect(result).toBe(45);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});
});
