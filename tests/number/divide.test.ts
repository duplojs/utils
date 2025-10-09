import { pipe } from "@scripts/common";
import { DNumber } from "@scripts";

describe("divide", () => {
	it("divides two numbers", () => {
		expect(DNumber.divide(20, 5)).toBe(4);
	});

	it("divides through pipe", () => {
		const result = pipe(20, DNumber.divide(5));
		expect(result).toBe(4);
	});
});
