import { pipe, type ExpectType, DDate } from "@scripts";

describe("getMinute", () => {
	it("getMinute returns minute in UTC", () => {
		const result = DDate.getMinute(
			DDate.create("2021y-1m-1d-12h-30mn"),
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
			DDate.create("2021y-1m-1d-12h"),
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
			DDate.create("2021y-1m-1d-12h-59mn"),
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
			DDate.create("2021y-1m-1d-0h-45mn"),
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
			DDate.create("2021y-1m-1d-12h-30mn"),
			(date) => DDate.getMinute(date),
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
			DDate.create("2021y-1m-1d-0h-45mn"),
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
