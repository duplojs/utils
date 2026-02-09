import { pipe, toRegExp, type ExpectType } from "@scripts";

describe("toRegExp", () => {
	it("creates an exact regular expression from a string", () => {
		const result = toRegExp("a.c");

		expect(result.test("a.c")).toBe(true);
		expect(result.test("abc")).toBe(false);
		expect(result.test("xa.c")).toBe(false);

		type check = ExpectType<
			typeof result,
			RegExp,
			"strict"
		>;
	});

	it("creates an exact regular expression that matches one of the strings", () => {
		const result = toRegExp(["a.c", "(x)"]);

		expect(result.test("a.c")).toBe(true);
		expect(result.test("(x)")).toBe(true);
		expect(result.test("abc")).toBe(false);
		expect(result.test("(x)x")).toBe(false);

		type check = ExpectType<
			typeof result,
			RegExp,
			"strict"
		>;
	});

	it("returns the same regular expression instance when input is already a RegExp", () => {
		const input = /hello/;
		const result = toRegExp(input);

		expect(result).toBe(input);

		type check = ExpectType<
			typeof result,
			RegExp,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe("alpha", toRegExp);

		expect(result.test("alpha")).toBe(true);
		expect(result.test("alphabeta")).toBe(false);

		type check = ExpectType<
			typeof result,
			RegExp,
			"strict"
		>;
	});
});
