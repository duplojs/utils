import { pipe } from "@scripts/common";
import { DNumber } from "@scripts";

describe("subtract", () => {
	it("subtracts two numbers", () => {
		expect(DNumber.subtract(10, 3)).toBe(7);
	});

	it("subtracts through pipe", () => {
		const result = pipe(10, DNumber.subtract(3));
		expect(result).toBe(7);
	});
});
