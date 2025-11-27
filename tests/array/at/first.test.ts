import { DArray, type ExpectType } from "@scripts";

describe("first", () => {
	it("get first element", () => {
		const result = DArray.first([1, 2, 3]);

		expect(result).toBe(1);

		type check = ExpectType<
			typeof result,
			number | undefined,
			"strict"
		>;
	});

	it("get first element from tuple", () => {
		const result = DArray.first([1, 2, 3] as const);

		expect(result).toBe(1);

		type check = ExpectType<
			typeof result,
			1,
			"strict"
		>;
	});

	it("get first element from empty array", () => {
		const result = void DArray.first([]);

		expect(result).toBe(undefined);

		type check = ExpectType<
			typeof result,
			undefined,
			"strict"
		>;
	});
});
