import { pipe, type ExpectType, DDate } from "@scripts";

describe("betweenThan", () => {
	const lower = DDate.create("2024-01-01");
	const upper = DDate.create("2024-01-10");

	it("returns true when input is strictly inside range", () => {
		const result = DDate.betweenThan(
			DDate.create("2024-01-05"),
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
			DDate.create("2024-01-12"),
			lower,
			upper,
		);

		expect(result).toBe(false);
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.create("2024-01-06"),
			DDate.betweenThan(lower, upper),
		);

		expect(result).toBe(true);
	});
});
