import { DNumber, pipe } from "@scripts";

describe("toFixed", () => {
	it("formats a number with specified decimal places", () => {
		expect(DNumber.toFixed(3.14159, 2)).toBe("3.14");
	});

	it("formats a number through pipe with curried version", () => {
		const result = pipe(3.14159, DNumber.toFixed(2));
		expect(result).toBe("3.14");
	});

	it("handles zero decimal places", () => {
		expect(DNumber.toFixed(3.7, 0)).toBe("4");
	});

	it("pads with zeros when needed", () => {
		expect(DNumber.toFixed(3.1, 3)).toBe("3.100");
	});
});
