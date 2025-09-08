import { type ExpectType, toString } from "@scripts/common";

it("toString", () => {
	const result = toString("null");

	expect(result).toBe("null");

	type check = ExpectType<
		typeof result,
		"null",
		"strict"
	>;
});
