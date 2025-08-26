import { isWrappedValue, wrapValue } from "@scripts/common/wrapValue";

describe("wrapValue", () => {
	it("wrapValue", () => {
		expect(wrapValue("test"))
			.toStrictEqual({ value: "test" });
	});

	it("isWrappedValue", () => {
		expect(isWrappedValue(null)).toBe(false);

		expect(isWrappedValue({ value: "test" })).toBe(true);
	});
});
