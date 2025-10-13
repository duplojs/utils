import { addWrappedProperties, toWrappedValue, wrapValue } from "@scripts";

it("addWrappedProperties", () => {
	const fnc = () => 10 as const;

	const valueWithProperties = addWrappedProperties(
		toWrappedValue(10),
		({ wrappedValue }) => ({
			fnc,
			test: wrappedValue,
		}),
	);

	expect(valueWithProperties).toStrictEqual({
		fnc,
		test: {
			...wrapValue(10),
		},
		...wrapValue(10),
	});
});
