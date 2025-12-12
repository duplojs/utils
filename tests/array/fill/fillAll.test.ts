import { DArray, type ExpectType, pipe } from "@scripts";

describe("fillAll", () => {
	it("replaces with array value", () => {
		const arr = [1, 2, 3];
		const result = DArray.fillAll(arr, null);
		expect(result).toEqual([null, null, null]);

		type check = ExpectType<
			typeof result,
			null[],
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			[1, 2, 3],
			DArray.fillAll(4),
		);
		expect(result).toEqual([4, 4, 4]);
	});
});
