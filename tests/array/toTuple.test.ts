import { DArray, DObject, pipe, type ExpectType } from "@scripts/index";

describe("to", () => {
	it("basic usage", () => {
		const result = DArray.toTuple(
			[1, 2, 3] as const,
			[
				DArray.first,
				(input) => {
					type check = ExpectType<
						typeof input,
						readonly [1, 2, 3],
						"strict"
					>;

					return DArray.shift(input);
				},
			],
		);

		expect(result).toStrictEqual([1, [2, 3]]);

		type check = ExpectType<
			typeof result,
			[1, [2, 3]],
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			[1, 2, 3] as const,
			(value) => value,
			DArray.toTuple([
				DArray.first,
				DArray.shift,
			]),
		);

		expect(result).toStrictEqual([1, [2, 3]]);

		type check = ExpectType<
			typeof result,
			[1, [2, 3]],
			"strict"
		>;
	});
});
