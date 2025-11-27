import { DArray, DString, type ExpectType, pipe } from "@scripts";

describe("toLowerCase", () => {
	it("should convert string to lowercase", () => {
		const str = "HELLO";
		const result = DString.toLowerCase(str);
		expect(result).toBe("hello");

		type check = ExpectType<
			typeof result,
			"hello",
			"strict"
		>;
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
