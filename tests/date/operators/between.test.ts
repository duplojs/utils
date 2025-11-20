import { pipe, type ExpectType, DDate } from "@scripts";

describe("between", () => {
	const lower = DDate.create("2024y-1m-1d");
	const upper = DDate.create("2024y-1m-10d");

	it("returns true when input is within inclusive range", () => {
		const result = DDate.between(
			DDate.create("2024y-1m-5d"),
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
			DDate.create("2024y-1m-15d"),
			lower,
			upper,
		);

		expect(result).toBe(false);
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.create("2024y-1m-3d"),
			DDate.between(lower, upper),
		);

		expect(result).toBe(true);
	});
});
