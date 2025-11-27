import { DArray, DString, type ExpectType, pipe } from "@scripts";

describe("includes", () => {
	it("should check if string includes substring", () => {
		const str = "javascript" as "javascript" | "python" | "java";
		const predicate = DString.includes(str, "script");

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof str,
				"javascript",
				"strict"
			>;
		}
	});

	it("should return false for non-matching substring", () => {
		expect(DString.includes("hello", "world")).toBe(false);
	});

	it("use in pipe", () => {
		const values = ["duplojs", "django", "laravel"] as const;
		const result = pipe(
			values,
			DArray.filter(DString.includes("js")),
			DArray.first,
		);
		expect(result).toEqual("duplojs");

		type check = ExpectType<
			typeof result,
			"duplojs" | undefined,
			"strict"
		>;
	});
});
