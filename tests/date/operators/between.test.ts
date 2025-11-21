import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("between", () => {
	const lower = fromIso("2024-01-01T00:00:00.000Z");
	const upper = fromIso("2024-01-10T00:00:00.000Z");

	it("returns true when input is within inclusive range", () => {
		const result = DDate.between(
			fromIso("2024-01-05T00:00:00.000Z"),
			lower,
			upper,
		);

		expect(result).toBe(true);

		type check = ExpectType<
			typeof result,
			boolean,
			"strict"
		>;
	});

	it("returns true when input equals bounds", () => {
		expect(DDate.between(lower, lower, upper)).toBe(true);
		expect(DDate.between(upper, lower, upper)).toBe(true);
	});

	it("returns false when input is outside range", () => {
		const result = DDate.between(
			fromIso("2024-01-15T00:00:00.000Z"),
			lower,
			upper,
		);

		expect(result).toBe(false);
	});

	it("use in pipe", () => {
		const result = pipe(
			fromIso("2024-01-03T00:00:00.000Z"),
			DDate.between(lower, upper),
		);

		expect(result).toBe(true);
	});
});
