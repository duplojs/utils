import { DArray, DString, type ExpectType, pipe } from "@scripts";

describe("trimEnd", () => {
	it("should remove whitespace from end only", () => {
		expect(DString.trimEnd("  hello  ")).toBe("  hello");
		expect(DString.trimEnd("world \t\n")).toBe("world");
		expect(DString.trimEnd("")).toBe("");
		expect(DString.trimEnd("no-spaces")).toBe("no-spaces");
	});

	it("use in pipe", () => {
		const result = pipe(
			["apple  ", "banana\t", "cherry "],
			DArray.map(DString.trimEnd),
			DArray.join(","),
		);
		expect(result).toBe("apple,banana,cherry");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
