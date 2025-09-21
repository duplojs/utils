import { DArray, DString, type ExpectType, pipe } from "@scripts/index";

describe("toLowerCase", () => {
	it("should convert string to lowercase", () => {
		expect(DString.toLowerCase("HELLO")).toBe("hello");
		expect(DString.toLowerCase("World")).toBe("world");
		expect(DString.toLowerCase("")).toBe("");
	});

	it("use in pipe", () => {
		const result = pipe(
			["HELLO", "WORLD"],
			DArray.map(DString.toLowerCase),
			DArray.join(" "),
		);
		expect(result).toBe("hello world");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
