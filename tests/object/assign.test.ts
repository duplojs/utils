import { assign } from "@scripts/object";

it("assign", () => {
	const result = assign(
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
});
