import { hasValue, theValue } from "@scripts/common/theValue";

describe("theValue", () => {
	it("theValue", () => {
		expect(theValue("test"))
			.toStrictEqual({ value: "test" });
	});

	it("hasValue", () => {
		expect(hasValue(null)).toBe(false);

		expect(hasValue({ value: "test" })).toBe(true);
	});
});
