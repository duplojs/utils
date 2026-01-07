import { DClean, DDate, unwrap } from "@scripts";

describe("clean primitive dateMin", () => {
	const jan01 = DClean.Date.createOrThrow(DDate.create("2024-01-01"));
	const jan05 = DClean.Date.createOrThrow(DDate.create("2024-01-05"));
	const jan10 = DClean.Date.createOrThrow(DDate.create("2024-01-10"));

	it("returns earliest date in direct form", () => {
		const result = DClean.dateMin([jan10, jan05, jan01]);
		expect(unwrap(result)).toBe(DDate.create("2024-01-01"));
	});
});
