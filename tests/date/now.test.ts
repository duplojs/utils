import { DDate, type ExpectType, pipe } from "@scripts/index";

describe("now", () => {
	it("should create current date", () => {
		const before = Date.now();
		const result = DDate.now();
		const after = Date.now();

		const resultTimestamp = DDate.toTimestamp(result);
		expect(resultTimestamp).toBeGreaterThanOrEqual(before);
		expect(resultTimestamp).toBeLessThanOrEqual(after);
		const parsed = DDate.toObject(result);
		expect(parsed.year).toBe(new Date().getFullYear());

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.now(),
			DDate.toObject,
			(parsed) => parsed.year,
		);

		expect(result).toBe(new Date().getFullYear());

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});
});
