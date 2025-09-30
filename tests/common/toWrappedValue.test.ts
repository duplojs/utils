import { type ExpectType, toWrappedValue, type WrappedValue, wrapValue } from "@scripts/common";

it("toWrappedValue", () => {
	const result1 = toWrappedValue(wrapValue(10));
	expect(result1).toStrictEqual(wrapValue(10));

	type check1 = ExpectType<
		typeof result1,
		WrappedValue<10>,
		"strict"
	>;

	const result2 = toWrappedValue(10);
	expect(result2).toStrictEqual(wrapValue(10));

	type check2 = ExpectType<
		typeof result2,
		WrappedValue<10>,
		"strict"
	>;
});
