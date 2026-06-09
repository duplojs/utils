import { C, type ExpectType, pipe, unwrap } from "@scripts";

describe("divide", () => {
	it("divides a Number by a NotZero divisor directly", () => {
		const value = C.Number.createOrThrow(4);
		const divisor = C.NotZero.createOrThrow(2);

		const result = C.divide(value, divisor);

		type check = ExpectType<
			typeof result,
			C.Number,
			"strict"
		>;

		expect(unwrap(result)).toBe(2);
	});

	it("supports pipe with a NotZero divisor", () => {
		const value = C.Number.createOrThrow(20);
		const divisor = C.NotZero.createOrThrow(5);

		const result = pipe(
			value,
			C.divide(divisor),
		);

		type check = ExpectType<
			typeof result,
			C.Number,
			"strict"
		>;

		expect(unwrap(result)).toBe(4);
	});

	it("supports negative NotZero divisors", () => {
		const value = C.Number.createOrThrow(6);
		const divisor = C.NotZero.createOrThrow(-2);

		const result = C.divide(value, divisor);

		type check = ExpectType<
			typeof result,
			C.Number,
			"strict"
		>;

		expect(unwrap(result)).toBe(-3);
	});
});
