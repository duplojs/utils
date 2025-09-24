import { DDate, type ExpectType, pipe } from "@scripts/index";

describe("today", () => {
	it("should have valid ISO format", () => {
		const result = DDate.today();
		const isoRegex = /^\d{4}-\d{2}-\d{2}T00:00:00\.000Z$/;

		expect(result).toMatch(isoRegex);

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.today(),
			DDate.toObject,
			(date) => date.year,
		);

		expect(result).toBe(new Date().getUTCFullYear());

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});
});
