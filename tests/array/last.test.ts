import { DArray, type ExpectType } from "@scripts/index";

describe("last", () => {
	it("get last element", () => {
		const result = DArray.last([1, 2, 3]);

		expect(result).toBe(3);

		type check = ExpectType<
			typeof result,
			number | undefined,
			"strict"
		>;
	});

	it("get last element from tuple", () => {
		const result = DArray.last([1, 2, 3] as const);

		expect(result).toBe(3);

		type check = ExpectType<
			typeof result,
			3,
			"strict"
		>;
	});

	it("get last element from empty array", () => {
		const result = void DArray.first([]);

		expect(result).toBe(undefined);

		type check = ExpectType<
			typeof result,
			undefined,
			"strict"
		>;
	});
});
