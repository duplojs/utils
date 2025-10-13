import { createAsyncRetry, useAsyncRetry, type ExpectType } from "@scripts";

describe("useAsyncRetry", () => {
	it("success retry", async() => {
		let acc = 0;
		const fnc = vi.fn(() => Promise.resolve(++acc));

		const result = await useAsyncRetry(
			fnc,
			(result) => result < 5,
			{ maxRetry: 10 },
		);

		expect(result).toBe(5);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("max retry", async() => {
		let acc = 0;
		const fnc = vi.fn(() => Promise.resolve(++acc));

		const result = await useAsyncRetry(
			fnc,
			(result) => result < 5,
			{ maxRetry: 4 },
		);

		expect(result).toBe(4);
	});

	it("log and time to sleep", async() => {
		console.log = vi.fn();
		let acc = 0;
		const fnc = vi.fn((arg: boolean) => arg ? Promise.resolve(++acc) : Promise.reject(new Error()));

		const result = createAsyncRetry(
			fnc,
			(result) => result < 2,
			{
				maxRetry: Infinity,
				timeToSleep: 1,
				log: true,
			},
		);

		await expect(result(true)).resolves.toBe(2);
		expect(console.log).toHaveBeenCalledOnce();
	});
});

