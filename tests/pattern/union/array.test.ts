import { DPattern, type ExpectType, pipe } from "@scripts";

describe("union discriminate array", () => {
	describe("array", () => {
		const input = ["one", 5, 7n];

		it("union on first value of array", () => {
			const result = pipe(
				input,
				DPattern.match(
					[DPattern.union("one", "two")],
					(value) => {
						type Check = ExpectType<
							typeof value,
							["one" | "two", ...(string | number | bigint)[]],
							"strict"
						>;

						return "myValue";
					},
				),
			);

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | (string | number | bigint)[],
				"strict"
			>;
		});

		it("union on array", () => {
			const result = pipe(
				input,
				DPattern.match(
					DPattern.union(["one"], ["two"]),
					(value) => {
						type Check = ExpectType<
							typeof value,
							| ["one", ...(string | number | bigint)[]]
							| ["two", ...(string | number | bigint)[]],
							"strict"
						>;

						return "myValue";
					},
				),
			);

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | (string | number | bigint)[],
				"strict"
			>;
		});
	});

	describe("tuple", () => {
		const input = ["one", 5, 7n] as ["one", 5, 7n] | ["two", number] | ["three", ...string[]];

		it("union on first value of tuple", () => {
			const result = pipe(
				input,
				DPattern.match(
					[DPattern.union("one", "two")],
					(value) => {
						type Check = ExpectType<
							typeof value,
							["one", 5, 7n] | ["two", number],
							"strict"
						>;

						return "myValue";
					},
				),
			);

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | ["three", ...string[]],
				"strict"
			>;
		});

		it("union on tuple", () => {
			const result = pipe(
				input,
				DPattern.match(
					DPattern.union(["one"], ["two", 1]),
					(value) => {
						type Check = ExpectType<
							typeof value,
							["one", 5, 7n] | ["two", 1],
							"strict"
						>;

						return "myValue";
					},
				),
			);

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | ["two", number] | ["three", ...string[]],
				"strict"
			>;
		});
	});

	describe("array with object", () => {
		interface Test {
			type: "test" | "toto" | "tata" | {
				tt: "yy" | "oo";
				sub: "ta";
			};
		}

		const input: Test[] = [
			{
				type: "tata",
			},
		];

		it("union on object prop in array", () => {
			const result = pipe(
				input,
				DPattern.match(
					[{ type: DPattern.union("tata", { sub: "ta" }) }],
					(value) => {
						type Check = ExpectType<
							typeof value,
							[{
								type: "tata" | {
									tt: "yy" | "oo";
									sub: "ta";
								};
							}, ...Test[]],
							"strict"
						>;

						return "myValue";
					},
				),
			);

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | Test[],
				"strict"
			>;
		});

		it("union on array with object", () => {
			const result = pipe(
				input,
				DPattern.match(
					DPattern.union(
						[{ type: "tata" }],
						[{ type: { tt: DPattern.union("oo", "yy") } }],
					),
					(value) => {
						type Check = ExpectType<
							typeof value,
							| [{
								type: {
									tt: "yy" | "oo";
									sub: "ta";
								};
							}, ...Test[]]
							| [{
								type: "tata";
							}, ...Test[]],
							"strict"
						>;

						return "myValue";
					},
				),
			);

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | Test[],
				"strict"
			>;
		});

		it("object with union on array with object", () => {
			const result = pipe(
				{ input },
				DPattern.match(
					{
						input: DPattern.union(
							[{ type: "tata" }],
							[{ type: { tt: DPattern.union("oo", "yy") } }],
						),
					},
					(value) => {
						type Check = ExpectType<
							typeof value,
							{
								input: [{
									type: "tata";
								}, ...Test[]] | [{
									type: {
										tt: "yy" | "oo";
										sub: "ta";
									};
								}, ...Test[]];
							},
							"strict"
						>;

						return "myValue";
					},
				),
			);

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | { input: Test[] },
				"strict"
			>;
		});

		it("object with union on object prop in array", () => {
			const result = pipe(
				{ input },
				DPattern.match(
					{ input: [{ type: DPattern.union("tata", { sub: "ta" }) }] },
					(value) => {
						type Check = ExpectType<
							typeof value,
							{
								input: [{
									type: "tata" | {
										tt: "yy" | "oo";
										sub: "ta";
									};
								}, ...Test[]];
							},
							"strict"
						>;

						return "myValue";
					},
				),
			);

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | { input: Test[] },
				"strict"
			>;
		});

		it("object with union on object prop in array", () => {
			const result = pipe(
				{
					input,
					con: true,
				},
				DPattern.match(
					{
						input: [{ type: DPattern.union("tata", { sub: "ta" }) }],
						con: true,
					},
					(value) => {
						type Check = ExpectType<
							typeof value,
							{
								input: [{
									type: "tata" | {
										tt: "yy" | "oo";
										sub: "ta";
									};
								}, ...Test[]];
								con: true;
							},
							"strict"
						>;

						return "myValue";
					},
				),
			);

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | {
					input: Test[];
					con: boolean;
				},
				"strict"
			>;
		});
	});

	describe("tuple with object", () => {
		interface Test {
			type: "test" | "toto" | "tata" | {
				tt: "yy" | "oo";
				sub: "ta";
			};
		}

		const input = [
			{
				type: "tata",
			},
			1,
			"toto",
		] as [Test, number, ...string[]];

		it("union on object prop in tuple", () => {
			const result = pipe(
				input,
				DPattern.match(
					[{ type: DPattern.union("tata", { sub: "ta" }) }],
					(value) => {
						type Check = ExpectType<
							typeof value,
							[{
								type: "tata" | {
									tt: "yy" | "oo";
									sub: "ta";
								};
							}, number, ...string[]],
							"strict"
						>;

						return "myValue";
					},
				),
			);

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | [{
					type: "test" | "toto";
				}, number, ...string[]],
				"strict"
			>;
		});

		it("union on array with tuple", () => {
			const result = pipe(
				input,
				DPattern.match(
					DPattern.union(
						[{ type: "tata" }],
						[{ type: { tt: DPattern.union("oo", "yy") } }],
					),
					(value) => {
						type Check = ExpectType<
							typeof value,
							| [{
								type: "tata";
							}, number, ...string[]]
							| [{
								type: {
									tt: "yy" | "oo";
									sub: "ta";
								};
							}, number, ...string[]],
							"strict"
						>;

						return "myValue";
					},
				),
			);

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | [{
					type: "test" | "toto";
				}, number, ...string[]],
				"strict"
			>;
		});

		it("object with union on array with tuple", () => {
			const result = pipe(
				{ input },
				DPattern.match(
					{
						input: DPattern.union(
							[{ type: "tata" }],
							[{ type: { tt: DPattern.union("oo", "yy") } }],
						),
					},
					(value) => {
						type Check = ExpectType<
							typeof value,
							{
								input: [{
									type: "tata";
								}, number, ...string[]] | [{
									type: {
										tt: "yy" | "oo";
										sub: "ta";
									};
								}, number, ...string[]];
							},
							"strict"
						>;

						return "myValue";
					},
				),
			);

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | {
					input: [{
						type: "test" | "toto";
					}, number, ...string[]];
				},
				"strict"
			>;
		});

		it("object with union on object prop in tuple", () => {
			const result = pipe(
				{ input },
				DPattern.match(
					{ input: [{ type: DPattern.union("tata", { sub: "ta" }) }] },
					(value) => {
						type Check = ExpectType<
							typeof value,
							{
								input: [{
									type: "tata" | {
										tt: "yy" | "oo";
										sub: "ta";
									};
								}, number, ...string[]];
							},
							"strict"
						>;

						return "myValue";
					},
				),
			);

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | {
					input: [{
						type: "test" | "toto";
					}, number, ...string[]];
				},
				"strict"
			>;
		});

		it("object with union on object prop and number in tuple", () => {
			const result = pipe(
				{ input },
				DPattern.match(
					{ input: [{ type: DPattern.union("tata", { sub: "ta" }) }, 1] },
					(value) => {
						type Check = ExpectType<
							typeof value,
							{
								input: [{
									type: "tata" | {
										tt: "yy" | "oo";
										sub: "ta";
									};
								}, 1, ...string[]];
							},
							"strict"
						>;

						return "myValue";
					},
				),
			);

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | {
					input: [Test, number, ...string[]];
				},
				"strict"
			>;
		});
	});
});
