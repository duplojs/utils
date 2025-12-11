import { DClean } from "@scripts";

describe("clean primitive number greaterThan", () => {
	const one = DClean.Number.createOrThrow(1);
	const two = DClean.Number.createOrThrow(2);

	it("compares directly", () => {
		expect(DClean.greaterThan(two, one)).toBe(true);
		expect(DClean.greaterThan(one, two)).toBe(false);
	});

	it("compares curried", () => {
		expect(DClean.greaterThan(one)(two)).toBe(true);
		expect(DClean.greaterThan(two)(one)).toBe(false);
	});
});
