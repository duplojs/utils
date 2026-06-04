import { pipe, callThen, type ExpectType } from "@scripts";

describe("callThen", () => {
	it("applies the callback directly for a sync input", () => {
		const result = callThen(
			2 as const,
			(value) => value + 3,
		);

		expect(result).toBe(5);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("returns the callback promise for a sync input", async() => {
		const result = callThen(
			"duplo",
			async(value) => Promise.resolve(value.toUpperCase()),
		);

		await expect(result).resolves.toBe("DUPLO");

		type check = ExpectType<
			typeof result,
			Promise<string>,
			"strict"
		>;
	});

	it("waits for a promise input before applying the callback", async() => {
		const result = callThen(
			Promise.resolve(4 as const),
			(value) => ({
				total: value * 2,
			}),
		);

		await expect(result).resolves.toStrictEqual({
			total: 8,
		});

		type check = ExpectType<
			typeof result,
			Promise<{
				total: number;
			}>,
			"strict"
		>;
	});

	it("flattens the callback promise when the input is already a promise", async() => {
		const result = callThen(
			Promise.resolve("done" as const),
			(value) => Promise.resolve(`${value}!` as const),
		);

		await expect(result).resolves.toBe("done!");

		type check = ExpectType<
			typeof result,
			Promise<"done!">,
			"strict"
		>;
	});

	it("propagates rejections from the promise input", async() => {
		const error = new Error("boom");

		const result = callThen(
			Promise.reject(error),
			(value: never) => value,
		);

		await expect(result).rejects.toBe(error);
	});

	it("catches errors thrown by the callback for a sync input", () => {
		const error = new Error("boom");

		const result = callThen(
			"value",
			() => {
				throw error;
			},
			(caughtError) => caughtError,
		);

		expect(result).toBe(error);

		type check = ExpectType<
			typeof result,
			unknown,
			"strict"
		>;
	});

	it("catches rejections from a promise input", async() => {
		const error = new Error("boom");

		const result = callThen(
			Promise.reject(error),
			(value: never) => value,
			(caughtError) => caughtError,
		);

		await expect(result).resolves.toBe(error);

		type check = ExpectType<
			typeof result,
			Promise<unknown>,
			"strict"
		>;
	});

	it("works in pipe", () => {
		const result = pipe(
			5,
			(value) => callThen(
				value,
				(input) => input * 4,
			),
		);

		expect(result).toBe(20);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});
});
