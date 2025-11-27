import { DObject, pipe, type ExpectType } from "@scripts";

describe("omit", () => {
	it("omit with array key", () => {
		const result = DObject.omit(
			{
				prop1: "test",
				prop2: 1,
			},
			["prop1"],
		);

		expect(result).toStrictEqual({
			prop2: 1,
		});

		type check = ExpectType<
			typeof result,
			{
				prop2: number;
			},
			"strict"
		>;
	});

	it("omit with object", () => {
		const result = DObject.omit(
			{
				prop1: "test",
				prop2: 1,
				prop3: [1, "test"],
			},
			{
				prop1: undefined as true | undefined,
				prop2: true,
				prop3: undefined as boolean | undefined,
			},
		);

		expect(result).toStrictEqual({
			prop1: "test",
			prop3: [
				1,
				"test",
			],
		});

		type check = ExpectType<
			typeof result,
			{
				prop1?: string | undefined;
				prop3?: (string | number)[] | undefined;
			},
			"strict"
		>;
	});

	it("omit with object", () => {
		const result = pipe(
			{
				prop1: "test",
				prop2: 1,
				prop3: [1, "test"],
			},
			DObject.omit({
				prop1: undefined as true | undefined,
				prop2: true,
				prop3: undefined as boolean | undefined,
			}),
		);

		expect(result).toStrictEqual({
			prop1: "test",
			prop3: [
				1,
				"test",
			],
		});

		type check = ExpectType<
			typeof result,
			{
				prop1?: string | undefined;
				prop3?: (string | number)[] | undefined;
			},
			"strict"
		>;
	});
});
