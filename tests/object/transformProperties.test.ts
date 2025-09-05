import { DObject, pipe, type ExpectType } from "@scripts/index";

describe("transformProperties", () => {
	it("basic usage", () => {
		const result = DObject.transformProperties(
			{
				prop1: 1,
				prop2: "test",
				prop3: [],
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
				prop3: undefined,
			},
		);

		expect(result).toStrictEqual({
			prop1: "wow1",
			prop2: "test",
			prop3: undefined,
		});

		type check = ExpectType<
			typeof result,
			{
				prop1: string;
				prop3: undefined;
				prop2: string;
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
			DObject.transformProperties({
				prop1: () => "wow",
			}),
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
