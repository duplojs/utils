import { DEither, type ExpectType, pipe } from "@scripts";

describe("unwrapRightOrThrow", () => {
	it("returns wrapped value when input is right", () => {
		const value = DEither.unwrapRightOrThrow(DEither.success(42 as number));

		expect(value).toBe(42);

		type check = ExpectType<
			typeof value,
			number,
			"strict"
		>;
	});

	it("throws NotRightError when input is left", () => {
		const input = DEither.fail();

		expect(() => DEither.unwrapRightOrThrow(input)).toThrow(DEither.NotRightError);

		try {
			DEither.unwrapRightOrThrow(input);
		} catch (error) {
			expect(error).toBeInstanceOf(DEither.NotRightError);

			if (error instanceof DEither.NotRightError) {
				expect(error.message).toBe("Value is not Right.");
				expect(error.value).toStrictEqual(input);
			}
		}
	});

	it("works in a pipe chain", () => {
		const value = pipe(
			DEither.result("result", "ok" as string),
			DEither.unwrapRightOrThrow,
		);

		expect(value).toBe("ok");

		type check = ExpectType<
			typeof value,
			string,
			"strict"
		>;
	});
});
