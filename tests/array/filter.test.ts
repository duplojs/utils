import { DArray, pipe, type ExpectType } from "@scripts";

describe("filter", () => {
	it("filters elements based on predicate", () => {
		const input = [1, 2, 3, 4];
		const result = DArray.filter(input, (value) => value % 2 === 0);

		expect(result).toEqual([2, 4]);
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
			DArray.filter((value, { index }) => typeof value === "string"),
		);

		expect(result).toEqual(["a", "b"]);

		type check = ExpectType<typeof result, ("a" | "b")[], "strict">;
	});
});
