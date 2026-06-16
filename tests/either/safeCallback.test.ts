import { type ExpectType, DEither, pipe } from "@scripts";

describe("safeCallback", () => {
	it("return value when callback succeeds", () => {
		const result = DEither.safeCallback(() => 42);

		expect(result).toStrictEqual(DEither.right("safe-callback-success", 42));

		type check = ExpectType<
			typeof result,
			DEither.SafeCallbackSuccess<number> | DEither.SafeCallbackError,
			"strict"
		>;
	});

	it("return callback error when callback throws", () => {
		const error = new Error("boom");

		const result = DEither.safeCallback(() => {
			throw error;
		});

		expect(result).toStrictEqual(DEither.left("safe-callback-error", error));

		type check = ExpectType<
			typeof result,
			DEither.SafeCallbackError,
			"strict"
		>;
	});

	it("return value when promise callback resolves", async() => {
		const result = DEither.safeCallback(
			() => Promise.resolve(42 as const),
		);

		expect(await result).toStrictEqual(DEither.right("safe-callback-success", 42));

		type check = ExpectType<
			typeof result,
			| Promise<
				| DEither.SafeCallbackSuccess<42>
				| DEither.SafeCallbackError
			>
			| DEither.SafeCallbackError,
			"strict"
		>;
	});

	it("return callback error when promise callback rejects", async() => {
		const error = new Error("boom");

		const result = DEither.safeCallback(
			() => Promise.reject(error),
		);

		expect(await result).toStrictEqual(DEither.left("safe-callback-error", error));

		type check = ExpectType<
			typeof result,
			| Promise<DEither.SafeCallbackError>
			| DEither.SafeCallbackError,
			"strict"
		>;
	});

	it("return callback error when async callback throws", async() => {
		const error = new Error("boom");

		const result = DEither.safeCallback(
			async() => {
				await Promise.resolve();
				throw error;
			},
		);

		expect(await result).toStrictEqual(DEither.left("safe-callback-error", error));

		type check = ExpectType<
			typeof result,
			| Promise<DEither.SafeCallbackError>
			| DEither.SafeCallbackError,
			"strict"
		>;
	});

	it("return either when promise callback resolves an either", async() => {
		const either = DEither.right("example", 42);

		const result = DEither.safeCallback(
			() => Promise.resolve(either),
		);

		expect(await result).toBe(either);

		type check = ExpectType<
			typeof result,
			| Promise<
				| DEither.Right<"example", 42>
				| DEither.SafeCallbackError
			>
			| DEither.SafeCallbackError,
			"strict"
		>;
	});

	it("return left as-is when promise callback resolves a left", async() => {
		const either = DEither.left("example", 42);

		const result = DEither.safeCallback(
			() => Promise.resolve(either),
		);

		expect(await result).toBe(either);

		type check = ExpectType<
			typeof result,
			| Promise<
				| DEither.Left<"example", 42>
				| DEither.SafeCallbackError
			>
			| DEither.SafeCallbackError,
			"strict"
		>;
	});

	it("return either when callback returns an either", () => {
		const either = DEither.left("example", 42);
		const result = DEither.safeCallback(() => either);

		expect(result).toBe(either);

		type check = ExpectType<
			typeof result,
			DEither.Left<"example", 42> | DEither.SafeCallbackError,
			"strict"
		>;
	});

	it("return value when callback return void or any values", () => {
		const result = DEither.safeCallback(() => {
			if (3 > 4) {
				return "toto";
			}
			return;
		});
		expect(result).toStrictEqual(DEither.right("safe-callback-success", undefined));

		type check = ExpectType<
			typeof result,
			DEither.SafeCallbackSuccess<undefined>
			| DEither.SafeCallbackSuccess<"toto">
			| DEither.SafeCallbackError,
			"strict"
		>;
	});

	it("works with pipe", () => {
		const result = pipe(
			() => 42,
			DEither.safeCallback,
		);

		expect(result).toStrictEqual(DEither.right("safe-callback-success", 42));

		type check = ExpectType<
			typeof result,
			DEither.SafeCallbackSuccess<number> | DEither.SafeCallbackError,
			"strict"
		>;
	});

	it("works with pipe when callback returns a rejected promise", async() => {
		const error = new Error("boom");

		const result = pipe(
			() => Promise.reject(error),
			DEither.safeCallback,
		);

		expect(await result).toStrictEqual(DEither.left("safe-callback-error", error));

		type check = ExpectType<
			typeof result,
			| Promise<DEither.SafeCallbackError>
			| DEither.SafeCallbackError,
			"strict"
		>;
	});
});
