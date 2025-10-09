import { DArray, DString, type ExpectType, pipe } from "@scripts/index";

describe("charAt", () => {
	it("should return character at index", () => {
		expect(DString.charAt("hello", 1)).toBe("e");
		expect(DString.charAt("hello", 0)).toBe("h");
		expect(DString.charAt("hello", 4)).toBe("o");
	});

	it("should handle edge cases", () => {
		expect(DString.charAt("hello", 10)).toBe("");
		expect(DString.charAt("hello", -1)).toBe("");
		expect(DString.charAt("", 0)).toBe("");
	});

	it("use in pipe", () => {
		const result = pipe(
			["apple", "banana", "cherry"],
			DArray.map(DString.charAt(0)),
			DArray.join(""),
		);
		expect(result).toBe("abc");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
