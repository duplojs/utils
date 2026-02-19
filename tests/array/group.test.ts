import { DArray, DPattern, innerPipe, pipe, type ExpectType, DObject, type SimplifyTopLevel } from "@scripts";

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
				readonly cher?: readonly [typeof input[2], ...typeof input[2][]];
				readonly pasCher?: readonly [
					| typeof input[0]
					| typeof input[1],
					...(
						| typeof input[0]
						| typeof input[1]
					)[],
				];
			},
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			input,
			DArray.group(
				innerPipe(
					DPattern.when(
						DObject.discriminate("type", "book"),
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
				readonly book?: readonly [
					typeof input[1],
					...(typeof input[1])[],
				] | undefined;
				readonly other?: readonly [
					(typeof input[0] | typeof input[2]),
					...((typeof input[0] | typeof input[2]))[],
				] | undefined;
			},
			"strict"
		>;
	});
});
