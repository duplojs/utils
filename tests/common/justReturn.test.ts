import { justReturn, pipe, type ExpectType } from "@scripts";

describe("justReturn", () => {
	it("returns value when invoked with input and value", () => {
		const value = Symbol("value");
		const result = justReturn("anything", value);

		expect(result).toBe(value);

		type check = ExpectType<
			typeof result,
			symbol,
			"strict"
		>;
	});

	it("works inside a pipe", () => {
		const result = pipe(
			"start",
			justReturn(10),
		);

		expect(result).toBe(10);

		type check = ExpectType<
			typeof result,
			10,
			"strict"
		>;
	});
});
