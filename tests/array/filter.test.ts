import { DArray, pipe, type ExpectType } from "@scripts";

describe("filter", () => {
	it("filters elements based on predicate", () => {
		const input = [1, 2, 3, 4];
		const result = DArray.filter(input, (value) => value % 2 === 0);

		expect(result).toEqual([2, 4]);
	});

	it("passes index to predicate", () => {
		const input = ["a", "b", "c"];
		const seenIndexes: number[] = [];

		const result = DArray.filter(
			input,
			(__, { index }) => {
				seenIndexes.push(index);
				return index !== 1;
			},
		);

		expect(seenIndexes).toEqual([0, 1, 2]);
		expect(result).toEqual(["a", "c"]);
	});

	it("passes self to predicate", () => {
		const input = [10, 20, 30];
		const arrays: (typeof input)[] = [];

		const result = DArray.filter(
			input,
			(value, { self }) => {
				arrays.push(self);
				return self.indexOf(value) % 2 === 0;
			},
		);

		expect(arrays.every((arr) => arr === input)).toBe(true);
		expect(result).toEqual([10, 30]);
	});

	it("supports type guard predicates", () => {
		const input = ["a", 1, "b", 2] as const;
		const result = DArray.filter(
			input,
			(value) => typeof value === "number",
		);

		expect(result).toEqual([1, 2]);

		type check = ExpectType<typeof result, (1 | 2)[], "strict">;
	});

	it("use in pipe", () => {
		const result = pipe(
			["a", 1, "b", 2] as const,
			DArray.filter((value) => typeof value === "string"),
		);

		expect(result).toEqual(["a", "b"]);

		type check = ExpectType<typeof result, ("a" | "b")[], "strict">;
	});
});
