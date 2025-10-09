import { pipe } from "@scripts/common";
import { DNumber } from "@scripts";

describe("ceil", () => {
	it("ceils a number", () => {
		expect(DNumber.ceil(3.1)).toBe(4);
	});

	it("ceils a number through pipe", () => {
		const result = pipe(3.1, DNumber.ceil);
		expect(result).toBe(4);
	});
});
