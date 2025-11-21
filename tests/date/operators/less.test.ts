import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("less", () => {
	const threshold = fromIso("2024-01-05T00:00:00.000Z");

	it("returns true when input is less than threshold", () => {
		const result = DDate.less(
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

	it("returns true when input equals threshold", () => {
		expect(DDate.less(threshold, threshold)).toBe(true);
	});

	it("returns false when input is greater than threshold", () => {
		expect(DDate.less(fromIso("2024-01-10T00:00:00.000Z"), threshold)).toBe(false);
	});

	it("une in pipe", () => {
		const result = pipe(
			fromIso("2024-01-02T00:00:00.000Z"),
			DDate.less(threshold),
		);

		expect(result).toBe(true);
	});
});
