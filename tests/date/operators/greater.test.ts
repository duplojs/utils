import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("greater", () => {
	const threshold = fromIso("2024-01-05T00:00:00.000Z");

	it("returns true when input is greater than threshold", () => {
		const result = DDate.greater(
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

	it("returns true when input equals threshold", () => {
		expect(DDate.greater(threshold, threshold)).toBe(true);
	});

	it("returns false when input is less than threshold", () => {
		expect(DDate.greater(fromIso("2024-01-01T00:00:00.000Z"), threshold)).toBe(false);
	});

	it("use in pipe", () => {
		const result = pipe(
			fromIso("2024-01-10T00:00:00.000Z"),
			DDate.greater(threshold),
		);

		expect(result).toBe(true);
	});
});
