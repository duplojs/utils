import { DArray, DString, type ExpectType, pipe } from "@scripts/index";

describe("lastIndexOf", () => {
	it("should return last index when found", () => {
		expect(DString.lastIndexOf("javascript script", "script")).toBe(11);
		expect(DString.lastIndexOf("test test test", "test")).toBe(10);
	});

	it("should return undefined when not found", () => {
		expect(DString.lastIndexOf("hello", "world")).toBeUndefined();
	});

	it("should search from position backwards", () => {
		expect(DString.lastIndexOf("test test test", "test", 8)).toBe(5);
		expect(DString.lastIndexOf("abc abc abc", "abc", 6)).toBe(4);
	});

	it("use in pipe", () => {
		const result = pipe(
			["duplojs-framework", "nestjs-app", "express-server"],
			DArray.map(DString.lastIndexOf("-")),
			DArray.filter((index) => index !== undefined),
		);
		expect(result).toEqual([7, 6, 7]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});
});
