import { DGenerator, DString, pipe, type ExpectType } from "@scripts";

describe("asyncGroup", () => {
	it("groups values by key and appends values for existing keys", async() => {
		const input = (async function *() {
			yield await Promise.resolve(1 as const);
			yield 2 as const;
			yield 3 as const;
			yield 4 as const;
		})();

		const result = DGenerator.asyncGroup(
			input,
			(element, { index, output }) => element % 2 === 0
				? output("even", {
					element,
					index,
				})
				: output("odd", {
					element,
				}),
		);

		await expect(result).resolves.toStrictEqual(
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
			Promise<{
				even?: {
					element: 1 | 2 | 3 | 4;
					index: number;
				}[] | undefined;
				odd?: {
					element: 1 | 2 | 3 | 4;
				}[] | undefined;
			}>,
			"strict"
		>;
	});

	it("returns an empty object when async iterator is empty", async() => {
		const result = DGenerator.asyncGroup(
			(async function *() {})(),
			(element, { output }) => output("empty", element),
		);

		await expect(result).resolves.toStrictEqual({});

		type check = ExpectType<
			typeof result,
			Promise<{
				empty?: never[] | undefined;
			}>,
			"strict"
		>;
	});

	it("use in pipe", async() => {
		const result = pipe(
			["apple", "fig", "pear", "peach"] as const,
			DGenerator.asyncMap((element) => Promise.resolve(element)),
			DGenerator.asyncGroup((element) => DString.startsWith(element, "p")
				? DGenerator.groupOutput("good", element)
				: DGenerator.groupOutput("sad", element)),
		);

		await expect(result).resolves.toStrictEqual(
			{
				good: ["pear", "peach"],
				sad: ["apple", "fig"],
			},
		);

		type check = ExpectType<
			typeof result,
			Promise<{
				good?: ("pear" | "peach")[] | undefined;
				sad?: ("apple" | "fig")[] | undefined;
			}>,
			"strict"
		>;
	});
});
