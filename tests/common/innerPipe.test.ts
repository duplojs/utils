import { type ExpectType, innerPipe, pipe } from "@scripts/common";
import { DArray, DObject } from "@scripts/index";

it("innerPipe", () => {
	const result = pipe(
		{
			prop1: "test",
			prop2: 2,
		},
		innerPipe(
			(value) => {
				type check = ExpectType<
					typeof value,
					{
						prop1: string;
						prop2: number;
					},
					"strict"
				>;

				return value;
			},
			DObject.pick({
				prop1: true,
			}),
		),
		DObject.transformProperty("prop1", DArray.from),
		DObject.to({
			test1: (value) => pipe(
				value,
				(value) => {
				type check = ExpectType<
					typeof value,
					{
						prop1: string[];
					},
					"strict"
				>;

				return value;
				},
			),
		}),
	);

	type check = ExpectType<
		typeof result,
		{
			test1: {
				prop1: string[];
			};
		},
		"strict"
	>;

	expect(result).toStrictEqual({
		test1: {
			prop1: [
				"t",
				"e",
				"s",
				"t",
			],
		},
	});
});
