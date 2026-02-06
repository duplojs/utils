import { DDate } from "@scripts";

describe("DDate max", () => {
	const jan01 = DDate.create("2024-01-01");
	const jan05 = DDate.create("2024-01-05");
	const jan10 = DDate.create("2024-01-10");

	it("picks latest date", () => {
		const result = DDate.max([jan01, jan10, jan05]);

		expect(DDate.toTimestamp(result)).toBe(
			DDate.toTimestamp(jan10),
		);
	});
});
