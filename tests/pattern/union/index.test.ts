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

	it("other match", () => {
		const input: Test = {
			type: "tata",
		} as Test;

		const result = pipe(
			input,
			DPattern.match(
				DPattern.union(
					{ type: "tata" },
					{ type: "test" },
				),
				(value) => {
					type Check = ExpectType<
						typeof value,
						{
							type: "tata";
						} | {
							type: "test";
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
});
