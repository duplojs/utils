import { DPattern, DString, type ExpectType, pipe } from "@scripts";

describe("union discriminate object", () => {
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

	it("union on deep props", () => {
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

	it("union on deep object", () => {
		const inputDeep = {
			prop: input,
			test: input,
			con: true,
		};

		const result = pipe(
			inputDeep,
			DPattern.match(
				DPattern.union(
					{
						test: {
							type: "one",
						},
					},
					{
						prop: {
							type: "two",
						},
					},
				),
				(value) => {
					type Check = ExpectType<
						typeof value,
						{
							prop: TestObject;
							con: boolean;
							test: Object1;
						} | {
							test: TestObject;
							con: boolean;
							prop: Object2;
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

	it("union on prop of object in array", () => {
		const inputArray = [input];

		const result = pipe(
			inputArray,
			DPattern.match(
				[{ type: DPattern.union("one", "three") }],
				(value) => {
					type Check = ExpectType<
						typeof value,
						[Object1 | Object3, ...TestObject[]],
						"strict"
					>;
					return "myValue";
				},
			),
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			DPattern.PatternResult<"myValue"> | TestObject[],
			"strict"
		>;
	});

	it("union on array with specific objet", () => {
		const inputArray = [input];

		const result = pipe(
			inputArray,
			DPattern.match(
				DPattern.union(
					[{ type: "one" }],
					[
						{
							prop3: true,
							constProp: 1,
						},
					],
				),
				(value) => {
					type Check = ExpectType<
						typeof value,
						[Object1, ...TestObject[]] | [{
							type: "three";
							prop3: true;
							constProp: 1;
						}, ...TestObject[]],
						"strict"
					>;
					return "myValue";
				},
			),
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			DPattern.PatternResult<"myValue"> | TestObject[],
			"strict"
		>;
	});

	it("union on array with specific objet", () => {
		const inputArray = [input];

		const result = pipe(
			inputArray,
			DPattern.match(
				[
					DPattern.union(
						{ type: "one" },
						{ constProp: 3 },
					),
				],
				(value) => {
					type Check = ExpectType<
						typeof value,
						[Object1 | {
							type: "one";
							prop1: true;
							constProp: 3;
						} | {
							type: "two";
							prop2: true;
							constProp: 3;
						} | {
							type: "three";
							prop3: true;
							constProp: 3;
						}, ...TestObject[]],
						"strict"
					>;
					return "myValue";
				},
			),
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			DPattern.PatternResult<"myValue"> | TestObject[],
			"strict"
		>;
	});

	it("union on prop of object in tuple", () => {
		const inputArray = [input, input] as const;

		const result = pipe(
			inputArray,
			DPattern.match(
				[{ type: DPattern.union("one", "three") }],
				(value) => {
					type Check = ExpectType<
						typeof value,
						[Object1 | Object3, TestObject],
						"strict"
					>;
					return "myValue";
				},
			),
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			DPattern.PatternResult<"myValue"> | [Object2, TestObject],
			"strict"
		>;
	});

	it("union on prop of object in tuple", () => {
		const inputArray = [input, input] as const;

		const result = pipe(
			inputArray,
			DPattern.match(
				[{ type: DPattern.union("one", "three") }, { type: "one" }],
				(value) => {
					type Check = ExpectType<
						typeof value,
						[Object1 | Object3, Object1],
						"strict"
					>;
					return "myValue";
				},
			),
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			DPattern.PatternResult<"myValue"> | readonly [TestObject, TestObject],
			"strict"
		>;
	});

	it("union on tuple with prop of object", () => {
		const inputArray = [input, input] as const;

		const result = pipe(
			inputArray,
			DPattern.match(
				DPattern.union(
					[{ type: "one" }, { prop1: true }],
					[{ type: "three" }, { type: "two" }],
				),
				(value) => {
					type Check = ExpectType<
						typeof value,
						[Object1, Object1] | [Object3, Object2],
						"strict"
					>;
					return "myValue";
				},
			),
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			DPattern.PatternResult<"myValue"> | readonly [TestObject, TestObject],
			"strict"
		>;
	});

	it("union whit maybe all", () => {
		const result = pipe(
			input,
			DPattern.match(
				{
					type: DString.test(/^o/),
				},
				(value) => {
					type Check = ExpectType<
						typeof value,
						Object1 | Object2 | Object3,
						"strict"
					>;
					return "myValue";
				},
			),
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			DPattern.PatternResult<"myValue"> | Object1 | Object2 | Object3,
			"strict"
		>;
	});
});
