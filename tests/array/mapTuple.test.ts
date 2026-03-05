import { DArray, type ExpectType, pipe } from "@scripts";

describe("mapTuple", () => {
	it("maps tuple values", () => {
		const result = DArray.mapTuple([1, 2, 3] as const, (value) => value * 2);

		expect(result).toStrictEqual([2, 4, 6]);

		type check = ExpectType<
			typeof result,
			[number, number, number],
			"strict"
		>;
	});

	it("maps values with index and self params", () => {
		const input = [10, 20, 30] as const;
		const result = DArray.mapTuple(input, (value, { index, self }) => value + index + self.length);

		expect(result).toStrictEqual([13, 24, 35]);

		type check = ExpectType<
			typeof result,
			[number, number, number],
			"strict"
		>;
	});

	it("returns an empty tuple when input is empty", () => {
		const result = DArray.mapTuple([] as const, (value) => value);

		expect(result).toStrictEqual([]);

		type check = ExpectType<
			typeof result,
			[],
			"strict"
		>;
	});

	it("works in pipe", () => {
		const result = pipe(
			[1, 2, 3] as const,
			DArray.mapTuple((value) => value + 1),
		);

		expect(result).toStrictEqual([2, 3, 4]);

		type check = ExpectType<
			typeof result,
			[number, number, number],
			"strict"
		>;
	});
});

type _mapCheck1 = ExpectType<
	DArray.MapTuple<[1, 2, 3], number>,
	[number, number, number],
	"strict"
>;
type _mapCheck2 = ExpectType<
	DArray.MapTuple<[number, ...number[], number], number>,
	[number, ...number[]],
	"strict"
>;
type _mapCheck3 = ExpectType<
	DArray.MapTuple<[1, 2, 3], number | undefined>,
	[number | undefined, number | undefined, number | undefined],
	"strict"
>;
type _mapCheck4 = ExpectType<
	DArray.MapTuple<[...number[], number, number], number>,
	number[],
	"strict"
>;
type _mapCheck5 = ExpectType<
	DArray.MapTuple<[number, ...number[]], bigint>,
	[bigint, ...bigint[]],
	"strict"
>;
