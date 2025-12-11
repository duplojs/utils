import { DClean, DDate } from "@scripts";

describe("clean primitive dateLessThan", () => {
	const jan01 = DClean.Date.createOrThrow(DDate.create("2024-01-01"));
	const jan05 = DClean.Date.createOrThrow(DDate.create("2024-01-05"));
	const jan10 = DClean.Date.createOrThrow(DDate.create("2024-01-10"));

	it("works directly", () => {
		expect(DClean.dateLessThan(jan01, jan05)).toBe(true);
		expect(DClean.dateLessThan(jan05, jan01)).toBe(false);
	});

	it("works curried", () => {
		expect(DClean.dateLessThan(jan05)(jan10)).toBe(false);
		expect(DClean.dateLessThan(jan10)(jan05)).toBe(true);
	});
});
