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

it("should infer a promise unioned with a synchronous result", async() => {
	const input = 20 as number;
	const preparedPipe = asyncInnerPipe(
		(value: number) => value === 20 ? Promise.resolve("promise") : value,
		(value) => value,
	);
	const result = preparedPipe(Promise.resolve(input));

	expect(await result).toBe("promise");

	type check = ExpectType<
		typeof result,
		Promise<string | number>,
		"strict"
	>;
});
