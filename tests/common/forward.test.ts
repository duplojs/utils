import { type ExpectType, forward } from "@scripts";

it("forward", () => {
	const result = forward(1);

	expect(result).toBe(1);

	type Check = ExpectType<
		typeof result,
		1,
		"strict"
	>;
});
