import { type ExpectType, DDate } from "@scripts";

describe("now", () => {
	it("now returns current timestamp", () => {
		const before = Date.now();
		const result = DDate.now();
		const after = Date.now();

		expect(result).toMatch(/^date\d+\+$/);

		const timestamp = parseInt(result.match(/^date(\d+)\+$/)![1]!);
		expect(timestamp).toBeGreaterThanOrEqual(before);
		expect(timestamp).toBeLessThanOrEqual(after);

		type check = ExpectType<
			typeof result,
			`date${number}+`,
			"strict"
		>;
	});
});
