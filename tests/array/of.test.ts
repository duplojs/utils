import { DArray, pipe, type ExpectType } from "@scripts";

describe("of", () => {
	it("create an array from arguments", () => {
		const result = DArray.of(1, 2, 3);

		expect(result).toStrictEqual([1, 2, 3]);

        type check = ExpectType<typeof result, number[], "strict">;
	});

	it("use in pipe", () => {
		const result = pipe(
			1,
			DArray.of(),
			(value) => value,
			DArray.map((value) => value + 1),
		);

		expect(result).toStrictEqual([2]);

        type check = ExpectType<typeof result, number[], "strict">;
	});
});
