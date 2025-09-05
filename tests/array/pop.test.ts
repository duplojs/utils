import { DArray, type ExpectType } from "@scripts/index";

describe("pop", () => {
	it("must have last index less", () => {
		const arr = [1, 2, 3];
		const result = DArray.pop(arr);

		expect(result).toEqual([1, 2]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});

	it("must have last index less (literal)", () => {
		const arr = [1, 2, 3] as const;
		const result = DArray.pop(arr);

		expect(result).toStrictEqual([1, 2]);

		type check = ExpectType<
			typeof result,
			[1, 2],
			"strict"
		>;
	});

	it("must have last index less (multiple type)", () => {
		const arr = ["duplojs", 2, { id: 1 }];
		const result = DArray.pop(arr);

		expect(result).toEqual(["duplojs", 2]);

		type check = ExpectType<
			typeof result,
			(string | number | { id: number })[],
			"strict"
		>;
	});

	it("must have last index less (literal v2)", () => {
		const arr = ["duplojs", 2, { id: 1 }] as const;
		const result = DArray.pop(arr);

		expect(result).toStrictEqual(["duplojs", 2]);

		type check = ExpectType<
			typeof result,
			["duplojs", 2],
			"strict"
		>;
	});
});
