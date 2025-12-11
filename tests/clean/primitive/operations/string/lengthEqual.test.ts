import { DClean } from "@scripts";

describe("clean primitive string lengthEqual", () => {
	const hello = DClean.String.createOrThrow("hello");

	it("compares directly", () => {
		expect(DClean.lengthEqual(hello, 5)).toBe(true);
		expect(DClean.lengthEqual(hello, 4)).toBe(false);
	});

	it("compares curried", () => {
		expect(DClean.lengthEqual(5)(hello)).toBe(true);
		expect(DClean.lengthEqual(4)(hello)).toBe(false);
	});
});
