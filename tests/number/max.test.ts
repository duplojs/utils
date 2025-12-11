import { pipe } from "@scripts/common";
import { DNumber } from "@scripts";

describe("max", () => {
	it("returns the maximum of two numbers", () => {
		expect(DNumber.max([4, 7])).toBe(7);
	});

	it("returns the maximum through pipe", () => {
		const result = pipe([4, 7], DNumber.max);
		expect(result).toBe(7);
	});
});
