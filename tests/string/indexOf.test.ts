import { DArray, DString, type ExpectType, pipe } from "@scripts";

describe("indexOf", () => {
	it("should return index when found", () => {
		expect(DString.indexOf("javascript", "script")).toBe(4);
		expect(DString.indexOf("hello world", "world")).toBe(6);
	});

	it("should return undefined when not found", () => {
		expect(DString.indexOf("hello", "world")).toBeUndefined();
	});

	it("should search from position", () => {
		expect(DString.indexOf("javascript script", "script", 5)).toBe(11);
		expect(DString.indexOf("test test test", "test", 8)).toBe(10);
	});

	it("use in pipe", () => {
		const result = pipe(
			["duplojs", "nestjs", "express"],
			DArray.map(DString.indexOf("js")),
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
