import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("getMinute", () => {
	it("getMinute returns minute in UTC", () => {
		const result = DDate.getMinute(
			fromIso("2021-01-01T12:30:00.000Z"),
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
			fromIso("2021-01-01T12:00:00.000Z"),
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
			fromIso("2021-01-01T12:59:00.000Z"),
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
			fromIso("2021-01-01T00:45:00.000Z"),
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
			fromIso("2021-01-01T12:30:00.000Z"),
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
			fromIso("2021-01-01T00:45:00.000Z"),
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
