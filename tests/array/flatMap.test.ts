import { DArray, type ExpectType, pipe, innerPipe, DNumber } from "@scripts";

describe("flatMap", () => {
	it("object", () => {
		const arr = [{ id: 1 }, { id: 2 }];
		const result = DArray.flatMap(arr, (element) => [element.id, element.id * 10]);

		expect(result).toStrictEqual([1, 10, 2, 20]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});

	it("simple", () => {
		const arr = [[1], [2, 3], [], [4]];
		const result = DArray.flatMap(arr, (arr) => arr);

		expect(result).toStrictEqual([1, 2, 3, 4]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});

	it("should return array without nullish or undefined", () => {
		const arr = [null, [1, 2], undefined, [3]];
		const result = DArray.flatMap(arr, (element) => DArray.is(element) ? element : []);

		expect(result).toStrictEqual([1, 2, 3]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});

	it("should returns empty array", () => {
		const arr: number[] = [];
		const result = DArray.flatMap(arr, (element) => [element, element]);

		expect(result).toStrictEqual([]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});

	it("use in pipe", () => {
		const arr = [1, 2, 3, 4];
		const result = pipe(
			arr,
			DArray.filter((element) => element % 2 === 0),
			DArray.flatMap((element) => [element, element * 10]),
			DArray.map((element) => element + 1),
		);

		expect(result).toStrictEqual([3, 21, 5, 41]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});

	it("use in complex pipe", () => {
		const users = [
			{
				id: 1,
				name: "Alice",
				scores: [85, 90, 78],
			},
			{
				id: 2,
				name: "Bob",
				scores: [92],
			},
			{
				id: 3,
				name: "Charlie",
				scores: [88, 95],
			},
		];

		const result = pipe(
			users,
			DArray.flatMap(
				innerPipe(
					(user) => user.scores,
					DArray.filter((score) => score >= 85),
					DArray.map((score) => DNumber.multiply(score, 1.1)),
				),
			),
			DArray.sort((first, second) => first - second),
			DArray.map((score) => DNumber.round(score)),
		);

		expect(result).toStrictEqual([94, 97, 99, 101, 105]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});
});
