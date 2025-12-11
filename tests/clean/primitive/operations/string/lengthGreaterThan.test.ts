import { DClean } from "@scripts";

describe("clean primitive string lengthGreaterThan", () => {
	const hello = DClean.String.createOrThrow("hello");

	it("compares directly", () => {
		expect(DClean.lengthGreaterThan(hello, 3)).toBe(true);
		expect(DClean.lengthGreaterThan(hello, 6)).toBe(false);
	});

	it("compares curried", () => {
		expect(DClean.lengthGreaterThan(3)(hello)).toBe(true);
		expect(DClean.lengthGreaterThan(6)(hello)).toBe(false);
	});
});
