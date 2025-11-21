import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("greaterThan", () => {
	const threshold = fromIso("2024-01-05T00:00:00.000Z");

	it("returns true when input is strictly greater than threshold", () => {
		const result = DDate.greaterThan(
			fromIso("2024-01-06T00:00:00.000Z"),
			threshold,
		);

		expect(result).toBe(true);

		type check = ExpectType<
			typeof result,
			boolean,
			"strict"
		>;
	});

	it("returns false when input equals threshold", () => {
		expect(DDate.greaterThan(threshold, threshold)).toBe(false);
	});

	it("returns false when input is less", () => {
		expect(DDate.greaterThan(fromIso("2024-01-01T00:00:00.000Z"), threshold)).toBe(false);
	});

	it("une in pipe", () => {
		const result = pipe(
			fromIso("2024-01-10T00:00:00.000Z"),
			DDate.greaterThan(threshold),
		);

		expect(result).toBe(true);
	});
});
