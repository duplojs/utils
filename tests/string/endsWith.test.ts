import { DArray, DString, type ExpectType, pipe } from "@scripts";

describe("endsWith", () => {
	it("should check if string ends with suffix", () => {
		const str = "javascript" as "javascript" | "python" | "java";
		const predicate = DString.endsWith(str, "script");

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof str,
				"javascript",
				"strict"
			>;
		}
	});

	it("should return false for non-matching suffix", () => {
		expect(DString.endsWith("hello", "world")).toBe(false);
	});

	it("use in pipe with type narrowing", () => {
		const languages = ["javascript", "typescript", "python"] as const;
		const result = pipe(
			languages,
			DArray.filter(DString.endsWith("script")),
		);
		expect(result).toEqual(["javascript", "typescript"]);

		type check = ExpectType<
			typeof result,
			("javascript" | "typescript")[],
			"strict"
		>;
	});
});
