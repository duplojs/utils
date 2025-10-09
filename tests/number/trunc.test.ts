import { pipe } from "@scripts/common";
import { DNumber } from "@scripts";

describe("trunc", () => {
	it("truncates a positive number", () => {
		expect(DNumber.trunc(3.9)).toBe(3);
	});

	it("truncates a number through pipe", () => {
		const result = pipe(-3.9, DNumber.trunc);
		expect(result).toBe(-3);
	});
});
