import { DArray, DString, type ExpectType, pipe } from "@scripts";

describe("search", () => {
	it("should return index when pattern is found", () => {
		expect(DString.search("javascript", "script")).toBe(4);
		expect(DString.search("hello world", /wor/)).toBe(6);
	});

	it("should return undefined when pattern is not found", () => {
		expect(DString.search("hello", "world")).toBeUndefined();
		expect(DString.search("javascript", /python/)).toBeUndefined();
	});

	it("use in pipe", () => {
		const result = pipe(
			["duplojs", "nestjs", "express"],
			DArray.map(DString.search("js")),
			DArray.filter((index) => index !== undefined),
		);
		expect(result).toEqual([5, 4]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});
});
