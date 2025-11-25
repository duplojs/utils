import { pipe, type ExpectType, DDate } from "@scripts";

describe("between", () => {
	const lower = DDate.create("2024-01-01");
	const upper = DDate.create("2024-01-10");

	it("returns true when input is within inclusive range", () => {
		const result = DDate.between(
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

	it("returns true when input equals bounds", () => {
		expect(DDate.between(lower, lower, upper)).toBe(true);
		expect(DDate.between(upper, lower, upper)).toBe(true);
	});

	it("returns false when input is outside range", () => {
		const result = DDate.between(
			DDate.create("2024-01-15"),
			lower,
			upper,
		);

		expect(result).toBe(false);
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.create("2024-01-03"),
			DDate.between(lower, upper),
		);

		expect(result).toBe(true);
	});
});
