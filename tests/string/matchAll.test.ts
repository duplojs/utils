import { DArray, DString, type ExpectType, pipe } from "@scripts";

describe("matchAll", () => {
	it("should return all matches as array", () => {
		const result = DString.matchAll("aaabbbccc", /a/g);
		expect(DArray.from(result)).toHaveLength(3);

		type check = ExpectType<
			typeof result,
			RegExpStringIterator<RegExpMatchArray>,
			"strict"
		>;
	});

	it("should return empty array when no matches", () => {
		const result = DString.matchAll("hello", /world/g);
		expect(DArray.from(result)).toEqual([]);

		type check = ExpectType<
			typeof result,
			RegExpStringIterator<RegExpMatchArray>,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const str = "Contact us at info@duplojs.com or support@duplojs.com for help";
		const result = pipe(
			str,
			DString.matchAll(/\w+@\w+\.\w+/g),
			DArray.from,
			DArray.map(DArray.first),
			DArray.filter((value) => value !== undefined),
		);
		expect(result).toEqual(["info@duplojs.com", "support@duplojs.com"]);

		type check = ExpectType<
			typeof result,
			string[],
			"strict"
		>;
	});
});
