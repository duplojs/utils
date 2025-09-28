import { DPattern, type ExpectType, pipe } from "@scripts/index";

describe("union", () => {
	interface Test {
		type: "test" | "toto" | "tata" | {
			tt: "yy" | "oo";
			sub: "ta";
		};
	}

	it("match", () => {
		const input: Test = {
			type: "tata",
		} as Test;

		const result = pipe(
			input,
			DPattern.match(
				{ type: DPattern.union("tata", { tt: "oo" }) },
				(value) => {
					type Check = ExpectType<
						typeof value,
						{
							type: "tata" | {
								tt: "oo";
								sub: "ta";
							};
						},
						"strict"
					>;
					return "myValue";
				},
			),
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			DPattern.PatternResult<"myValue"> | {
				type: "test" | "toto" | {
					sub: "ta";
					tt: "yy";
				};
			},
			"strict"
		>;
	});

	it("other match", () => {
		const input: Test = {
			type: "tata",
		} as Test;

		const result = pipe(
			input,
			DPattern.match(
				{ type: DPattern.union("tata", "test") },
				(value) => {
					type Check = ExpectType<
						typeof value,
						{
							type: "tata" | "test";
						},
						"strict"
					>;
					return "myValue";
				},
			),
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			DPattern.PatternResult<"myValue"> | {
				type: "toto" | {
					sub: "ta";
					tt: "yy" | "oo";
				};
			},
			"strict"
		>;
	});

	it("not match", () => {
		const input: Test = {
			type: "tata",
		} as Test;

		const result = pipe(
			input,
			DPattern.match(
				{ type: DPattern.union("test", "toto") },
				(value) => {
					type Check = ExpectType<
						typeof value,
						{
							type: "test" | "toto";
						},
						"strict"
					>;
					return "myValue";
				},
			),
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			DPattern.PatternResult<"myValue"> | {
				type: "tata" | {
					sub: "ta";
					tt: "yy" | "oo";
				};
			},
			"strict"
		>;
	});

	describe("discriminate object", () => {
		interface Object1 {
			type: "one";
			prop1: true;
			constProp: number;
		}
		interface Object2 {
			type: "two";
			prop2: true;
			constProp: number;
		}
		interface Object3 {
			type: "three";
			prop3: true;
			constProp: number;
		}

		type TestObject = Object1 | Object2 | Object3;

		const input = {
			type: "one",
			prop1: true,
			constProp: 11,
		} as TestObject;

		it("union on key", () => {
			const result = pipe(
				input,
				DPattern.match(
					DPattern.union({ type: "one" }, { type: "two" }),
					(value) => {
					type Check = ExpectType<
						typeof value,
						Object1 | Object2,
						"strict"
					>;
					return "myValue";
					},
				),
			);

			expect(result).toStrictEqual(DPattern.result("myValue"));

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | Object3,
				"strict"
			>;
		});

		it("union on key", () => {
			const result = pipe(
				input,
				DPattern.match(
					{ type: DPattern.union("one", "two") },
					(value) => {
					type Check = ExpectType<
						typeof value,
						Object1 | Object2,
						"strict"
					>;
					return "myValue";
					},
				),
			);

			expect(result).toStrictEqual(DPattern.result("myValue"));

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | Object3,
				"strict"
			>;
		});

		it("union on key", () => {
			const result = pipe(
				input,
				DPattern.match(
					{ type: DPattern.union("one", "two") },
					(value) => {
					type Check = ExpectType<
						typeof value,
						Object1 | Object2,
						"strict"
					>;
					return "myValue";
					},
				),
			);

			expect(result).toStrictEqual(DPattern.result("myValue"));

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | Object3,
				"strict"
			>;
		});

		it("union on different key", () => {
			const result = pipe(
				input,
				DPattern.match(
					DPattern.union({ type: "one" }, { prop3: true }),
					(value) => {
						type Check = ExpectType<
							typeof value,
							Object1 | Object3,
							"strict"
						>;
						return "myValue";
					},
				),
			);

			expect(result).toStrictEqual(DPattern.result("myValue"));

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | Object2,
				"strict"
			>;
		});

		it("union on deep object", () => {
			const inputDeep = {
				prop: input,
				test: input,
				con: true,
			};

			const result = pipe(
				inputDeep,
				DPattern.match(
					{
						test: { type: DPattern.union("one", "three") },
						prop: { type: DPattern.union("one", "two") },
						con: true,
					},
					(value) => {
						type Check = ExpectType<
							typeof value,
							{
								test: Object1 | Object3;
								prop: Object1 | Object2;
								con: true;
							},
							"strict"
						>;

						return "myValue";
					},
				),
			);

			expect(result).toStrictEqual(DPattern.result("myValue"));

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | typeof inputDeep,
				"strict"
			>;
		});

		it("union on deep object with one union take all", () => {
			const inputDeep = {
				prop: input,
				test: input,
				con: true,
			};

			const result = pipe(
				inputDeep,
				DPattern.match(
					{
						test: { type: DPattern.union("one", "three") },
						prop: DPattern.union(
							{ type: DPattern.union("one", "two") },
							{ prop3: true },
						),
					},
					(value) => {
						type Check = ExpectType<
							typeof value,
							{
								test: Object1 | Object3;
								prop: Object1 | Object2 | Object3;
								con: boolean;
							},
							"strict"
						>;

						return "myValue";
					},
				),
			);

			expect(result).toStrictEqual(DPattern.result("myValue"));

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | {
					prop: TestObject;
					test: Object2;
					con: boolean;
				},
				"strict"
			>;
		});

		it("union on deep object with one union take all", () => {
			const inputDeep = {
				prop: input,
				test: input,
				con: true,
			};

			const result = pipe(
				inputDeep,
				DPattern.match(
					{
						test: {
							type: "one",
							constProp: 11,
						},
					},
					(value) => {
						type Check = ExpectType<
							typeof value,
							{
								test: {
									prop1: true;
									type: "one";
									constProp: 11;
								};
								prop: Object1 | Object2 | Object3;
								con: boolean;
							},
							"strict"
						>;

						return "myValue";
					},
				),
			);

			expect(result).toStrictEqual(DPattern.result("myValue"));

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | {
					prop: TestObject;
					test: TestObject;
					con: boolean;
				},
				"strict"
			>;
		});
	});
});
