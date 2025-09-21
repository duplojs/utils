import { DArray, DString, type ExpectType, pipe } from "@scripts/index";

describe("toUpperCase", () => {
	it("should convert string to uppercase", () => {
		expect(DString.toUpperCase("hello")).toBe("HELLO");
		expect(DString.toUpperCase("World")).toBe("WORLD");
		expect(DString.toUpperCase("")).toBe("");
	});

	it("use in pipe", () => {
		const result = pipe(
			["hello", "world"],
			DArray.map(DString.toUpperCase),
			DArray.join(" "),
		);
		expect(result).toBe("HELLO WORLD");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
