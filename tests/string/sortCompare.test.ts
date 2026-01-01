import { DString, pipe, type ExpectType } from "@scripts";

describe("sortCompare", () => {
	it("compares two strings", () => {
		const result = DString.sortCompare("b", "a");
		expect(result).toBeGreaterThan(0);

		type check = ExpectType<typeof result, number, "strict">;

		expect(DString.sortCompare("a", "b")).toBe(-1);
	});

	it("returns zero for identical strings", () => {
		const result = DString.sortCompare("same", "same");
		expect(result).toBe(0);

		type check = ExpectType<typeof result, number, "strict">;
	});

	it("use in pipe", () => {
		const result = pipe(
			"b",
			DString.sortCompare("a"),
		);
		expect(result).toBeGreaterThan(0);

		type check = ExpectType<typeof result, number, "strict">;
	});
});
