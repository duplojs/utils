import { asyncInnerPipe, asyncPipe, type ExpectType, promiseObject, DArray, DObject } from "@scripts";

it("asyncInnerPipe", async() => {
	const result = await asyncPipe(
		Promise.resolve({
			prop1: "test",
			prop2: 2,
		}),
		asyncInnerPipe(
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
			test1: (value) => asyncPipe(
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
		promiseObject,
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
