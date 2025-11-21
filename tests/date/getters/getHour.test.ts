import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("getHour", () => {
	it("getHour returns hour in UTC", () => {
		const result = DDate.getHour(
			fromIso("2021-01-01T15:00:00.000Z"),
		);

		expect(result).toBe(15);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getHour returns hour with timezone", () => {
		const result = DDate.getHour(
			fromIso("2021-01-01T00:00:00.000Z"),
			"America/New_York",
		);

		expect(result).toBe(19);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getHour returns 0 for midnight", () => {
		const result = DDate.getHour(
			fromIso("2021-01-01T00:00:00.000Z"),
		);

		expect(result).toBe(0);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getHour returns 23 for last hour", () => {
		const result = DDate.getHour(
			fromIso("2021-01-01T23:00:00.000Z"),
		);

		expect(result).toBe(23);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			fromIso("2021-01-01T15:00:00.000Z"),
			DDate.getHour,
		);

		expect(result).toBe(15);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("use in pipe with timezone", () => {
		const result = pipe(
			fromIso("2021-01-01T00:00:00.000Z"),
			(date) => DDate.getHour(date, "America/New_York"),
		);

		expect(result).toBe(19);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});
});
