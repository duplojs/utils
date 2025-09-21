import { DArray, DString, type ExpectType, pipe } from "@scripts/index";

describe("matchAll", () => {
	it("should return all matches as array", () => {
		const result = DString.matchAll("aaabbbccc", /a/g);
		expect(result).toHaveLength(3);
	});

	it("should return empty array when no matches", () => {
		expect(DString.matchAll("hello", /world/g)).toEqual([]);
	});

	it("use in pipe", () => {
		const str = "Contact us at info@duplojs.com or support@duplojs.com for help";
		const result = pipe(
			str,
			DString.matchAll(/\w+@\w+\.\w+/g),
			DArray.map(DArray.first),
		);
		expect(result).toEqual(["info@duplojs.com", "support@duplojs.com"]);

		type check = ExpectType<
			typeof result,
			(string | undefined)[],
			"strict"
		>;
	});
});
