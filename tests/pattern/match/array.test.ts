import { DPattern, type ExpectType } from "@scripts";

describe("array", () => {
	it("simple", () => {
		const array = ["one", 2, 3n];

		const result = DPattern.match(
			{ array },
			{ array: ["one", 2, 3n] },
			(value) => {
				type Check = ExpectType<
					typeof value,
					{
						array: ["one", 2, 3n, ...(string | number | bigint)[]];
					},
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			{
				array: (string | number | bigint)[];
			} | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("tuple", () => {
		const array = ["one", 2, 3n] as ["one", 2, 3n] | ["two", 3, 4n] | ["one", ...string[]];

		const result = DPattern.match(
			{ array },
			{ array: ["one"] },
			(value) => {
				type Check = ExpectType<
					typeof value,
					{
						array: ["one", 2, 3n] | ["one", ...string[]];
					},
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			{
				array: ["two", 3, 4n];
			} | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("match with empty tuple", () => {
		const array = ["one", 2, 3n] as ["one", 2, 3n] | ["two", 3, 4n] | ["one", ...string[]];

		const result = DPattern.match(
			{ test: { array } },
			{ test: { array: [] } },
			(value) => {
				type Check = ExpectType<
					typeof value,
					{
						test: {
							array: ["one", 2, 3n] | ["two", 3, 4n] | ["one", ...string[]];
						};
					},
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("match tuple in tuple", () => {
		const array = ["one", 2, 3n] as ["one", 2, 3n] | ["two", 3, 4n] | ["one", ...string[]];

		const result = DPattern.match(
			[{ array }] as const,
			[{ array: ["one"] }],
			(value) => {
				type Check = ExpectType<
					typeof value,
					[
						{
							array: ["one", 2, 3n] | ["one", ...string[]];
						},
					],
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			DPattern.PatternResult<"myValue"> | [
				{
					array: ["two", 3, 4n];
				},
			],
			"strict"
		>;
	});

	it("match tuple in array", () => {
		const array = ["one", 2, 3n] as ["one", 2, 3n] | ["two", 3, 4n] | ["one", ...string[]];

		const result = DPattern.match(
			[{ array }],
			[{ array: ["one"] }],
			(value) => {
				type Check = ExpectType<
					typeof value,
					[
						{
							array: ["one", 2, 3n] | ["one", ...string[]];
						},
						...{
							array: ["one", 2, 3n] | ["two", 3, 4n] | ["one", ...string[]];
						}[],
					],
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			DPattern.PatternResult<"myValue"> | {
				array: ["one", 2, 3n] | ["two", 3, 4n] | ["one", ...string[]];
			}[],
			"strict"
		>;
	});

	it("match tuple with rest", () => {
		const array = ["one", 2, 3n] as ["one", 2, 3n] | ["two", 3, 4n] | ["one", ...string[]];

		const result = DPattern.match(
			{ array },
			{ array: ["one", "test"] },
			(value) => {
				type Check = ExpectType<
					typeof value,
					{
						array: ["one", "test", ...string[]];
					},
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual({ array });

		type Check = ExpectType<
			typeof result,
			DPattern.PatternResult<"myValue"> | {
				array: ["one", 2, 3n] | ["two", 3, 4n] | ["one", ...string[]];
			},
			"strict"
		>;
	});

	it("match tuple with object", () => {
		const array = [
			{
				type: "one",
				prop1: "test",
			},
		] as [{
			type: "one";
			prop1: string;
		}] | [{
			type: "two";
			prop2: number;
		}] | [{
			type: "three";
			prop3: {
				sub: bigint;
			};
		}];

		const result = DPattern.match(
			{ array },
			{ array: [{ type: "one" }] },
			(value) => {
				type Check = ExpectType<
					typeof value,
					{
						array: [{
							type: "one";
							prop1: string;
						}];
					},
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			DPattern.PatternResult<"myValue"> | {
				array: [{
					type: "two";
					prop2: number;
				}] | [{
					type: "three";
					prop3: {
						sub: bigint;
					};
				}];
			},
			"strict"
		>;
	});

	it("match tuple with object with unique props", () => {
		const array = [
			{
				type: "one",
				prop1: "test",
			},
		] as [{
			type: "one";
			prop1: string;
		}] | [{
			type: "two";
			prop2: number;
		}] | [{
			type: "three";
			prop3: {
				sub: bigint;
			};
		}];

		const result = DPattern.match(
			{ array },
			{ array: [{ prop1: "test" }] },
			(value) => {
				type Check = ExpectType<
					typeof value,
					{
						array: [{
							type: "one";
							prop1: "test";
						}];
					},
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			DPattern.PatternResult<"myValue"> | {
				array: [{
					type: "one";
					prop1: string;
				}] | [{
					type: "two";
					prop2: number;
				}] | [{
					type: "three";
					prop3: {
						sub: bigint;
					};
				}];
			},
			"strict"
		>;
	});

	it("builder variant on arrays", () => {
		const input = { array: ["one", 2, 3n] as ["one", number, 3n] | ["one", 1, 3n] | ["two", 3, 4n] };

		const result = DPattern.match(input)
			.with(
				{ array: ["one", 2] },
				(value) => {
					type Check = ExpectType<
						typeof value,
						{
							array: ["one", 2, 3n];
						},
						"strict"
					>;

					return "match-one";
				},
			)
			.with(
				{ array: ["one"] },
				(value) => {
					type Check = ExpectType<
						typeof value,
						{
							array: ["one", number, 3n] | ["one", 1, 3n];
						},
						"strict"
					>;

					return "match-here";
				},
			)
			.with(
				{ array: ["two"] },
				(rest) => {
				type Check = ExpectType<
					typeof rest,
					{
						array: ["two", 3, 4n];
					},
					"strict"
				>;

				return "other";
				},
			)
			.exhaustive();

		expect(result).toBe("match-one");
	});
});
