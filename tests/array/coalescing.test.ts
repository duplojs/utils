import { DArray, type ExpectType } from "@scripts";

describe("coalescing", () => {
	it("coalescing string", () => {
		const value = "foo" as const;

		const result = DArray.coalescing(value);

		expect(result).toStrictEqual(["foo"]);

		type Check = ExpectType<
			typeof result,
			readonly ["foo"],
			"strict"
		>;
	});

	it("coalescing array", () => {
		const value = [1, 2, 3] as const;

		const result = DArray.coalescing(value);

		expect(result).toBe(value);

		type Check = ExpectType<
			typeof result,
			readonly [1, 2, 3],
			"strict"
		>;
	});

	it("coalescing  and string", () => {
		const value = [1, 2, 3] as number[] | string;

		const result = DArray.coalescing(value);

		expect(result).toBe(value);

		type Check = ExpectType<
			typeof result,
			number[] | readonly [string],
			"strict"
		>;
	});
});
