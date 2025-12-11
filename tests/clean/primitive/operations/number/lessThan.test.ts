import { DClean } from "@scripts";

describe("clean primitive number lessThan", () => {
	const one = DClean.Number.createOrThrow(1);
	const two = DClean.Number.createOrThrow(2);

	it("compares directly", () => {
		expect(DClean.lessThan(one, two)).toBe(true);
		expect(DClean.lessThan(two, one)).toBe(false);
	});

	it("compares curried", () => {
		expect(DClean.lessThan(two)(one)).toBe(true);
		expect(DClean.lessThan(one)(two)).toBe(false);
	});
});
