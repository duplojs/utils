import { promiseAll, pipe, type ExpectType } from "@scripts";

describe("promiseAll", () => {
	it("resolves tuples with promises and non-promises", async() => {
		const result = await promiseAll([
			Promise.resolve(1),
			"hello",
			Promise.resolve(true),
		]);

		expect(result).toStrictEqual([1, "hello", true]);

		type check = ExpectType<
			typeof result,
			[number, "hello", boolean],
			"strict"
		>;
	});

	it("resolves tuples with only non-promises", async() => {
		const result = await promiseAll([
			1,
			"world",
			false,
		]);

		expect(result).toStrictEqual([1, "world", false]);

		type check = ExpectType<
			typeof result,
			[1, "world", false],
			"strict"
		>;
	});

	it("works inside a pipe", async() => {
		const result = await pipe(
			[
				Promise.resolve("ok"),
				42,
			] as const,
			promiseAll,
		);

		expect(result).toStrictEqual(["ok", 42]);

		type check = ExpectType<
			typeof result,
			[string, 42],
			"strict"
		>;
	});

	it("accepts an Iterable value directly", async() => {
		const iterableInput: Iterable<number | Promise<number>> = new Set([
			1,
			Promise.resolve(2),
			3,
		]);
		const promiseResult = promiseAll(iterableInput);
		const result = await promiseResult;

		expect(result).toStrictEqual([1, 2, 3]);

		type checkInput = ExpectType<
			typeof iterableInput,
			Iterable<number | Promise<number>>,
			"strict"
		>;

		type checkOutput = ExpectType<
			typeof promiseResult,
			Promise<number[]>,
			"strict"
		>;
	});

	it("accepts generator iterables and resolves mixed promise values", async() => {
		function *values(): Generator<number | Promise<number>> {
			yield Promise.resolve(10);
			yield 20;
			yield Promise.resolve(30);
		}

		const iterableInput = values();
		const promiseResult = promiseAll(iterableInput);
		const result = await promiseResult;

		expect(result).toStrictEqual([10, 20, 30]);

		type checkInput = ExpectType<
			typeof iterableInput,
			Generator<number | Promise<number>>,
			"strict"
		>;

		type checkOutput = ExpectType<
			typeof promiseResult,
			Promise<number[]>,
			"strict"
		>;
	});
});
