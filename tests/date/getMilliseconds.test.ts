import { pipe, type ExpectType, DDate } from "@scripts";

describe("getMilliseconds", () => {
	it("getMilliseconds returns milliseconds", () => {
		const result = DDate.getMilliseconds(
			DDate.create("2021y-1m-1d-12h-30mn-45s-123ms"),
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
			DDate.create("2021y-1m-1d-12h-30mn-45s"),
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
			DDate.create("2021y-1m-1d-12h-30mn-45s-999ms"),
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
			DDate.create("2021y-1m-1d-12h-30mn-45s-123ms"),
			(date) => DDate.getMilliseconds(date),
		);

		expect(result).toBe(123);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});
});
