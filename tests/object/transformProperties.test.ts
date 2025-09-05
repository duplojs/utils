import { DArray, DObject, pipe, type ExpectType } from "@scripts/index";

describe("transformProperties", () => {
	it("basic usage", () => {
		const result = DObject.transformProperties(
			{
				prop1: 1,
				prop2: "test",
				prop3: [1] as const,
			},
			({ transformValue }) => transformValue("prop1", (value) => {
					type check = ExpectType<
						typeof value,
						number,
						"strict"
					>;

					return `wow${value}`;
			})
				.transformValue("prop3", DArray.shift),
		);

		expect(result).toStrictEqual({
			prop1: "wow1",
			prop2: "test",
			prop3: [],
		});

		type check = ExpectType<
			typeof result,
			{
				prop1: number;
				prop2: string;
				prop3: [];
			},
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			{
				prop1: 1,
				prop2: "test",
				prop3: [],
			},
			DObject.transformProperties(
				({ transformValue }) => transformValue("prop1", () => "wow"),
			),
		);

		expect(result).toStrictEqual({
			prop1: "wow",
			prop2: "test",
			prop3: [],
		});

		type check = ExpectType<
			typeof result,
			{
				prop1: string;
				prop3: never[];
				prop2: string;
			},
			"strict"
		>;
	});
});
