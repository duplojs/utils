import { DArray, DString, type ExpectType, pipe } from "@scripts";

describe("trimStart", () => {
	it("should remove whitespace from start only", () => {
		expect(DString.trimStart("  hello  ")).toBe("hello  ");
		expect(DString.trimStart("\n\t world")).toBe("world");
		expect(DString.trimStart("")).toBe("");
		expect(DString.trimStart("no-spaces")).toBe("no-spaces");
	});

	it("use in pipe", () => {
		const result = pipe(
			["  apple", "\tbanana", " cherry"],
			DArray.map(DString.trimStart),
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
