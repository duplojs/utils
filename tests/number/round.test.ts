import { DNumber, pipe } from "@scripts";

describe("round", () => {
	it("rounds a number", () => {
		expect(DNumber.round(3.5)).toBe(4);
	});

	it("rounds a number through pipe", () => {
		const result = pipe(3.2, DNumber.round);
		expect(result).toBe(3);
	});
});
