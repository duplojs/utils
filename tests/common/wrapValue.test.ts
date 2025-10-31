import { isRuntimeWrappedValueKey, isWrappedValue, keyWrappedValue, wrapValue } from "@scripts";

describe("wrapValue", () => {
	it("wrapValue", () => {
		expect(wrapValue("test"))
			.toStrictEqual({ [keyWrappedValue]: "test" });
	});

	it("isWrappedValue", () => {
		expect(isWrappedValue(null)).toBe(false);

		expect(isWrappedValue(wrapValue("test"))).toBe(true);
	});

	it("isRuntimeWrappedValueKey", () => {
		expect(isRuntimeWrappedValueKey(keyWrappedValue)).toBe(true);

		expect(isRuntimeWrappedValueKey("")).toBe(false);
	});
});
