import { DArray, type ExpectType } from "@scripts";

describe("is", () => {
	it("must be an array of numbers", () => {
		const value = [1, 2, 3];
		const result = DArray.is(value);
		expect(result).toBe(true);
	});

	it("is not array", () => {
		const value = "duplojs";
		const result = DArray.is(value);
		expect(result).toBe(false);
	});

	it("must be an empty array", () => {
		const value: unknown[] = [];
		const result = DArray.is(value);
		expect(result).toBe(true);
	});

	it("should validate the type predicate", () => {
		const value: number | string[] = [];
		const result = DArray.is(value);
		expect(result).toBe(true);

		type check = ExpectType<
			typeof value,
			string[],
			"strict"
		>;
	});
});
