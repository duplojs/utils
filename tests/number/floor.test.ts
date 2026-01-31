import { DNumber, pipe } from "@scripts";

describe("floor", () => {
	it("floors a number", () => {
		expect(DNumber.floor(3.9)).toBe(3);
	});

	it("floors a number through pipe", () => {
		const result = pipe(3.9, DNumber.floor);
		expect(result).toBe(3);
	});
});
