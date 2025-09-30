import { DArray, DPattern, innerPipe, pipe, type ExpectType } from "@scripts/index";

describe("group", () => {
	const input = [
		{
			type: "product",
			name: "superName",
			size: 12,
		},
		{
			type: "book",
			title: "bou",
			pageQuantity: 200,
		},
		{
			type: "care",
			model: "v12",
			wheel: 5,
		},
	] as const;

	it("create element in array", () => {
		const result = DArray.group(
			input,
			(element, { output }) => element.type === "care"
				? output("cher", element)
				: output("pasCher", element),
		);

		expect(result).toStrictEqual({
			cher: [
				{
					model: "v12",
					type: "care",
					wheel: 5,
				},
			],
			pasCher: [
				{
					name: "superName",
					size: 12,
					type: "product",
				},
				{
					pageQuantity: 200,
					title: "bou",
					type: "book",
				},
			],
		});

		type check = ExpectType<
			typeof result,
			{
				cher?: {
					readonly type: "care";
					readonly model: "v12";
					readonly wheel: 5;
				}[];
				pasCher?: ({
					readonly type: "product";
					readonly name: "superName";
					readonly size: 12;
				} | {
					readonly type: "book";
					readonly title: "bou";
					readonly pageQuantity: 200;
				})[];
			},
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			input,
			DArray.group(
				innerPipe(
					DPattern.match(
						{ type: "book" },
						DArray.groupOutput("book"),
					),
					DPattern.otherwise(DArray.groupOutput("other")),
				),
			),
		);

		expect(result).toStrictEqual({
			book: [
				{
					pageQuantity: 200,
					title: "bou",
					type: "book",
				},
			],
			other: [
				{
					name: "superName",
					size: 12,
					type: "product",
				},
				{
					model: "v12",
					type: "care",
					wheel: 5,
				},
			],
		});

		type check = ExpectType<
			typeof result,
			{
				book?: {
					readonly type: "book";
					readonly title: "bou";
					readonly pageQuantity: 200;
				}[];
				other?: ({
					readonly type: "product";
					readonly name: "superName";
					readonly size: 12;
				} | {
					readonly type: "care";
					readonly model: "v12";
					readonly wheel: 5;
				})[];
			},
			"strict"
		>;
	});
});
