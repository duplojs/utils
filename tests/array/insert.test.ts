import { DArray, pipe, type ExpectType } from "@scripts";

describe("insert", () => {
	it("inserts an element at the end of array", () => {
		const arr = [1, 2];
		const result = DArray.insert(3, arr);
		expect(result).toEqual([1, 2, 3]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});

	it("does not mutate the original array", () => {
		const arr = ["a", "b"];
		const result = DArray.insert("c", arr);
		expect(arr).toEqual(["a", "b"]);
		expect(result).not.toBe(arr);
	});

	it("preserves union types", () => {
		const arr: (string | number)[] = ["duplojs", 1, 2];
		const result = DArray.insert("php", arr);
		expect(result).toEqual(["duplojs", 1, 2, "php"]);

		type check = ExpectType<
			typeof result,
			(string | number)[],
			"strict"
		>;
	});

	it("use in pipe", () => {
		const arr = ["js", "ts"];
		const result = pipe(
			"duplojs",
			DArray.insert(arr),
		);
		expect(result).toEqual(["js", "ts", "duplojs"]);

		type check = ExpectType<
			typeof result,
			string[],
			"strict"
		>;
	});
});
