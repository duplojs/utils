import { pipe, type ExpectType, DDate } from "@scripts";

describe("betweenThanTime", () => {
	const lowerTime = DDate.createTime(30000);
	const upperTime = DDate.createTime(90000);

	it("returns true when input is strictly within range", () => {
		const result = DDate.betweenThanTime(
			DDate.createTime(60000),
			lowerTime,
			upperTime,
		);

		expect(result).toBe(true);

		type check = ExpectType<
			typeof result,
			boolean,
			"strict"
		>;
	});

	it("returns false when input equals bounds", () => {
		expect(DDate.betweenThanTime(lowerTime, lowerTime, upperTime)).toBe(false);
		expect(DDate.betweenThanTime(upperTime, lowerTime, upperTime)).toBe(false);
	});

	it("returns false when input is outside range", () => {
		const result = DDate.betweenThanTime(
			DDate.createTime(120000),
			lowerTime,
			upperTime,
		);

		expect(result).toBe(false);
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.createTime(60000),
			DDate.betweenThanTime(lowerTime, upperTime),
		);

		expect(result).toBe(true);
	});
});
