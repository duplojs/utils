import { createExternalPromise, memoPromise, pipe, type ExpectType } from "@scripts";

describe("memoPromise", () => {
	it("memoizes a sync value and updates the getter after resolution", async() => {
		const getter = vi.fn(() => 42 as const);
		const memoized = memoPromise(getter);

		const firstValue = memoized.value;

		expect(firstValue).toBeInstanceOf(Promise);
		expect(await firstValue).toBe(42);
		expect(memoized.value).toBe(42);
		expect(getter).toBeCalledTimes(1);

		type check = ExpectType<
			typeof firstValue,
			42 | Promise<42>,
			"strict"
		>;
	});

	it("returns the same promise for concurrent access", async() => {
		const externalPromise = createExternalPromise<number>();
		const getter = vi.fn(() => externalPromise.promise);
		const memoized = memoPromise(getter);

		const firstPromise = memoized.value;
		const secondPromise = memoized.value;

		expect(firstPromise).toBe(secondPromise);
		expect(getter).toBeCalledTimes(1);

		externalPromise.resolve(10);
		expect(await firstPromise).toBe(10);
		expect(memoized.value).toBe(10);
	});

	it("propagates rejection and keeps the promise memoized", async() => {
		const error = new Error("boom");
		const getter = vi.fn(() => Promise.reject(error));
		const memoized = memoPromise(getter);

		const firstPromise = memoized.value;

		await expect(firstPromise).rejects.toThrow("boom");
		expect(memoized.value).toBe(firstPromise);
		expect(getter).toBeCalledTimes(1);
	});

	it("works in pipe with a function input", async() => {
		const memoized = pipe(
			() => "ok" as const,
			memoPromise,
		);

		expect(await memoized.value).toBe("ok");
	});
});
