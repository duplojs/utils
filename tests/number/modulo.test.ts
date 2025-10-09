import { pipe } from "@scripts/common";
import { DNumber } from "@scripts";

describe("modulo", () => {
	it("computes modulo of two numbers", () => {
		expect(DNumber.modulo(22, 5)).toBe(2);
	});

	it("computes modulo through pipe", () => {
		const result = pipe(22, DNumber.modulo(5));
		expect(result).toBe(2);
	});
});
