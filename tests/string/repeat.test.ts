import { DArray, DString, type ExpectType, pipe } from "@scripts/index";

describe("repeat", () => {
	it("should repeat string", () => {
		expect(DString.repeat("abc", 3)).toBe("abcabcabc");
		expect(DString.repeat("x", 0)).toBe("");
	});

	it("should return empty string on invalid count", () => {
		expect(DString.repeat("test", -1)).toBe("");
		expect(DString.repeat("test", Infinity)).toBe("");
	});

	it("use in pipe", () => {
		const result = pipe(
			["*", "-", "="],
			DArray.map(DString.repeat(3)),
			DArray.join(" "),
		);
		expect(result).toBe("*** --- ===");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
