import { pipe, type ExpectType, DDate } from "@scripts";

describe("betweenThan", () => {
	const lower = DDate.create("2024y-1m-1d");
	const upper = DDate.create("2024y-1m-10d");

	it("returns true when input is strictly inside range", () => {
		const result = DDate.betweenThan(
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

	it("returns false when input equals range bounds", () => {
		expect(DDate.betweenThan(lower, lower, upper)).toBe(false);
		expect(DDate.betweenThan(upper, lower, upper)).toBe(false);
	});

	it("returns false when input is outside range", () => {
		const result = DDate.betweenThan(
			DDate.create("2024y-1m-12d"),
			lower,
			upper,
		);

		expect(result).toBe(false);
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.create("2024y-1m-6d"),
			DDate.betweenThan(lower, upper),
		);

		expect(result).toBe(true);
	});
});
