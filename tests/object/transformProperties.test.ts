import { DArray, DObject, pipe, type ExpectType } from "@scripts";

describe("transformProperties", () => {
	it("basic usage", () => {
		const result = DObject.transformProperties(
			{
				prop1: 1,
				prop2: "test",
				prop3: [1, 2] as const,
			},
			{
				prop1: (value) => {
					type check = ExpectType<
						typeof value,
						number,
						"strict"
					>;

					return `wow${value}`;
				},
				prop3: DArray.shift,
				prop2: undefined,
			},
		);

		expect(result).toStrictEqual({
			prop1: "wow1",
			prop2: "test",
			prop3: [2],
		});

		type check = ExpectType<
			typeof result,
			{
				prop1: string;
				prop2: string;
				prop3: [2];
			},
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			{
				prop1: 1,
				prop2: "test",
				prop3: [1, 2] as const,
			},
			DObject.transformProperties({
				prop1: () => "wow",
				prop3: true ? DArray.shift : undefined,
			}),
		);

		expect(result).toStrictEqual({
			prop1: "wow",
			prop2: "test",
			prop3: [2],
		});

		type check = ExpectType<
			typeof result,
			{
				prop1: string;
				prop3: readonly [1, 2] | [2];
				prop2: string;
			},
			"strict"
		>;
	});
});
