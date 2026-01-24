import { type AnyFunction, type AnyValue, DPattern, equal, type ExpectType, isType } from "@scripts";

describe("pattern match builder", () => {
	it("matches with builder and falls back to otherwise", () => {
		expect(
			DPattern.match<"foo" | "bar">("foo")
				.with(
					"foo",
					(value) => {
						type Check = ExpectType<
							typeof value,
							"foo",
							"strict"
						>;

						return 12;
					},
				)
				.otherwise((rest) => {
					type Check = ExpectType<
						typeof rest,
						"bar",
						"strict"
					>;

					return `rest-${rest}`;
				}),
		).toBe(12);

		expect(
			DPattern.match<"foo" | "bar">("bar")
				.when(equal("foo"), (value) => {
					type Check = ExpectType<
						typeof value,
						"foo",
						"strict"
					>;

					return 12;
				})
				.otherwise((rest) => `rest-${rest}`),
		).toBe("rest-bar");
	});

	it("applies first matching with", () => {
		expect(
			DPattern.match<"foo" | "bar" | "baz">("bar")
				.with("foo", () => "first")
				.with("bar", () => 24)
				.with("baz", () => "last")
				.exhaustive(),
		).toBe(24);
	});

	it("supports predicate via when", () => {
		const result = DPattern.match<number | string>(42)
			.when(isType("number"), (num) => num + 1)
			.otherwise((rest) => String(rest));

		type Check = ExpectType<
			typeof result,
			string | number,
			"strict"
		>;

		expect(result).toBe(43);
	});

	it("supports predicate via whenNot", () => {
		const result = DPattern.match(false ? [1] : undefined)
			.whenNot(
				isType("array"),
				(value) => {
					type Check = ExpectType<
						typeof value,
						undefined,
						"strict"
					>;

					return <const>"isDown";
				},
			)
			.otherwise((value) => value);

		type check = ExpectType<
			typeof result,
			"isDown" | number[],
			"strict"
		>;

		expect(result).toBe("isDown");
	});

	it("throws when exhaustive is not satisfied", () => {
		const builder = DPattern.match<"foo" | "bar">("bar")
			.with("foo", () => "ok");

		expect(() => (builder.exhaustive as unknown as AnyFunction)()).toThrow(DPattern.InvalidExhaustivePatternError);
	});

	it("returns value when exhaustive matches", () => {
		expect(
			DPattern.match<"foo" | "bar">("foo")
				.with("foo", (value) => `yes-${value}`)
				.when(equal("bar"), () => 12)
				.exhaustive(),
		).toBe("yes-foo");
	});

	it("supports unknown value", () => {
		void DPattern.match(42 as unknown)
			.with(
				isType("number"),
				(value) => {
					type check = ExpectType<
						typeof value,
						number,
						"strict"
					>;
				},
			)
			.with(
				isType("object"),
				(value) => {
					type check = ExpectType<
						typeof value,
						object,
						"strict"
					>;
				},
			)
			.with(
				isType("array"),
				(value) => {
					type check = ExpectType<
						typeof value,
						AnyValue[],
						"strict"
					>;
				},
			)
			.with(
				isType("function"),
				(value) => {
					type check = ExpectType<
						typeof value,
						AnyFunction,
						"strict"
					>;
				},
			)
			.otherwise(
				(value) => {
					type check = ExpectType<
						typeof value,
						string | bigint | boolean | null | undefined,
						"strict"
					>;
				},
			);
	});

	it("supports deep unknown value", () => {
		void DPattern.match({ test: 42 as unknown })
			.with(
				{
					test: DPattern.union(
						isType("string"),
						isType("number"),
					),
				},
				(value) => {
					type check = ExpectType<
						typeof value,
						{
							test: string | number;
						},
						"strict"
					>;
				},
			)
			.with(
				{ test: isType("object") },
				(value) => {
					type check = ExpectType<
						typeof value,
						{
							test: object;
						},
						"strict"
					>;
				},
			)
			.with(
				{
					test: DPattern.union(
						isType("array"),
						isType("function"),
					),
				},
				(value) => {
					type check = ExpectType<
						typeof value,
						{
							test: AnyFunction | AnyValue[];
						},
						"strict"
					>;
				},
			)
			.otherwise(
				(value) => {
					type check = ExpectType<
						typeof value,
						{
							test?: bigint | boolean | null | undefined;
						},
						"strict"
					>;
				},
			);
	});

	it("Incomplete union on input", () => {
		const input = {
			rr: "ok",
		} as {
			test: string;
			tt: string;
			jj: { type: "oo" } | { type: "pp" };
		} | { rr: string };

		const result = DPattern.match(input)
			.with(
				DPattern.union(
					{
						test: "ok",
					},
					{
						tt: "ok",
						jj: { type: "oo" },
					},
				),
				(value) => {
						type check = ExpectType<
							typeof value,
							{
								tt: string;
								jj: {
									type: "oo";
								} | {
									type: "pp";
								};
								test: "ok";
							} | {
								test: string;
								tt: "ok";
								jj: {
									type: "oo";
								};
							},
							"strict"
						>;

						return "with" as const;
				},
			)
			.otherwise((rest) => {
					type check = ExpectType<
						typeof rest,
						{
							test: string;
							tt: string;
							jj: {
								type: "oo";
							} | {
								type: "pp";
							};
						} | {
							rr: string;
						},
						"strict"
					>;

					return "otherwise" as const;
			});

		type check = ExpectType<
			typeof result,
			"with" | "otherwise",
			"strict"
		>;
	});
});
