import { DArray, type ExpectType, pipe, innerPipe, DString, DNumber, DObject } from "@scripts";

describe("map", () => {
	it("map on simple array", () => {
		const arr = [1, 2, 3];
		const result = DArray.map(arr, (item) => item * 2);
		expect(result).toEqual([2, 4, 6]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});

	it("map with params", () => {
		const arr = ["a", "b", "c"];
		const result = DArray.map(arr, (item, { index }) => `${item}${index}`);
		expect(result).toEqual(["a0", "b1", "c2"]);

		type check = ExpectType<
			typeof result,
			string[],
			"strict"
		>;
	});

	it("provides self reference equal to input", () => {
		const arr = ["x", "y", "z"];
		const selfRefs: typeof arr[] = [];

		const result = DArray.map(arr, (item, { self }) => {
			selfRefs.push(self);
			return item.toUpperCase();
		});

		expect(selfRefs.every((ref) => ref === arr)).toBe(true);
		expect(result).toEqual(["X", "Y", "Z"]);
	});

	it("works with pipe (curried)", () => {
		const arr = [1, 2, 3];
		const result = pipe(
			arr,
			DArray.map((item) => item + 1),
		);
		expect(result).toEqual([2, 3, 4]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});

	it("preserves max elements constraint", () => {
		const arr = DArray.withMaxElements(["alpha", "beta"], 5);

		const result = DArray.map(arr, (item) => item.length);

		expect(result).toEqual([5, 4]);

		type check = ExpectType<
			typeof result,
			number[] & DArray.MaxElements<5>,
			"strict"
		>;
	});

	it("preserves max elements constraint in pipe", () => {
		const arr = DArray.withMaxElements(["alpha", "beta"], 5);

		const result = pipe(
			arr,
			DArray.map((item) => item.length),
		);

		expect(result).toEqual([5, 4]);

		type check = ExpectType<
			typeof result,
			number[] & DArray.MaxElements<5>,
			"strict"
		>;
	});

	it("works with complex pipe", () => {
		const arr = [
			{
				id: 1,
				name: "alice",
			},
			{
				id: 2,
				name: "bob",
			},
			{
				id: 3,
				name: "charlie",
			},
		];
		const result = pipe(
			arr,
			DArray.map(
				innerPipe(
					DObject.transformProperties({
						id: DNumber.multiply(10),
						name: DString.capitalize,
					}),
					(user) => `${user.name} (${user.id})`,
				),
			),
		);
		expect(result).toEqual(["Alice (10)", "Bob (20)", "Charlie (30)"]);

		type check = ExpectType<
			typeof result,
			`${Capitalize<string>} (${number})`[],
			"strict"
		>;
	});
});
