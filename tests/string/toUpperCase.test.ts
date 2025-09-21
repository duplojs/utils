import { DArray, DString, type ExpectType, pipe } from "@scripts/index";

describe("toUpperCase", () => {
	it("should convert string to uppercase", () => {
		const str = "hello";
		const result = DString.toUpperCase(str);
		expect(result).toBe("HELLO");

		type check = ExpectType<
			typeof result,
			"HELLO",
			"strict"
		>;
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
