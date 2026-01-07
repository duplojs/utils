import { pipe, type ExpectType, DDate } from "@scripts";

describe("betweenTime", () => {
	const lowerTime = DDate.createTime(30, "second");
	const upperTime = DDate.createTime(90, "second");

	it("returns true when input is within inclusive range", () => {
		const result = DDate.betweenTime(
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

	it("returns true when input equals bounds", () => {
		expect(DDate.betweenTime(lowerTime, lowerTime, upperTime)).toBe(true);
		expect(DDate.betweenTime(upperTime, lowerTime, upperTime)).toBe(true);
	});

	it("returns false when input is outside range", () => {
		const result = DDate.betweenTime(
			DDate.createTime(120, "second"),
			lowerTime,
			upperTime,
		);

		expect(result).toBe(false);
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.createTime(60, "second"),
			DDate.betweenTime(lowerTime, upperTime),
		);

		expect(result).toBe(true);
	});
});
