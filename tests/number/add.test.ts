import { pipe } from "@scripts/common";
import { DNumber } from "@scripts";

describe("add", () => {
	it("adds two numbers", () => {
		expect(DNumber.add(2, 3)).toBe(5);
	});

	it("adds through pipe", () => {
		const result = pipe(2, DNumber.add(3));
		expect(result).toBe(5);
	});
});
