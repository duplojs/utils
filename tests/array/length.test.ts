import { DArray, type ExpectType, pipe } from "@scripts/index";

describe("length", () => {
	it("returns the correct length for a non-empty array", () => {
		const arr = [1, 2, 3, 4, 5] as const;
		const result = DArray.length(arr);
		expect(result).toBe(5);

	type check = ExpectType<
		typeof result,
		5,
		"strict"
	>;
	});

	it("returns 0 for an empty array", () => {
		const arr: [] = [];
		const result = DArray.length(arr);
		expect(result).toBe(0);

	type check = ExpectType<
		typeof result,
		0,
		"strict"
	>;
	});

	it("returns correct length for array of objects", () => {
		const arr = [
			{ name: "a" },
			{ name: "b" },
			{ name: "c" },
		];

		const result = pipe(
			arr,
			DArray.length,
		);
		expect(result).toBe(3);

	type check = ExpectType<
		typeof result,
		number,
		"strict"
	>;
	});
});
