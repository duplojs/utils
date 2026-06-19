import { DString, type ExpectType, pipe, preparePipe, S } from "@scripts";

describe("preparePipe", () => {
	it("should prepare reusable synchronous steps once", () => {
		let callCount = 0;
		const preparedPipe = preparePipe<number>()(
			(value) => {
				callCount++;
				return value + 1;
			},
			(value) => {
				callCount++;
				return `value:${value}`;
			},
		);

		const firstResult = preparedPipe(1);
		const secondResult = preparedPipe(4);

		expect(firstResult).toBe("value:2");
		expect(secondResult).toBe("value:5");
		expect(callCount).toBe(4);

		type check = ExpectType<
			typeof firstResult,
			`value:${number}`,
			"strict"
		>;
	});

	it("should work as one function in pipe", () => {
		const preparedPipe = preparePipe<number>()(
			(value) => value * 2,
			(value) => ({ value }),
		);
		const result = pipe(3, preparedPipe);

		expect(result).toStrictEqual({ value: 6 });
		type check = ExpectType<
			typeof result,
			{ readonly value: number },
			"strict"
		>;
	});

	it("should support fifteen prepared steps", () => {
		const preparedPipe = preparePipe<number>()(
			(value) => value + 1,
			(value) => value + 1,
			(value) => value + 1,
			(value) => value + 1,
			(value) => value + 1,
			(value) => value + 1,
			(value) => value + 1,
			(value) => value + 1,
			(value) => value + 1,
			(value) => value + 1,
			(value) => value + 1,
			(value) => value + 1,
			(value) => value + 1,
			(value) => value + 1,
			(value) => value + 1,
		);
		const result = preparedPipe(0);

		expect(result).toBe(15);
		type check = ExpectType<typeof result, number, "strict">;
	});

	it("should preserve generic input-to-output inference across executions", () => {
		const preparedPipe: (input: number) => string = preparePipe()(
			DString.to,
		);
		const stringResult = preparedPipe(1);

		expect(stringResult).toBe("1");
	});
});
