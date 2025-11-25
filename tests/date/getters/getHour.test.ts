import { pipe, type ExpectType, DDate } from "@scripts";

describe("getHour", () => {
	it("getHour returns hour in UTC", () => {
		const result = DDate.getHour(
			DDate.create("2021-01-01", { hour: "15" }),
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
			DDate.create("2021-01-01"),
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
			DDate.create("2021-01-01"),
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
			DDate.create("2021-01-01", { hour: "23" }),
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
			DDate.create("2021-01-01", { hour: "15" }),
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
			DDate.create("2021-01-01"),
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
