import { type ExpectType } from "@scripts/common/types/expectType";
import { unwrap } from "@scripts/common/unwrap";
describe("unwrap", () => {
	it("embedded value", () => {
		const embeddedValue = unwrap({ value: 1 });

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

