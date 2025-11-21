import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("betweenThan", () => {
	const lower = fromIso("2024-01-01T00:00:00.000Z");
	const upper = fromIso("2024-01-10T00:00:00.000Z");

	it("returns true when input is strictly inside range", () => {
		const result = DDate.betweenThan(
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

	it("returns false when input equals range bounds", () => {
		expect(DDate.betweenThan(lower, lower, upper)).toBe(false);
		expect(DDate.betweenThan(upper, lower, upper)).toBe(false);
	});

	it("returns false when input is outside range", () => {
		const result = DDate.betweenThan(
			fromIso("2024-01-12T00:00:00.000Z"),
			lower,
			upper,
		);

		expect(result).toBe(false);
	});

	it("use in pipe", () => {
		const result = pipe(
			fromIso("2024-01-06T00:00:00.000Z"),
			DDate.betweenThan(lower, upper),
		);

		expect(result).toBe(true);
	});
});
