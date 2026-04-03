/* eslint-disable require-yield */
import { createExternalPromise, DFlow, sleep, type ExpectType } from "@scripts";

describe("run", () => {
	it("passe input", () => {
		const result = DFlow.run(
			function *(input: string) {
				return input;
			},
			{ input: "test" },
		);

			type check = ExpectType<
				typeof result,
				string,
				"strict"
			>;

			expect(result).toBe("test");
	});

	it("run flow", () => {
		const flow = DFlow.create(
			function *(input: string) {
				return input;
			},
		);
		const result = DFlow.run(
			flow,
			{ input: "test" },
		);

			type check = ExpectType<
				typeof result,
				string,
				"strict"
			>;

			expect(result).toBe("test");
	});

	describe("sync", () => {
		const spyDefer = vi.fn(() => {});
		const spyFinalizer = vi.fn(() => {});

		afterEach(() => {
			spyDefer.mockClear();
			spyFinalizer.mockClear();
			vi.useRealTimers();
		});

		it("return string", () => {
			const result = DFlow.run(
				function *() {
					return "test";
				},
			);

			type check = ExpectType<
				typeof result,
				string,
				"strict"
			>;

			expect(result).toBe("test");
		});

		it("break and return number and active defer", () => {
			const result = DFlow.run(
				function *() {
					yield *DFlow.defer(spyDefer);
					const value = yield *DFlow.breakIf(2, (value) => value === 2);

					type check = ExpectType<
						typeof value,
						number,
						"strict"
					>;

					return "test";
				},
			);

			type check = ExpectType<
				typeof result,
				2 | string,
				"strict"
			>;

			expect(result).toBe(2);
			expect(spyDefer).toHaveBeenCalledOnce();
		});

		it("break and return number trigger finally block", () => {
			const spyFinally = vi.fn();
			const result = DFlow.run(
				function *() {
					try {
						const value = yield *DFlow.breakIf(2, (value) => value === 2);

						return "test";
					} finally {
						spyFinally();
					}
				},
			);

			type check = ExpectType<
				typeof result,
				2 | string,
				"strict"
			>;

			expect(result).toBe(2);
			expect(spyFinally).toHaveBeenCalledOnce();
		});

		it("exit and return number and active finalizer", () => {
			const result = DFlow.run(
				function *() {
					yield *DFlow.finalizer(spyFinalizer);
					const value = yield *DFlow.exitIf(2, (value) => value === 2);

					type check = ExpectType<
						typeof value,
						number,
						"strict"
					>;

					return "test";
				},
			);

			type check = ExpectType<
				typeof result,
				2 | string,
				"strict"
			>;

			expect(result).toBe(2);
			expect(spyFinalizer).toHaveBeenCalledOnce();
		});

		it("pass on first step and passe on break", () => {
			const result = DFlow.run(
				function *() {
					yield *DFlow.step("here 1");
					yield *DFlow.breakIf(2, (value) => value === 2);
					yield *DFlow.step("here 2");

					return "test";
				},
				{ includeDetails: true },
			);

			type check = ExpectType<
				typeof result,
				DFlow.FlowDetails<string | 2, "here 1" | "here 2">,
				"strict"
			>;

			expect(result).toStrictEqual({
				result: 2,
				steps: ["here 1"],
			});
		});

		it("include details without step", () => {
			const result = DFlow.run(
				function *() {
					return "test";
				},
				{ includeDetails: true },
			);

			type check = ExpectType<
				typeof result,
				DFlow.FlowDetails<string, never>,
				"strict"
			>;

			expect(result).toStrictEqual({
				result: "test",
				steps: [],
			});
		});

		it("inject dependence", () => {
			const superDependence = DFlow.createDependence("test")<string>;
			const result = DFlow.run(
				function *() {
					const myDep = yield *DFlow.inject(superDependence);

					return myDep;
				},
				{ dependencies: { test: "superDep" } },
			);

			type check = ExpectType<
				typeof result,
				string,
				"strict"
			>;

			expect(result).toStrictEqual("superDep");
		});

		it("inject missing dependence", () => {
			const superDependence = DFlow.createDependence("test")<string>;

			expect(() => DFlow.run(
				function *() {
					const myDep = yield *DFlow.inject(superDependence);

					return myDep;
				},
				{ dependencies: { } as never },
			)).toThrowError(DFlow.MissingDependenceError);
		});

		it("yield not support value", () => {
			const value = DFlow.run(
				// @ts-expect-error unexpect yield value
				function *() {
					yield 5;

					return "test";
				},
			);

			expect(value).toBe("test");
		});

		it("returns the throttling fallback when called again too early", () => {
			vi.useFakeTimers();

			const flow = DFlow.create(
				function *(input: number) {
					yield *DFlow.throttling(
						100,
						{
							returnValue: "test",
						},
					);

					return input;
				},
			);
			const firstResult = DFlow.run(flow, { input: 1 });
			const secondResult = DFlow.run(flow, { input: 2 });

			vi.advanceTimersByTime(100);

			const thirdResult = DFlow.run(flow, { input: 3 });

			expect(firstResult).toBe(1);
			expect(secondResult).toBe("test");
			expect(thirdResult).toBe(3);
		});
	});

	describe("async", () => {
		const spyDefer = vi.fn(() => Promise.resolve());
		const spyFinalizer = vi.fn(() => Promise.resolve());

		afterEach(() => {
			spyDefer.mockClear();
			spyFinalizer.mockClear();
			vi.useRealTimers();
		});

		it("return string", async() => {
			const result = DFlow.run(
				async function *() {
					return Promise.resolve("test");
				},
			);

			type check = ExpectType<
				typeof result,
				Promise<string>,
				"strict"
			>;

			await expect(result).resolves.toBe("test");
		});

		it("break and return number and active defer", async() => {
			const result = DFlow.run(
				async function *() {
					yield *DFlow.defer(spyDefer);
					const value = yield *DFlow.breakIf(2, (value) => value === 2);

					type check = ExpectType<
						typeof value,
						number,
						"strict"
					>;

					return Promise.resolve("test");
				},
			);

			type check = ExpectType<
				typeof result,
				Promise<2 | string>,
				"strict"
			>;

			await expect(result).resolves.toBe(2);
			expect(spyDefer).toHaveBeenCalledOnce();
		});

		it("exit and return number and active finalizer", async() => {
			const result = DFlow.run(
				async function *() {
					yield *DFlow.finalizer(spyFinalizer);
					const value = yield *DFlow.exitIf(2, (value) => value === 2);

					type check = ExpectType<
						typeof value,
						number,
						"strict"
					>;

					return Promise.resolve("test");
				},
			);

			type check = ExpectType<
				typeof result,
				Promise<2 | string>,
				"strict"
			>;

			await expect(result).resolves.toBe(2);
			expect(spyFinalizer).toHaveBeenCalledOnce();
		});

		it("break and return number trigger finally block", async() => {
			const spyFinally = vi.fn();
			const result = DFlow.run(
				async function *() {
					try {
						const value = yield *DFlow.breakIf(2, (value) => value === 2);
						await Promise.resolve();
						return "test";
					} finally {
						spyFinally();
					}
				},
			);

			type check = ExpectType<
				typeof result,
				Promise<2 | string>,
				"strict"
			>;

			await expect(result).resolves.toBe(2);
			expect(spyFinally).toHaveBeenCalledOnce();
		});

		it("pass on first step and passe on break", async() => {
			const result = DFlow.run(
				async function *() {
					yield *DFlow.step("here 1");
					yield *DFlow.breakIf(2, (value) => value === 2);
					yield *DFlow.step("here 2");

					return Promise.resolve("test");
				},
				{ includeDetails: true },
			);

			type check = ExpectType<
				typeof result,
				Promise<DFlow.FlowDetails<string | 2, "here 1" | "here 2">>,
				"strict"
			>;

			await expect(result).resolves.toStrictEqual({
				result: 2,
				steps: ["here 1"],
			});
		});

		it("include details without step", async() => {
			const result = DFlow.run(
				async function *() {
					return Promise.resolve("test");
				},
				{ includeDetails: true },
			);

			type check = ExpectType<
				typeof result,
				Promise<DFlow.FlowDetails<string, never>>,
				"strict"
			>;

			await expect(result).resolves.toStrictEqual({
				result: "test",
				steps: [],
			});
		});

		it("inject dependence", async() => {
			const superDependence = DFlow.createDependence("test")<string>;
			const result = DFlow.run(
				async function *() {
					const myDep = yield *DFlow.inject(superDependence);

					return Promise.resolve(myDep);
				},
				{ dependencies: { test: "superDep" } },
			);

			type check = ExpectType<
				typeof result,
				Promise<string>,
				"strict"
			>;

			await expect(result).resolves.toStrictEqual("superDep");
		});

		it("inject missing dependence", async() => {
			const superDependence = DFlow.createDependence("test")<string>;

			await expect(() => DFlow.run(
				async function *() {
					const myDep = yield *DFlow.inject(superDependence);

					return Promise.resolve(myDep);
				},
				{ dependencies: { } as never },
			)).rejects.toThrowError(DFlow.MissingDependenceError);
		});

		it("yield not support value", async() => {
			const value = DFlow.run(
				// @ts-expect-error unexpect yield value
				async function *() {
					yield 5;

					return Promise.resolve("test");
				},
			);

			await expect(value).resolves.toBe("test");
		});

		it("calls the previous async called-by-next callback when runs overlap", async() => {
			const firstSpy = vi.fn();
			const secondSpy = vi.fn();
			const firstBlocker = createExternalPromise();
			const secondBlocker = createExternalPromise();
			const thirdBlocker = createExternalPromise();
			const flow = DFlow.create(
				async function *(input: number) {
					yield *DFlow.calledByNext(
						input === 1
							? firstSpy
							: secondSpy,
					);
					if (input === 1) {
						await firstBlocker.promise;
					} else if (input === 2) {
						await secondBlocker.promise;
					} else {
						await thirdBlocker.promise;
					}

					return Promise.resolve(input);
				},
			);
			const firstRun = DFlow.run(flow, { input: 1 });

			const secondRun = DFlow.run(flow, { input: 2 });

			const thirdRun = DFlow.run(flow, { input: 3 });

			await sleep();

			expect(firstSpy).toHaveBeenCalledOnce();
			expect(secondSpy).toHaveBeenCalledOnce();

			firstBlocker.resolve(undefined);
			secondBlocker.resolve(undefined);
			thirdBlocker.resolve(undefined);

			await expect(firstRun).resolves.toBe(1);
			await expect(secondRun).resolves.toBe(2);
			await expect(thirdRun).resolves.toBe(3);
		});

		it("queues concurrent runs when the queue concurrency is one", async() => {
			const firstBlocker = createExternalPromise();
			const secondBlocker = createExternalPromise();
			const executionOrder: string[] = [];
			const flow = DFlow.create(
				async function *(input: number) {
					yield *DFlow.queue({
						concurrency: 1,
					});
					executionOrder.push(`start-${input}`);
					if (input === 1) {
						await firstBlocker.promise;
					} else {
						await secondBlocker.promise;
					}
					executionOrder.push(`end-${input}`);

					return Promise.resolve(input);
				},
			);
			const firstRun = DFlow.run(flow, { input: 1 });
			const secondRun = DFlow.run(flow, { input: 2 });

			await sleep();
			expect(executionOrder).toStrictEqual(["start-1"]);

			firstBlocker.resolve(undefined);

			await expect(firstRun).resolves.toBe(1);
			await sleep();
			expect(executionOrder).toStrictEqual([
				"start-1",
				"end-1",
				"start-2",
			]);

			secondBlocker.resolve(undefined);

			await expect(secondRun).resolves.toBe(2);
			expect(executionOrder).toStrictEqual([
				"start-1",
				"end-1",
				"start-2",
				"end-2",
			]);
		});

		it("keeps only the last throttled async run when keepLast is true", async() => {
			vi.useFakeTimers();

			const executionOrder: string[] = [];
			const flow = DFlow.create(
				async function *(input: string) {
					yield *DFlow.throttling(
						100,
						{
							returnValue: "skipped" as const,
							keepLast: true,
						},
					);
					executionOrder.push(input);

					return Promise.resolve(input);
				},
			);
			const firstRun = DFlow.run(flow, { input: "first" });

			await expect(firstRun).resolves.toBe("first");

			const secondRun = DFlow.run(flow, { input: "second" });
			const thirdRun = DFlow.run(flow, { input: "third" });

			await expect(secondRun).resolves.toBe("skipped");
			expect(executionOrder).toStrictEqual(["first"]);

			await vi.advanceTimersByTimeAsync(100);

			await expect(thirdRun).resolves.toBe("third");
			expect(executionOrder).toStrictEqual([
				"first",
				"third",
			]);
		});
	});
});
