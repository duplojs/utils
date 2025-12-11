import { DClean, unwrap } from "@scripts";

describe("clean primitive number multiply", () => {
	const two = DClean.Number.createOrThrow(2);
	const four = DClean.Number.createOrThrow(4);

	it("multiplies directly", () => {
		expect(unwrap(DClean.multiply(two, two))).toBe(4);
	});

	it("multiplies curried", () => {
		expect(unwrap(DClean.multiply(two)(four))).toBe(8);
	});
});
