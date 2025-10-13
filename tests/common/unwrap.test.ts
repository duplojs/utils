import { unwrap, wrapValue, type ExpectType } from "@scripts";

describe("unwrap", () => {
	it("embedded value", () => {
		const embeddedValue = unwrap(wrapValue(1));

		expect(embeddedValue).toBe(1);

		type check = ExpectType<
			typeof embeddedValue,
			1,
			"strict"
		>;
	});

	it("value", () => {
		const embeddedValue = unwrap("test");

		expect(embeddedValue).toBe("test");

		type check = ExpectType<
			typeof embeddedValue,
			"test",
			"strict"
		>;
	});
});

