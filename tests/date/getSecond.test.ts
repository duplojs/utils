import { pipe, type ExpectType, DDate } from "@scripts";

describe("getSecond", () => {
	it("getSecond returns second in UTC", () => {
		const result = DDate.getSecond(
			DDate.create("2021y-1m-1d-12h-30mn-45s"),
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
			DDate.create("2021y-1m-1d-12h-30mn"),
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
			DDate.create("2021y-1m-1d-12h-30mn-59s"),
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
			DDate.create("2021y-1m-1d-0h-0mn-30s"),
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
			DDate.create("2021y-1m-1d-12h-30mn-45s"),
			(date) => DDate.getSecond(date),
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
			DDate.create("2021y-1m-1d-0h-0mn-30s"),
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
