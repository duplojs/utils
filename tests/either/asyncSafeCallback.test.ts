import { type ExpectType, DEither, pipe } from "@scripts";

describe("asyncSafeCallback", () => {
	it("return value when callback succeeds", async() => {
		const result = DEither.asyncSafeCallback(() => 42);

		await expect(result).resolves.toStrictEqual(DEither.right("safe-callback-success", 42));

		type check = ExpectType<
			typeof result,
			Promise<DEither.SafeCallbackSuccess<number> | DEither.SafeCallbackError>,
			"strict"
		>;
	});

	it("return callback error when callback throws", async() => {
		const error = new Error("boom");

		const result = DEither.asyncSafeCallback(() => {
			throw error;
		});

		await expect(result).resolves.toStrictEqual(DEither.left("safe-callback-error", error));

		type check = ExpectType<
			typeof result,
			Promise<DEither.SafeCallbackError>,
			"strict"
		>;
	});

	it("return value when callback resolves", async() => {
		const result = DEither.asyncSafeCallback(
			() => Promise.resolve(42 as const),
		);

		await expect(result).resolves.toStrictEqual(DEither.right("safe-callback-success", 42));

		type check = ExpectType<
			typeof result,
			Promise<
				| DEither.SafeCallbackSuccess<42>
				| DEither.SafeCallbackError
			>,
			"strict"
		>;
	});

	it("return callback error when callback rejects", async() => {
		const error = new Error("boom");

		const result = DEither.asyncSafeCallback(
			() => Promise.reject(error),
		);

		await expect(result).resolves.toStrictEqual(DEither.left("safe-callback-error", error));

		type check = ExpectType<
			typeof result,
			Promise<DEither.SafeCallbackError>,
			"strict"
		>;
	});

	it("return either when callback returns an either", async() => {
		const either = DEither.left("example", 42);
		const result = DEither.asyncSafeCallback(() => either);

		await expect(result).resolves.toBe(either);

		type check = ExpectType<
			typeof result,
			Promise<DEither.Left<"example", 42> | DEither.SafeCallbackError>,
			"strict"
		>;
	});

	it("return either when callback resolves an either", async() => {
		const either = DEither.right("example", 42);

		const result = DEither.asyncSafeCallback(
			() => Promise.resolve(either),
		);

		await expect(result).resolves.toBe(either);

		type check = ExpectType<
			typeof result,
			Promise<
				| DEither.Right<"example", 42>
				| DEither.SafeCallbackError
			>,
			"strict"
		>;
	});

	it("return value when promise succeeds", async() => {
		const result = DEither.asyncSafeCallback(
			Promise.resolve("done" as const),
		);

		await expect(result).resolves.toStrictEqual(DEither.right("safe-callback-success", "done"));

		type check = ExpectType<
			typeof result,
			Promise<DEither.SafeCallbackSuccess<"done"> | DEither.SafeCallbackError>,
			"strict"
		>;
	});

	it("return callback error when promise rejects", async() => {
		const error = new Error("boom");

		const result = DEither.asyncSafeCallback(
			Promise.reject(error),
		);

		await expect(result).resolves.toStrictEqual(DEither.left("safe-callback-error", error));

		type check = ExpectType<
			typeof result,
			Promise<DEither.SafeCallbackError>,
			"strict"
		>;
	});

	it("return value when callback return void or any values", async() => {
		const result = DEither.asyncSafeCallback(() => {
			if (3 > 4) {
				return "toto";
			}
			return;
		});

		await expect(result).resolves.toStrictEqual(DEither.right("safe-callback-success", undefined));

		type check = ExpectType<
			typeof result,
			Promise<
				| DEither.SafeCallbackSuccess<undefined>
				| DEither.SafeCallbackSuccess<"toto">
				| DEither.SafeCallbackError
			>,
			"strict"
		>;
	});

	it("works with pipe", async() => {
		const result = pipe(
			() => 42,
			DEither.asyncSafeCallback,
		);

		await expect(result).resolves.toStrictEqual(DEither.right("safe-callback-success", 42));

		type check = ExpectType<
			typeof result,
			Promise<DEither.SafeCallbackSuccess<number> | DEither.SafeCallbackError>,
			"strict"
		>;
	});

	it("works with pipe when input is a promise", async() => {
		const result = pipe(
			Promise.resolve(42 as const),
			DEither.asyncSafeCallback,
		);

		await expect(result).resolves.toStrictEqual(DEither.right("safe-callback-success", 42));

		type check = ExpectType<
			typeof result,
			Promise<DEither.SafeCallbackSuccess<42> | DEither.SafeCallbackError>,
			"strict"
		>;
	});
});
