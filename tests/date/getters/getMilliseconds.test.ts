import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("getMilliseconds", () => {
	it("getMilliseconds returns milliseconds", () => {
		const result = DDate.getMilliseconds(
			fromIso("2021-01-01T12:30:45.123Z"),
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
			fromIso("2021-01-01T12:30:45.000Z"),
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
			fromIso("2021-01-01T12:30:45.999Z"),
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
			fromIso("2021-01-01T12:30:45.123Z"),
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
