import { pipe, type ExpectType, DDate } from "@scripts";

describe("betweenThanTime", () => {
	const lowerTime = DDate.createTime(30, "second");
	const upperTime = DDate.createTime(90, "second");

	it("returns true when input is strictly within range", () => {
		const result = DDate.betweenThanTime(
			DDate.createTime(60, "second"),
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
			DDate.createTime(120, "second"),
			lowerTime,
			upperTime,
		);

		expect(result).toBe(false);
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.createTime(60, "second"),
			DDate.betweenThanTime(lowerTime, upperTime),
		);

		expect(result).toBe(true);
	});
});
