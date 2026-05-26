import { DEither, type ExpectType, pipe } from "@scripts";

describe("unwrapLeft", () => {
	it("returns unwrapped value when input is left", () => {
		const value = DEither.unwrapLeft(DEither.error(42 as number));

		expect(value).toBe(42);

		type check = ExpectType<
			typeof value,
			number,
			"strict"
		>;
	});

	it("returns input unchanged when input is right", () => {
		const input = DEither.ok();

		const value = DEither.unwrapLeft(input);

		expect(value).toStrictEqual(input);

		type check = ExpectType<
			typeof value,
			DEither.Ok,
			"strict"
		>;
	});

	it("works in a pipe chain", () => {
		const value = pipe(
			DEither.error("ko" as string),
			DEither.unwrapLeft,
		);

		expect(value).toBe("ko");

		type check = ExpectType<
			typeof value,
			string,
			"strict"
		>;
	});
});
