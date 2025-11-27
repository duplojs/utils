import { DArray, DObject, type ExpectType, innerPipe, pipe } from "@scripts";

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
			test1: innerPipe(
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
		DObject.transformProperties({
			test1: DObject.transformProperties({
				prop1: innerPipe(
					(value) => {
						type check = ExpectType<
							typeof value,
							string[],
							"strict"
						>;

						return DArray.first(value);
					},
				),
			}),
		}),
	);

	type check = ExpectType<
		typeof result,
		{
			test1: {
				prop1: string | undefined;
			};
		},
		"strict"
	>;

	expect(result).toStrictEqual({
		test1: {
			prop1: "t",
		},
	});
});
