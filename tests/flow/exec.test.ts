/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable require-yield */
import { createExternalPromise, DFlow, sleep, type ExpectType } from "@scripts";

describe("exec", () => {
	it("passe input", () => {
		const result = DFlow.run(
			function *(input: string) {
				const result = yield *DFlow.exec(
					function *(subInput: string) {
						return subInput;
					},
					{ input },
				);

				return result;
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
			function *(subInput: string) {
				return subInput;
			},
		);
		const result = DFlow.run(
			function *(input: string) {
				const result = yield *DFlow.exec(
					flow,
					{ input },
				);

				return result;
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

	it("run generator", () => {
		const flow = function *<T>(subInput: T) {
			return subInput;
		};
		const result = DFlow.run(
			function *(input: string) {
				const result = yield *DFlow.exec(
					flow(input),
				);

				return result;
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

	describe("sync", () => {
		const spyDefer = vi.fn((...args: any[]) => {});
		const spyFinalizer = vi.fn((...args: any[]) => {});

		afterEach(() => {
			spyDefer.mockClear();
			spyFinalizer.mockClear();
			vi.useRealTimers();
		});

		it("return string", () => {
			const result = DFlow.run(
				function *() {
					const result = yield *DFlow.exec(
						function *() {
							return "test";
						},
					);

					type check = ExpectType<
						typeof result,
						string,
						"strict"
					>;

					return result;
				},
			);

			expect(result).toBe("test");
		});

		it("break and return number and active defer", () => {
			const result = DFlow.run(
				function *() {
					yield *DFlow.defer(() => void spyDefer("run"));

					const result = yield *DFlow.exec(
						function *() {
							yield *DFlow.defer(() => void spyDefer("exec"));
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

					return result;
				},
			);

			expect(result).toBe(2);
			expect(spyDefer).toHaveBeenNthCalledWith(1, "exec");
			expect(spyDefer).toHaveBeenNthCalledWith(2, "run");
		});

		it("break and return number trigger finally block", () => {
			const spyFinally = vi.fn();
			const result = DFlow.run(
				function *() {
					const result = yield *DFlow.exec(
						function *() {
							try {
								const value = yield *DFlow.breakIf(2, (value) => value === 2);

								return "test";
							} finally {
								spyFinally();
							}
						},
					);

					return result;
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
					yield *DFlow.finalizer(() => void spyFinalizer("run"));

					const result = yield *DFlow.exec(
						function *() {
							yield *DFlow.finalizer(() => void spyFinalizer("exec"));
							yield *DFlow.defer(spyDefer);
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
						string,
						"strict"
					>;

					return result;
				},
			);

			type check = ExpectType<
				typeof result,
				2 | string,
				"strict"
			>;

			expect(result).toBe(2);
			expect(spyFinalizer).toHaveBeenCalledTimes(2);
			expect(spyFinalizer).toHaveBeenNthCalledWith(1, "run");
			expect(spyFinalizer).toHaveBeenNthCalledWith(2, "exec");
			expect(spyDefer).toHaveBeenCalledOnce();
		});

		it("deep exit trigger all finally block", () => {
			const spyFinally = vi.fn();
			const result = DFlow.run(
				function *() {
					yield *DFlow.defer(() => void spyDefer("three"));
					yield *DFlow.finalizer(() => void spyFinalizer("three"));

					try {
						const result = yield *DFlow.exec(
							function *() {
								yield *DFlow.defer(() => void spyDefer("two"));
								yield *DFlow.finalizer(() => void spyFinalizer("two"));

								try {
									const result = yield *DFlow.exec(
										function *() {
											yield *DFlow.defer(() => void spyDefer("one"));
											yield *DFlow.finalizer(() => void spyFinalizer("one"));

											try {
												const value = yield *DFlow.breakIf(2, (value) => value === 2);

												return "test";
											} finally {
												spyFinally("one");
											}
										},
									);

									return result;
								} finally {
									spyFinally("two");
								}
							},
						);

						return result;
					} finally {
						spyFinally("three");
					}
				},
			);

			type check = ExpectType<
				typeof result,
				2 | string,
				"strict"
			>;

			expect(result).toBe(2);

			expect(spyFinalizer).toHaveBeenCalledTimes(3);
			expect(spyFinalizer).toHaveBeenNthCalledWith(1, "three");
			expect(spyFinalizer).toHaveBeenNthCalledWith(2, "two");
			expect(spyFinalizer).toHaveBeenNthCalledWith(3, "one");

			expect(spyDefer).toHaveBeenCalledTimes(3);
			expect(spyDefer).toHaveBeenNthCalledWith(1, "one");
			expect(spyDefer).toHaveBeenNthCalledWith(2, "two");
			expect(spyDefer).toHaveBeenNthCalledWith(3, "three");

			expect(spyFinally).toHaveBeenCalledTimes(3);
			expect(spyFinally).toHaveBeenNthCalledWith(1, "one");
			expect(spyFinally).toHaveBeenNthCalledWith(2, "two");
			expect(spyFinally).toHaveBeenNthCalledWith(3, "three");
		});

		it("pass on first step and passe on exit", () => {
			const result = DFlow.run(
				function *() {
					yield *DFlow.exec(
						function *() {
							yield *DFlow.step("here 1");
							yield *DFlow.exitIf(2, (value) => value === 2);
							yield *DFlow.step("here 2");
						},
					);

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

		it("inject dependence", () => {
			const superDependence = DFlow.createDependence("test")<string>;
			const result = DFlow.run(
				function *() {
					const result = yield *DFlow.exec(
						function *() {
							const myDep = yield *DFlow.inject(superDependence);

							return myDep;
						},
					);

					return result;
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

		it("override inject dependence", () => {
			const superDependence = DFlow.createDependence("test")<string>;
			const result = DFlow.run(
				function *() {
					const result = yield *DFlow.exec(
						function *() {
							const myDep = yield *DFlow.inject(superDependence);

							return myDep;
						},
						{ dependencies: { test: "overrideSuperDep" } },
					);

					return result;
				},
				{ dependencies: { test: "superDep" } },
			);

			type check = ExpectType<
				typeof result,
				string,
				"strict"
			>;

			expect(result).toStrictEqual("overrideSuperDep");
		});

		it("inject missing dependence", () => {
			const superDependence = DFlow.createDependence("test")<string>;

			expect(() => DFlow.run(
				function *() {
					const result = yield *DFlow.exec(
						function *() {
							const myDep = yield *DFlow.inject(superDependence);

							return myDep;
						},
						{ dependencies: { } as never },
					);

					return result;
				},
				{ dependencies: { } as never },
			)).toThrowError(DFlow.MissingDependenceError);
		});

		it("yield not support value", () => {
			const value = DFlow.run(
				function *() {
					// @ts-expect-error unexpect yield value
					const result = yield *DFlow.exec(
						// @ts-expect-error unexpect yield value
						function *() {
							yield 5;

							return "test";
						},
					);

					return result;
				},
			);

			expect(value).toBe("test");
		});

		it("returns the nested throttling fallback when called again too early", () => {
			vi.useFakeTimers();
			const subFlow = DFlow.create(
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
			const firstResult = DFlow.run(
				function *(input: number) {
					return yield *DFlow.exec(subFlow, { input });
				},
				{ input: 1 },
			);
			const secondResult = DFlow.run(
				function *(input: number) {
					return yield *DFlow.exec(subFlow, { input });
				},
				{ input: 2 },
			);

			vi.advanceTimersByTime(100);

			const thirdResult = DFlow.run(
				function *(input: number) {
					return yield *DFlow.exec(subFlow, { input });
				},
				{ input: 3 },
			);

			type checkFirstResult = ExpectType<
				typeof firstResult,
				number | string,
				"strict"
			>;

			type checkSecondResult = ExpectType<
				typeof secondResult,
				number | string,
				"strict"
			>;

			type checkThirdResult = ExpectType<
				typeof thirdResult,
				number | string,
				"strict"
			>;

			expect(firstResult).toBe(1);
			expect(secondResult).toBe("test");
			expect(thirdResult).toBe(3);
		});
	});

	describe("async", () => {
		const spyDefer = vi.fn(async(...args: any[]) => Promise.resolve());
		const spyFinalizer = vi.fn(async(...args: any[]) => Promise.resolve());

		afterEach(() => {
			spyDefer.mockClear();
			spyFinalizer.mockClear();
			vi.useRealTimers();
		});

		it("return string", async() => {
			const result = DFlow.run(
				async function *() {
					const result = yield *DFlow.exec(
						async function *() {
							await Promise.resolve();
							return "test";
						},
					);

					await Promise.resolve();

					type check = ExpectType<
						typeof result,
						string,
						"strict"
					>;

					return result;
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
					yield *DFlow.defer(() => spyDefer("run"));

					const result = yield *DFlow.exec(
						async function *() {
							yield *DFlow.defer(() => spyDefer("exec"));
							const value = yield *DFlow.breakIf(2, (value) => value === 2);

							await Promise.resolve();

							type check = ExpectType<
								typeof value,
								number,
								"strict"
							>;

							return "test";
						},
					);

					await Promise.resolve();

					type check = ExpectType<
						typeof result,
						2 | string,
						"strict"
					>;

					return result;
				},
			);

			type check = ExpectType<
				typeof result,
				Promise<2 | string>,
				"strict"
			>;

			await expect(result).resolves.toBe(2);
			expect(spyDefer).toHaveBeenNthCalledWith(1, "exec");
			expect(spyDefer).toHaveBeenNthCalledWith(2, "run");
		});

		it("break and return number trigger finally block", async() => {
			const spyFinally = vi.fn();
			const result = DFlow.run(
				async function *() {
					const result = yield *DFlow.exec(
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

					await Promise.resolve();

					return result;
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

		it("exit and return number and active finalizer", async() => {
			const result = DFlow.run(
				async function *() {
					yield *DFlow.finalizer(() => spyFinalizer("run"));

					const result = yield *DFlow.exec(
						async function *() {
							yield *DFlow.finalizer(() => spyFinalizer("exec"));
							yield *DFlow.defer(spyDefer);
							const value = yield *DFlow.exitIf(2, (value) => value === 2);

							await Promise.resolve();

							type check = ExpectType<
								typeof value,
								number,
								"strict"
							>;

							return "test";
						},
					);

					await Promise.resolve();

					type check = ExpectType<
						typeof result,
						string,
						"strict"
					>;

					return result;
				},
			);

			type check = ExpectType<
				typeof result,
				Promise<2 | string>,
				"strict"
			>;

			await expect(result).resolves.toBe(2);
			expect(spyFinalizer).toHaveBeenCalledTimes(2);
			expect(spyFinalizer).toHaveBeenNthCalledWith(1, "run");
			expect(spyFinalizer).toHaveBeenNthCalledWith(2, "exec");
			expect(spyDefer).toHaveBeenCalledOnce();
		});

		it("deep exit trigger all finally block", async() => {
			const spyFinally = vi.fn();
			const result = DFlow.run(
				async function *() {
					yield *DFlow.defer(() => spyDefer("three"));
					yield *DFlow.finalizer(() => spyFinalizer("three"));

					try {
						const result = yield *DFlow.exec(
							async function *() {
								yield *DFlow.defer(() => spyDefer("two"));
								yield *DFlow.finalizer(() => spyFinalizer("two"));

								try {
									const result = yield *DFlow.exec(
										async function *() {
											yield *DFlow.defer(() => spyDefer("one"));
											yield *DFlow.finalizer(() => spyFinalizer("one"));

											await Promise.resolve();

											try {
												const value = yield *DFlow.breakIf(2, (value) => value === 2);

												return "test";
											} finally {
												spyFinally("one");
											}
										},
									);

									await Promise.resolve();

									return result;
								} finally {
									spyFinally("two");
								}
							},
						);

						await Promise.resolve();

						return result;
					} finally {
						spyFinally("three");
					}
				},
			);

			type check = ExpectType<
				typeof result,
				Promise<2 | string>,
				"strict"
			>;

			await expect(result).resolves.toBe(2);

			expect(spyFinalizer).toHaveBeenCalledTimes(3);
			expect(spyFinalizer).toHaveBeenNthCalledWith(1, "three");
			expect(spyFinalizer).toHaveBeenNthCalledWith(2, "two");
			expect(spyFinalizer).toHaveBeenNthCalledWith(3, "one");

			expect(spyDefer).toHaveBeenCalledTimes(3);
			expect(spyDefer).toHaveBeenNthCalledWith(1, "one");
			expect(spyDefer).toHaveBeenNthCalledWith(2, "two");
			expect(spyDefer).toHaveBeenNthCalledWith(3, "three");

			expect(spyFinally).toHaveBeenCalledTimes(3);
			expect(spyFinally).toHaveBeenNthCalledWith(1, "one");
			expect(spyFinally).toHaveBeenNthCalledWith(2, "two");
			expect(spyFinally).toHaveBeenNthCalledWith(3, "three");
		});

		it("pass on first step and passe on exit", async() => {
			const result = DFlow.run(
				async function *() {
					yield *DFlow.exec(
						async function *() {
							yield *DFlow.step("here 1");
							yield *DFlow.exitIf(2, (value) => value === 2);
							yield *DFlow.step("here 2");

							await Promise.resolve();
						},
					);

					await Promise.resolve();

					return "test";
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

		it("inject dependence", async() => {
			const superDependence = DFlow.createDependence("test")<string>;
			const result = DFlow.run(
				async function *() {
					const result = yield *DFlow.exec(
						async function *() {
							const myDep = yield *DFlow.inject(superDependence);

							await Promise.resolve();

							return myDep;
						},
					);

					await Promise.resolve();

					return result;
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

		it("override inject dependence", async() => {
			const superDependence = DFlow.createDependence("test")<string>;
			const result = DFlow.run(
				async function *() {
					const result = yield *DFlow.exec(
						async function *() {
							const myDep = yield *DFlow.inject(superDependence);

							await Promise.resolve();

							return myDep;
						},
						{ dependencies: { test: "overrideSuperDep" } },
					);

					await Promise.resolve();

					return result;
				},
				{ dependencies: { test: "superDep" } },
			);

			type check = ExpectType<
				typeof result,
				Promise<string>,
				"strict"
			>;

			await expect(result).resolves.toStrictEqual("overrideSuperDep");
		});

		it("inject missing dependence", async() => {
			const superDependence = DFlow.createDependence("test")<string>;

			const result = DFlow.run(
				async function *() {
					const result = yield *DFlow.exec(
						async function *() {
							const myDep = yield *DFlow.inject(superDependence);

							await Promise.resolve();

							return myDep;
						},
						{ dependencies: { } as never },
					);

					await Promise.resolve();

					return result;
				},
				{ dependencies: { } as never },
			);

			await expect(result).rejects.toThrowError(DFlow.MissingDependenceError);
		});

		it("yield not support value", async() => {
			const value = DFlow.run(
				async function *() {
					const result = yield *DFlow.exec(
						// @ts-expect-error unexpect yield value
						async function *() {
							yield 5;

							await Promise.resolve();

							return "test";
						},
					);

					await Promise.resolve();

					return result;
				},
			);

			await expect(value).resolves.toBe("test");
		});

		it("calls the previous async called-by-next callback when nested runs overlap", async() => {
			const firstSpy = vi.fn();
			const secondSpy = vi.fn();
			const firstBlocker = createExternalPromise();
			const secondBlocker = createExternalPromise();
			const thirdBlocker = createExternalPromise();
			const subFlow = DFlow.create(
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
			const firstRun = DFlow.run(
				async function *(input: number) {
					return yield *DFlow.exec(subFlow, { input });
				},
				{ input: 1 },
			);
			const secondRun = DFlow.run(
				async function *(input: number) {
					return yield *DFlow.exec(subFlow, { input });
				},
				{ input: 2 },
			);
			const thirdRun = DFlow.run(
				async function *(input: number) {
					return yield *DFlow.exec(subFlow, { input });
				},
				{ input: 3 },
			);

			type checkFirstRun = ExpectType<
				typeof firstRun,
				Promise<number>,
				"strict"
			>;

			type checkSecondRun = ExpectType<
				typeof secondRun,
				Promise<number>,
				"strict"
			>;

			type checkThirdRun = ExpectType<
				typeof thirdRun,
				Promise<number>,
				"strict"
			>;

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

		it("waits for the previous async nested called-by-next callback before continuing", async() => {
			const cleanupBlocker = createExternalPromise();
			const runBlocker = createExternalPromise();
			const events: string[] = [];
			const subFlow = DFlow.create(
				async function *(input: number) {
					yield *DFlow.calledByNext(async() => {
						events.push(`cleanup-start-${input}`);
						await cleanupBlocker.promise;
						events.push(`cleanup-end-${input}`);
					});
					events.push(`run-${input}`);
					await runBlocker.promise;

					return Promise.resolve(input);
				},
			);
			const firstRun = DFlow.run(
				async function *(input: number) {
					return yield *DFlow.exec(subFlow, { input });
				},
				{ input: 1 },
			);
			await sleep();

			const secondRun = DFlow.run(
				async function *(input: number) {
					return yield *DFlow.exec(subFlow, { input });
				},
				{ input: 2 },
			);
			await sleep();

			expect(events).toStrictEqual([
				"run-1",
				"cleanup-start-1",
			]);

			cleanupBlocker.resolve(undefined);
			await sleep();

			expect(events).toStrictEqual([
				"run-1",
				"cleanup-start-1",
				"cleanup-end-1",
				"run-2",
			]);

			runBlocker.resolve(undefined);

			await expect(firstRun).resolves.toBe(1);
			await expect(secondRun).resolves.toBe(2);
		});

		it("uses only the first nested called-by-next effect from the same execution", async() => {
			const firstSpy = vi.fn();
			const secondSpy = vi.fn();
			const blocker = createExternalPromise();
			const subFlow = DFlow.create(
				async function *(input: number) {
					yield *DFlow.calledByNext(firstSpy);
					yield *DFlow.calledByNext(secondSpy);
					await blocker.promise;

					return Promise.resolve(input);
				},
			);
			const firstRun = DFlow.run(
				async function *(input: number) {
					return yield *DFlow.exec(subFlow, { input });
				},
				{ input: 1 },
			);
			await sleep();

			const secondRun = DFlow.run(
				async function *(input: number) {
					return yield *DFlow.exec(subFlow, { input });
				},
				{ input: 2 },
			);
			await sleep();

			expect(firstSpy).toHaveBeenCalledOnce();
			expect(secondSpy).not.toHaveBeenCalled();

			blocker.resolve(undefined);

			await expect(firstRun).resolves.toBe(1);
			await expect(secondRun).resolves.toBe(2);
		});

		it("queues concurrent nested runs when the queue concurrency is one", async() => {
			const firstBlocker = createExternalPromise();
			const secondBlocker = createExternalPromise();
			const executionOrder: string[] = [];
			const subFlow = DFlow.create(
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
			const firstRun = DFlow.run(
				async function *(input: number) {
					return yield *DFlow.exec(subFlow, { input });
				},
				{ input: 1 },
			);
			const secondRun = DFlow.run(
				async function *(input: number) {
					return yield *DFlow.exec(subFlow, { input });
				},
				{ input: 2 },
			);

			type checkFirstRun = ExpectType<
				typeof firstRun,
				Promise<number>,
				"strict"
			>;

			type checkSecondRun = ExpectType<
				typeof secondRun,
				Promise<number>,
				"strict"
			>;

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

		it("uses only the first nested queue effect from the same execution", async() => {
			const blocker = createExternalPromise();
			const executionOrder: string[] = [];
			const subFlow = DFlow.create(
				async function *(input: number) {
					const release = yield *DFlow.queue({
						concurrency: 1,
					});
					yield *DFlow.queue({
						concurrency: 1,
					});

					try {
						executionOrder.push(`start-${input}`);
						await blocker.promise;
						executionOrder.push(`end-${input}`);

						return await Promise.resolve(input);
					} finally {
						release();
					}
				},
			);
			const firstRun = DFlow.run(
				async function *(input: number) {
					return yield *DFlow.exec(subFlow, { input });
				},
				{ input: 1 },
			);
			const secondRun = DFlow.run(
				async function *(input: number) {
					return yield *DFlow.exec(subFlow, { input });
				},
				{ input: 2 },
			);

			await sleep();
			expect(executionOrder).toStrictEqual(["start-1"]);

			blocker.resolve(undefined);

			await expect(firstRun).resolves.toBe(1);
			await expect(secondRun).resolves.toBe(2);
			expect(executionOrder[0]).toBe("start-1");
			expect(executionOrder[1]).toBe("end-1");
			expect(executionOrder[2]).toBe("start-2");
		});

		it("keeps only the last throttled async nested run when keepLast is true", async() => {
			vi.useFakeTimers();
			const executionOrder: string[] = [];
			const subFlow = DFlow.create(
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
			const firstRun = DFlow.run(
				async function *(input: string) {
					return yield *DFlow.exec(subFlow, { input });
				},
				{ input: "first" },
			);

			await expect(firstRun).resolves.toBe("first");

			const secondRun = DFlow.run(
				async function *(input: string) {
					return yield *DFlow.exec(subFlow, { input });
				},
				{ input: "second" },
			);
			const thirdRun = DFlow.run(
				async function *(input: string) {
					return yield *DFlow.exec(subFlow, { input });
				},
				{ input: "third" },
			);

			type checkFirstRun = ExpectType<
				typeof firstRun,
				Promise<string>,
				"strict"
			>;

			type checkSecondRun = ExpectType<
				typeof secondRun,
				Promise<string>,
				"strict"
			>;

			type checkThirdRun = ExpectType<
				typeof thirdRun,
				Promise<string>,
				"strict"
			>;

			await expect(secondRun).resolves.toBe("skipped");
			expect(executionOrder).toStrictEqual(["first"]);

			await vi.advanceTimersByTimeAsync(100);

			await expect(thirdRun).resolves.toBe("third");
			expect(executionOrder).toStrictEqual([
				"first",
				"third",
			]);
		});

		it("uses only the first nested throttling effect from the same execution", async() => {
			vi.useFakeTimers();

			const subFlow = DFlow.create(
				async function *(input: number) {
					yield *DFlow.throttling(
						100,
						{ returnValue: "first-skip" as const },
					);
					yield *DFlow.throttling(
						100,
						{ returnValue: "second-skip" as const },
					);

					return Promise.resolve(input);
				},
			);
			const firstRun = DFlow.run(
				async function *(input: number) {
					return yield *DFlow.exec(subFlow, { input });
				},
				{ input: 1 },
			);
			const secondRun = DFlow.run(
				async function *(input: number) {
					return yield *DFlow.exec(subFlow, { input });
				},
				{ input: 2 },
			);

			await expect(firstRun).resolves.toBe(1);
			await expect(secondRun).resolves.toBe("first-skip");
		});
	});
});
