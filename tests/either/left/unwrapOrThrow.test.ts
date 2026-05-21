import { DEither, type ExpectType, pipe } from "@scripts";

describe("unwrapLeftOrThrow", () => {
	it("returns wrapped value when input is left", () => {
		const value = DEither.unwrapLeftOrThrow(DEither.error(42 as number));

		expect(value).toBe(42);

		type check = ExpectType<
			typeof value,
			number,
			"strict"
		>;
	});

	it("throws NotLeftError when input is right", () => {
		const input = DEither.ok();

		expect(() => DEither.unwrapLeftOrThrow(input)).toThrow(DEither.NotLeftError);

		try {
			DEither.unwrapLeftOrThrow(input);
		} catch (error) {
			expect(error).toBeInstanceOf(DEither.NotLeftError);

			if (error instanceof DEither.NotLeftError) {
				expect(error.message).toBe("Value is not Left.");
				expect(error.value).toStrictEqual(input);
			}
		}
	});

	it("works in a pipe chain", () => {
		const value = pipe(
			DEither.error("ko" as string),
			DEither.unwrapLeftOrThrow,
		);

		expect(value).toBe("ko");

		type check = ExpectType<
			typeof value,
			string,
			"strict"
		>;
	});
});
