import { DObject, type ExpectType, pipe } from "@scripts";

describe("override", () => {
	it("basic usage", () => {
		const result = DObject.override(
			{
				prop1: "test",
				prop2: 1,
			},
			{
				prop2: 2,
			},
		);

		expect(result).toStrictEqual({
			prop1: "test",
			prop2: 2,
		});

		type check = ExpectType<
			typeof result,
			{
				prop1: string;
				prop2: number;
			},
			"strict"
		>;
	});

	it("use in pipe", () => {
		const input = {
			prop1: "test",
			prop2: 1,
		};

		const result = pipe(
			input,
			DObject.override({
				prop2: 2,
				prop1: undefined,
			}),
		);

		expect(result).toStrictEqual({
			prop1: "test",
			prop2: 2,
		});

		type check = ExpectType<
			typeof result,
			{
				prop1: string;
				prop2: number;
			},
			"strict"
		>;
	});
});

