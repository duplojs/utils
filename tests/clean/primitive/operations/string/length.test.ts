import { DClean, unwrap } from "@scripts";

describe("clean primitive string length", () => {
	const hello = DClean.String.createOrThrow("hello");

	it("returns wrapped length", () => {
		expect(unwrap(DClean.length(hello))).toBe(5);
	});
});
