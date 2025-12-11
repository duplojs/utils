import { DClean, unwrap } from "@scripts";

describe("clean primitive number divide", () => {
	const four = DClean.Number.createOrThrow(4);
	const two = DClean.Number.createOrThrow(2);

	it("divides directly", () => {
		expect(unwrap(DClean.divide(four, two))).toBe(2);
	});

	it("divides curried", () => {
		expect(unwrap(DClean.divide(two)(four))).toBe(2);
	});
});
