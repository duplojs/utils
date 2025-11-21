import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("getSecond", () => {
	it("getSecond returns second in UTC", () => {
		const result = DDate.getSecond(
			fromIso("2021-01-01T12:30:45.000Z"),
		);

		expect(result).toBe(45);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getSecond returns 0 when no seconds", () => {
		const result = DDate.getSecond(
			fromIso("2021-01-01T12:30:00.000Z"),
		);

		expect(result).toBe(0);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getSecond returns 59 for max seconds", () => {
		const result = DDate.getSecond(
			fromIso("2021-01-01T12:30:59.000Z"),
		);

		expect(result).toBe(59);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getSecond returns second with timezone", () => {
		const result = DDate.getSecond(
			fromIso("2021-01-01T00:00:30.000Z"),
			"America/New_York",
		);

		expect(result).toBe(30);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			fromIso("2021-01-01T12:30:45.000Z"),
			DDate.getSecond,
		);

		expect(result).toBe(45);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("use in pipe with timezone", () => {
		const result = pipe(
			fromIso("2021-01-01T00:00:30.000Z"),
			(date) => DDate.getSecond(date, "America/New_York"),
		);

		expect(result).toBe(30);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});
});
