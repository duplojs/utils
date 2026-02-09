import { DGenerator, DPattern, DString, innerPipe, pipe, when, type ExpectType } from "@scripts";

describe("group", () => {
	it("groups values by key and appends values for existing keys", () => {
		const result = DGenerator.group(
			[1, 2, 3, 4] as const,
			(element, { index, output }) => element % 2 === 0
				? output("even", {
					element,
					index,
				})
				: output("odd", {
					element,
				}),
		);

		expect(result).toStrictEqual(
			{
				odd: [
					{
						element: 1,
					},
					{
						element: 3,
					},
				],
				even: [
					{
						element: 2,
						index: 1,
					},
					{
						element: 4,
						index: 3,
					},
				],
			},
		);

		type check = ExpectType<
			typeof result,
			{
				even?: {
					element: 1 | 2 | 3 | 4;
					index: number;
				}[] | undefined;
				odd?: {
					element: 1 | 2 | 3 | 4;
				}[] | undefined;
			},
			"strict"
		>;
	});

	it("returns an empty map when iterator is empty", () => {
		const result = DGenerator.group(
			[] as const,
			(element, { output }) => output("empty", element),
		);

		expect(result).toStrictEqual({});

		type check = ExpectType<
			typeof result,
			{
				empty?: never[] | undefined;
			},
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			new Set(["apple", "fig", "pear", "peach"] as const),
			DGenerator.group((element) => DString.startsWith(element, "p")
				? DGenerator.groupOutput("good", element)
				: DGenerator.groupOutput("sad", element)),
		);

		expect(result).toStrictEqual(
			{
				good: ["pear", "peach"],
				sad: ["apple", "fig"],
			},
		);

		type check = ExpectType<
			typeof result,
			{
				good?: ("pear" | "peach")[] | undefined;
				sad?: ("apple" | "fig")[] | undefined;
			},
			"strict"
		>;
	});

	it("curried groupOutput", () => {
		const result = pipe(
			new Set(["apple", "fig", "pear", "peach"] as const),
			DGenerator.group(
				innerPipe(
					DPattern.when(
						DString.startsWith("p"),
						DGenerator.groupOutput("good"),
					),
					DPattern.otherwise(DGenerator.groupOutput("sad")),
				),
			),
		);

		expect(result).toStrictEqual(
			{
				good: ["pear", "peach"],
				sad: ["apple", "fig"],
			},
		);
	});
});
