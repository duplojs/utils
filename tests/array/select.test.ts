import { DArray, DObject, DString, pipe, type ExpectType } from "@scripts";

describe("select", () => {
	it("selects and maps elements", () => {
		const input = [1, 2, 3, 4];

		const result = DArray.select(
			input,
			({ element, skip, select }) => element % 2 === 0
				? select(element * 10)
				: skip(),
		);

		expect(result).toEqual([20, 40]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});

	it("provides index and self references", () => {
		const input = ["a", "b", "c"] as const;
		const indexes: number[] = [];
		const selfRefs: typeof input[] = [];

		const result = DArray.select(
			input,
			({ element, index, self, select }) => {
				indexes.push(index);
				selfRefs.push(self);
				return select(`${element}${index}`);
			},
		);

		expect(indexes).toEqual([0, 1, 2]);
		expect(selfRefs.every((ref) => ref === input)).toBe(true);
		expect(result).toEqual(["a0", "b1", "c2"]);

		type check = ExpectType<
			typeof result,
			(`a${number}` | `b${number}` | `c${number}`)[],
			"strict"
		>;
	});

	it("use in pipe (curried)", () => {
		const result = pipe(
			["a", "bb", "ccc"],
			DArray.select(({ element, skip, select }) => element.length > 1
				? select(element.length)
				: skip()),
		);

		expect(result).toEqual([2, 3]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});

	it("infers literal union output", () => {
		const input = ["a", 1, "b", 2] as const;

		const result = DArray.select(
			input,
			({ element, skip, select }) => typeof element === "number"
				? select(`n${element}`)
				: skip(),
		);

		expect(result).toEqual(["n1", "n2"]);

		type check = ExpectType<
			typeof result,
			("n1" | "n2")[],
			"strict"
		>;
	});

	it("discriminate bad type", () => {
		const input: {
			prop?: number;
			type: string;
		}[] = [
			{
				prop: 12,
				type: "someType",
			},
			{
				prop: undefined,
				type: "type",
			},
			{ type: "type" },
			{
				prop: 5,
				type: "someType",
			},
		];

		const result = DArray.select(
			input,
			({ element, select, skip }) => DObject.hasKeys(element, "prop") && DString.startsWith(element.type, "some")
				? select({
					...element,
					type: element.type,
				})
				: skip(),
		);

		expect(result).toStrictEqual([
			{
				prop: 12,
				type: "someType",
			},
			{
				prop: 5,
				type: "someType",
			},
		]);

		type check = ExpectType<
			typeof result,
			{
				type: `some${string}`;
				prop: number;
			}[],
			"strict"
		>;
	});
});

