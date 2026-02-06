import { type ExpectType, DDate } from "@scripts";

describe("now", () => {
	it("now returns current timestamp", () => {
		const before = Date.now();
		const result = DDate.now();
		const after = Date.now();

		const serialized = DDate.serialize(result);
		expect(serialized).toMatch(/^date\d+\+$/);

		const timestamp = parseInt(serialized.match(/^date(\d+)\+$/)![1]!);
		expect(timestamp).toBeGreaterThanOrEqual(before);
		expect(timestamp).toBeLessThanOrEqual(after);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
