import { type ExpectType, DDate } from "@scripts";

describe("yesterday", () => {
	it("yesterday returns timestamp of yesterday", () => {
		const before = Date.now() - 86400000;
		const result = DDate.yesterday();
		const after = Date.now() - 86400000;

		const serialized = DDate.serialize(result);
		expect(serialized).toMatch(/^date\d+\+$/);

		const timestamp = parseInt(serialized.match(/^date(\d+)\+$/)![1]!);
		expect(timestamp).toBeGreaterThanOrEqual(before - 1000);
		expect(timestamp).toBeLessThanOrEqual(after + 1000);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
