import { DArray, DString, type ExpectType, pipe } from "@scripts/index";

describe("startsWith", () => {
	it("should check if string starts with prefix", () => {
		const str = "javascript" as "javascript" | "hello" | "world";
		const predicate = DString.startsWith(str, "java");

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof str,
				"javascript",
				"strict"
			>;
		}
	});

	it("should return false for non-matching prefix", () => {
		expect(DString.startsWith("hello", "world")).toBe(false);
	});

	it("use in pipe", () => {
		const languages = ["duplojs", "nestjs", "expressjs"] as const;
		const result = pipe(
			languages,
			DArray.filter(DString.startsWith("du")),
		);
		expect(result).toEqual(["duplojs"]);

		type check = ExpectType<
			typeof result,
			"duplojs"[],
			"strict"
		>;
	});
});
