import { addWrappedProperties, toWrappedValue } from "@scripts/common";

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
			value: 10,
		},
		value: 10,
	});
});
