import { type ExpectType, DDate } from "@scripts";

describe("tomorrow", () => {
	it("tomorrow returns timestamp of tomorrow", () => {
		const before = Date.now() + 86400000;
		const result = DDate.tomorrow();
		const after = Date.now() + 86400000;

		expect(result).toMatch(/^date\d+\+$/);

		const timestamp = parseInt(result.match(/^date(\d+)\+$/)![1]!);
		expect(timestamp).toBeGreaterThanOrEqual(before - 1000);
		expect(timestamp).toBeLessThanOrEqual(after + 1000);

		type check = ExpectType<
			typeof result,
			`date${number}+`,
			"strict"
		>;
	});
});
