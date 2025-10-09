import { pipe } from "@scripts/common";
import { DNumber } from "@scripts";

describe("power", () => {
	it("raises a number to an exponent", () => {
		expect(DNumber.power(2, 3)).toBe(8);
	});

	it("raises a number to an exponent through pipe", () => {
		const result = pipe(2, DNumber.power(4));
		expect(result).toBe(16);
	});
});
