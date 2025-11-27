import { DArray, DString, type ExpectType, pipe } from "@scripts";

describe("split", () => {
	it("should split string with separator", () => {
		const result = DString.split("a,b,c", ",");
		expect(result).toEqual(["a", "b", "c"]);

		type check = ExpectType<
			typeof result,
			["a", "b", "c"],
			"strict"
		>;
	});

	it("should split string with limit", () => {
		const result = DString.split("a,b,c,d", ",", { limit: 2 });
		expect(result).toEqual(["a", "b"]);

		type check = ExpectType<
			typeof result,
			["a", "b"],
			"strict"
		>;
	});

	it("should split string with regex separator", () => {
		const result = DString.split("a,b;c:d", /[,;:]/);
		expect(result).toEqual(["a", "b", "c", "d"]);

		type check = ExpectType<
			typeof result,
			string[],
			"strict"
		>;
	});

	it("should split string with regex separator and limit", () => {
		const result = DString.split("a,b;c:d", /[,;:]/, { limit: 3 });
		expect(result).toEqual(["a", "b", "c"]);

		type check = ExpectType<
			typeof result,
			string[],
			"strict"
		>;
	});

	it("should handle empty string", () => {
		const result = DString.split("", ",");
		expect(result).toEqual([""]);

		type check = ExpectType<
			typeof result,
			[""],
			"strict"
		>;
	});

	it("should handle separator not found", () => {
		const result = DString.split("hello", ",");
		expect(result).toEqual(["hello"]);

		type check = ExpectType<
			typeof result,
			["hello"],
			"strict"
		>;
	});

	it("use in pipe with string separator", () => {
		const result = pipe(
			"apple,banana,cherry",
			DString.split(","),
			DArray.map(DString.toUpperCase),
		);
		expect(result).toEqual(["APPLE", "BANANA", "CHERRY"]);

		type check = ExpectType<
			typeof result,
			("APPLE" | "BANANA" | "CHERRY")[],
			"strict"
		>;
	});

	it("use in pipe with regex separator", () => {
		const result = pipe(
			"one;two,three:four",
			DString.split(/[;,:]/),
			DArray.filter((item) => item.length > 3),
		);
		expect(result).toEqual(["three", "four"]);

		type check = ExpectType<
			typeof result,
			string[],
			"strict"
		>;
	});

	it("use in pipe with limit", () => {
		const result = pipe(
			"a-b-c-d-e",
			DString.split("-"),
			DArray.join(" | "),
		);
		expect(result).toBe("a | b | c | d | e");

		type check = ExpectType<
			typeof result,
			"a | b | c | d | e",
			"strict"
		>;
	});
});
