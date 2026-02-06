import { DDate } from "@scripts";

describe("DDate min", () => {
	const jan01 = DDate.create("2024-01-01");
	const jan05 = DDate.create("2024-01-05");
	const jan10 = DDate.create("2024-01-10");

	it("picks earliest date", () => {
		const result = DDate.min([jan10, jan05, jan01]);

		expect(DDate.toTimestamp(result)).toBe(
			DDate.toTimestamp(jan01),
		);
	});
});
