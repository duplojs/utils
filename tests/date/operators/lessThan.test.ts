import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("lessThan", () => {
	const threshold = fromIso("2024-01-05T00:00:00.000Z");

	it("returns true when input is strictly less than threshold", () => {
		const result = DDate.lessThan(
			fromIso("2024-01-01T00:00:00.000Z"),
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
		expect(DDate.lessThan(threshold, threshold)).toBe(false);
	});

	it("returns false when input is greater than threshold", () => {
		expect(DDate.lessThan(fromIso("2024-01-10T00:00:00.000Z"), threshold)).toBe(false);
	});

	it("use in pipe", () => {
		const result = pipe(
			fromIso("2024-01-02T00:00:00.000Z"),
			DDate.lessThan(threshold),
		);

		expect(result).toBe(true);
	});
});
