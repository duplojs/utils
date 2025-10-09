import { DObject, pipe, type ExpectType } from "@scripts/index";

describe("transformProperty", () => {
	it("basic usage", () => {
		const result = DObject.transformProperty(
			{
				prop1: 1,
				prop2: "test",
				prop3: [],
			},
			"prop1",
			(value) => {
				type check = ExpectType<
					typeof value,
					number,
					"strict"
				>;

				return `toto-${value}`;
			},
		);

		expect(result).toStrictEqual({
			prop1: "toto-1",
			prop2: "test",
			prop3: [],
		});

		type check = ExpectType<
			typeof result,
			{
				prop1: string;
				prop2: string;
				prop3: never[];
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
			DObject.transformProperty(
				"prop1",
				(value) => {
				type check = ExpectType<
					typeof value,
					number,
					"strict"
				>;

				return `toto-${value}`;
				},
			),
		);

		expect(result).toStrictEqual({
			prop1: "toto-1",
			prop2: "test",
			prop3: [],
		});

		type check = ExpectType<
			typeof result,
			{
				prop1: string;
				prop2: string;
				prop3: never[];
			},
			"strict"
		>;
	});
});
