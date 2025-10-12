import { pipe, type ExpectType, not, when, isType, DArray } from "@scripts";

describe("not", () => {
	it("negates predicate on direct call", () => {
		const union = 42 as string | number;

		const predicate = not(union, isType("string"));

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof union,
				number,
				"strict"
			>;
		} else {
			type check = ExpectType<
				typeof union,
				string,
				"strict"
			>;
		}
	});

	it("use in pipe with when", () => {
		const result = pipe(
			[1, "two", 3, "four"],
			DArray.filter(not(isType("string"))),
		);

		expect(result).toStrictEqual([
			1,
			3,
		]);

		type listCheck = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});
});
