import { pipe, type ExpectType, DDate } from "@scripts";

describe("getMilliseconds", () => {
	it("getMilliseconds returns milliseconds", () => {
		const result = DDate.getMilliseconds(
			DDate.create("2021-01-01", {
				hour: "12",
				minute: "30",
				second: "45",
				millisecond: "123",
			}),
		);

		expect(result).toBe(123);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getMilliseconds returns 0 when no milliseconds", () => {
		const result = DDate.getMilliseconds(
			DDate.create("2021-01-01", {
				hour: "12",
				minute: "30",
				second: "45",
			}),
		);

		expect(result).toBe(0);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getMilliseconds returns 999 for max milliseconds", () => {
		const result = DDate.getMilliseconds(
			DDate.create("2021-01-01", {
				hour: "12",
				minute: "30",
				second: "45",
				millisecond: "999",
			}),
		);

		expect(result).toBe(999);

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
				millisecond: "123",
			}),
			DDate.getMilliseconds,
		);

		expect(result).toBe(123);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});
});
