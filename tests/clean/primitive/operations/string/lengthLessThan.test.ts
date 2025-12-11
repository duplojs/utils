import { DClean } from "@scripts";

describe("clean primitive string lengthLessThan", () => {
	const hello = DClean.String.createOrThrow("hello");

	it("compares directly", () => {
		expect(DClean.lengthLessThan(hello, 10)).toBe(true);
		expect(DClean.lengthLessThan(hello, 3)).toBe(false);
	});

	it("compares curried", () => {
		expect(DClean.lengthLessThan(10)(hello)).toBe(true);
		expect(DClean.lengthLessThan(3)(hello)).toBe(false);
	});
});
