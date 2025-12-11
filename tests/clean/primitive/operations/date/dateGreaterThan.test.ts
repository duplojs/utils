import { DClean, DDate } from "@scripts";

describe("clean primitive dateGreaterThan", () => {
	const jan01 = DClean.Date.createOrThrow(DDate.create("2024-01-01"));
	const jan05 = DClean.Date.createOrThrow(DDate.create("2024-01-05"));
	const jan10 = DClean.Date.createOrThrow(DDate.create("2024-01-10"));

	it("works directly", () => {
		expect(DClean.dateGreaterThan(jan05, jan01)).toBe(true);
		expect(DClean.dateGreaterThan(jan01, jan05)).toBe(false);
	});

	it("works curried", () => {
		expect(DClean.dateGreaterThan(jan05)(jan10)).toBe(true);
		expect(DClean.dateGreaterThan(jan10)(jan05)).toBe(false);
	});
});
