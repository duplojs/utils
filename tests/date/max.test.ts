import { DDate } from "@scripts";

describe("DDate max", () => {
	const jan01 = DDate.create("2024-01-01");
	const jan05 = DDate.create("2024-01-05");
	const jan10 = DDate.create("2024-01-10");

	it("picks latest date", () => {
		expect(DDate.max([jan01, jan10, jan05])).toBe(jan10);
	});
});
