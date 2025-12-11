import { DClean, unwrap } from "@scripts";

describe("clean primitive number add", () => {
	const one = DClean.Number.createOrThrow(1);
	const two = DClean.Number.createOrThrow(2);

	it("adds directly", () => {
		expect(unwrap(DClean.add(one, two))).toBe(3);
	});

	it("adds curried", () => {
		expect(unwrap(DClean.add(two)(one))).toBe(3);
	});
});
