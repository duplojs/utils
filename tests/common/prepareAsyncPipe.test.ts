import { DString, type ExpectType, pipe, prepareAsyncPipe } from "@scripts";

describe("prepareAsyncPipe", () => {
	it("should prepare reusable synchronous and asynchronous steps once", async() => {
		let callCount = 0;
		const preparedPipe = prepareAsyncPipe<number>()(
			(value) => {
				callCount++;
				return value + 1;
			},
			async(value) => {
				callCount++;
				await Promise.resolve();
				return `value:${value}`;
			},
		);

		const firstResult = await preparedPipe(1);
		const secondResult = await preparedPipe(Promise.resolve(4));

		expect(firstResult).toBe("value:2");
		expect(secondResult).toBe("value:5");
		expect(callCount).toBe(4);

		type check = ExpectType<
			typeof firstResult,
			`value:${number}`,
			"strict"
		>;
	});

	it("should work as one asynchronous function in pipe", async() => {
		const preparedPipe = prepareAsyncPipe<number>()(
			(value) => Promise.resolve(value * 2),
			(value) => ({ value }),
		);
		const resultPromise = pipe(3, preparedPipe);
		const result = await resultPromise;

		expect(result).toStrictEqual({ value: 6 });
		type promiseCheck = ExpectType<
			typeof resultPromise,
			Promise<{ readonly value: number }>,
			"strict"
		>;
		type resultCheck = ExpectType<
			typeof result,
			{ readonly value: number },
			"strict"
		>;
	});

	it("should support fifteen prepared maybe-promise steps", async() => {
		const preparedPipe = prepareAsyncPipe<number>()(
			(value) => Promise.resolve(value + 1),
			(value) => value + 1,
			(value) => Promise.resolve(value + 1),
			(value) => value + 1,
			(value) => Promise.resolve(value + 1),
			(value) => value + 1,
			(value) => Promise.resolve(value + 1),
			(value) => value + 1,
			(value) => Promise.resolve(value + 1),
			(value) => value + 1,
			(value) => Promise.resolve(value + 1),
			(value) => value + 1,
			(value) => Promise.resolve(value + 1),
			(value) => value + 1,
			(value) => Promise.resolve(value + 1),
		);
		const result = await preparedPipe(Promise.resolve(0));

		expect(result).toBe(15);
		type check = ExpectType<typeof result, number, "strict">;
	});

	it("should preserve generic input-to-output inference across asynchronous executions", async() => {
		const preparedPipe: (input: number) => Promise<string> = prepareAsyncPipe()(
			DString.to,
		);
		const stringResult = await preparedPipe(1);

		expect(stringResult).toBe("1");
	});
});
