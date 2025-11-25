import { pipe, type ExpectType, DDate } from "@scripts";

describe("getSecond", () => {
	it("getSecond returns second in UTC", () => {
		const result = DDate.getSecond(
			DDate.create("2021-01-01", {
				hour: "12",
				minute: "30",
				second: "45",
			}),
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
			DDate.create("2021-01-01", {
				hour: "12",
				minute: "30",
			}),
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
			DDate.create("2021-01-01", {
				hour: "12",
				minute: "30",
				second: "59",
			}),
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
			DDate.create("2021-01-01", { second: "30" }),
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
			DDate.create("2021-01-01", {
				hour: "12",
				minute: "30",
				second: "45",
			}),
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
			DDate.create("2021-01-01", { second: "30" }),
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
