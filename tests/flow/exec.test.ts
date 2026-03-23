/* eslint-disable require-yield */
import { DFlow, type ExpectType } from "@scripts";

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
			expect(spyFinalizer).toHaveBeenNthCalledWith(1, "run");
			expect(spyFinalizer).toHaveBeenNthCalledWith(2, "exec");
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

		// continue here
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
	});
});
