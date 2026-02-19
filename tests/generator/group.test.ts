import { DGenerator, DPattern, DString, innerPipe, pipe, when, type ExpectType, type SimplifyType } from "@scripts";

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

		// DEFEAT
		type check = ExpectType<
			typeof result,
			{
				readonly even?: readonly [
					{
						element: 1 | 2 | 3 | 4;
						index: number;
					},
					...({
						element: 1 | 2 | 3 | 4;
						index: number;
					})[],
				] | undefined;
				readonly odd?: readonly [
					{
						element: 1 | 2 | 3 | 4;
					},
					...({
						element: 1 | 2 | 3 | 4;
					})[],
				] | undefined;
			},
			"flexible"
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
				readonly empty?: readonly [never, ...never[]] | undefined;
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
				readonly good?: readonly ["pear" | "peach", ...("pear" | "peach")[]] | undefined;
				readonly sad?: readonly ["apple" | "fig", ...("apple" | "fig")[]] | undefined;
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
