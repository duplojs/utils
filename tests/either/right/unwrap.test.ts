import { DEither, type ExpectType, pipe } from "@scripts";

describe("unwrapRight", () => {
	it("returns unwrapped value when input is right", () => {
		const value = DEither.unwrapRight(DEither.success(42 as number));

		expect(value).toBe(42);

		type check = ExpectType<
			typeof value,
			number,
			"strict"
		>;
	});

	it("returns input unchanged when input is left", () => {
		const input = DEither.fail();

		const value = DEither.unwrapRight(input);

		expect(value).toStrictEqual(input);

		type check = ExpectType<
			typeof value,
			DEither.Fail,
			"strict"
		>;
	});

	it("works in a pipe chain", () => {
		const value = pipe(
			DEither.result("result", "ok" as string),
			DEither.unwrapRight,
		);

		expect(value).toBe("ok");

		type check = ExpectType<
			typeof value,
			string,
			"strict"
		>;
	});
});
