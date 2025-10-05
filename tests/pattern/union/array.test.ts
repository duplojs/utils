import { type ExpectType, pipe } from "@scripts/common";
import { DPattern } from "@scripts/index";

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
		const input = ["one", 5, 7n] as ["one", 5, 7n] | ["two", 5n] | ["three", ...string[]];

		it("union on first value of tuple", () => {
			const result = pipe(
				input,
				DPattern.match(
					[DPattern.union("one", "two")],
					(value) => {
						type Check = ExpectType<
							typeof value,
							["one", 5, 7n] | ["two", 5n],
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
					DPattern.union(["one"], ["two"]),
					(value) => {
						type Check = ExpectType<
							typeof value,
							["one", 5, 7n] | ["two", 5n],
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
					[{ type: DPattern.union("tata", {}) }],
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
					{ input: [{ type: DPattern.union("tata", {}) }] },
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
	});
});
