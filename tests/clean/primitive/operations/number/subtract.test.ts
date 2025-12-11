import { DClean, unwrap } from "@scripts";

describe("clean primitive number subtract", () => {
	const four = DClean.Number.createOrThrow(4);
	const two = DClean.Number.createOrThrow(2);

	it("subtracts directly", () => {
		expect(unwrap(DClean.subtract(four, two))).toBe(2);
	});

	it("subtracts curried", () => {
		expect(unwrap(DClean.subtract(two)(four))).toBe(2);
	});
});
