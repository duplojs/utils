import { type ExpectType, pipe } from "@scripts/common";
import { DObject } from "@scripts";

describe("assign", () => {
	it("basic usage", () => {
		const result = DObject.assign(
			{
				prop1: "test",
				prop2: 1,
			},
			{
				prop2: "toto",
				prop3: 1,
			},
		);

		expect(result).toStrictEqual({
			prop1: "test",
			prop2: "toto",
			prop3: 1,
		});

		type check = ExpectType<
			typeof result,
			{
				prop1: string;
				prop2: string;
				prop3: number;
			},
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			{
				prop1: "test",
				prop2: 1,
			},
			DObject.assign({
				prop2: "toto",
				prop3: 1,
			}),
		);

		expect(result).toStrictEqual({
			prop1: "test",
			prop2: "toto",
			prop3: 1,
		});

		type check = ExpectType<
			typeof result,
			{
				prop1: string;
				prop2: string;
				prop3: number;
			},
			"strict"
		>;
	});
});

