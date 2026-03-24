
import { DFlow, type ExpectType } from "@scripts";
import { createInitializer } from "@scripts/flow/initializer";

describe("createInitializer", () => {
	describe("sync", () => {
		it("returns the initializer result and runs defer with the returned value", () => {
			const spyDefer = vi.fn((output: string) => output.length);
			const initializer = createInitializer(
				(input: string) => `hello ${input}`,
				{ defer: spyDefer },
			);
			const result = DFlow.run(
				function *() {
					const value = yield *initializer("world");

					type check = ExpectType<
						typeof value,
						string,
						"strict"
					>;

					return value;
				},
			);

			type check = ExpectType<
				typeof result,
				string,
				"strict"
			>;

			type checkInitializer = ExpectType<
				typeof initializer,
				(input: string) => Generator<DFlow.Defer<number>, string, any>,
				"strict"
			>;

			expect(result).toBe("hello world");
			expect(spyDefer).toHaveBeenCalledOnce();
			expect(spyDefer).toHaveBeenCalledWith("hello world");
		});

		it("returns the initializer result and runs finalizer with the returned value", () => {
			const spyFinalizer = vi.fn((output: number) => output.toString());
			const initializer = createInitializer(
				(left: number, right: number) => left + right,
				{ finalizer: spyFinalizer },
			);
			const result = DFlow.run(
				function *() {
					const value = yield *initializer(20, 22);

					type check = ExpectType<
						typeof value,
						number,
						"strict"
					>;

					return value;
				},
			);

			type check = ExpectType<
				typeof result,
				number,
				"strict"
			>;

			expect(result).toBe(42);
			expect(spyFinalizer).toHaveBeenCalledOnce();
			expect(spyFinalizer).toHaveBeenCalledWith(42);
		});
	});

	describe("async", () => {
		it("returns the awaited initializer result and runs defer with the awaited value", async() => {
			const spyDefer = vi.fn(async(output: string) => Promise.resolve(output.length));
			const initializer = createInitializer(
				async(input: string) => Promise.resolve(`hello ${input}`),
				{ defer: spyDefer },
			);
			const result = DFlow.run(
				async function *() {
					const value = yield *initializer("world");

					await Promise.resolve();

					type check = ExpectType<
						typeof value,
						string,
						"strict"
					>;

					return value;
				},
			);

			type check = ExpectType<
				typeof result,
				Promise<string>,
				"strict"
			>;

			await expect(result).resolves.toBe("hello world");
			expect(spyDefer).toHaveBeenCalledOnce();
			expect(spyDefer).toHaveBeenCalledWith("hello world");
		});

		it("returns the awaited initializer result and runs finalizer with the awaited value", async() => {
			const spyFinalizer = vi.fn(async(output: number) => Promise.resolve(output.toString()));
			const initializer = createInitializer(
				async(left: number, right: number) => Promise.resolve(left + right),
				{ finalizer: spyFinalizer },
			);
			const result = DFlow.run(
				async function *() {
					const value = yield *initializer(20, 22);

					await Promise.resolve();

					type check = ExpectType<
						typeof value,
						number,
						"strict"
					>;

					return value;
				},
			);

			type check = ExpectType<
				typeof result,
				Promise<number>,
				"strict"
			>;

			type checkInitializer = ExpectType<
				typeof initializer,
				(left: number, right: number) => (
					| Generator<DFlow.Finalizer<Promise<string>>, number, any>
					| AsyncGenerator<DFlow.Finalizer<Promise<string>>, number, any>
				),
				"strict"
			>;

			await expect(result).resolves.toBe(42);
			expect(spyFinalizer).toHaveBeenCalledOnce();
			expect(spyFinalizer).toHaveBeenCalledWith(42);
		});
	});
});
