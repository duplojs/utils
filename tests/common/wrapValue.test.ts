import { isWrappedValue, keyWrappedValue, wrapValue } from "@scripts/common/wrapValue";

describe("wrapValue", () => {
	it("wrapValue", () => {
		expect(wrapValue("test"))
			.toStrictEqual({ [keyWrappedValue]: "test" });
	});

	it("isWrappedValue", () => {
		expect(isWrappedValue(null)).toBe(false);

		expect(isWrappedValue(wrapValue("test"))).toBe(true);
	});
});
