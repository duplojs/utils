import { DArray, DString, type ExpectType, pipe } from "@scripts";

describe("trim", () => {
	it("should remove whitespace from both ends", () => {
		expect(DString.trim("  hello  ")).toBe("hello");
		expect(DString.trim("\n\t world \t\n")).toBe("world");
		expect(DString.trim("")).toBe("");
		expect(DString.trim("no-spaces")).toBe("no-spaces");
	});

	it("use in pipe", () => {
		const result = pipe(
			["  apple  ", "\tbanana\n", " cherry "],
			DArray.map(DString.trim),
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
