import { DPattern, DString, forward, type ExpectType, type AnyValue } from "@scripts";

describe("pattern match", () => {
	it("match literal string", () => {
		const result = DPattern.match(
			"test" as "test" | "toto" | "tata",
			"test",
			(value) => {
				type Check = ExpectType<
					typeof value,
					"test",
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			"toto" | "tata" | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("not match literal string", () => {
		const result = DPattern.match(
			"tata" as "test" | "toto" | "tata",
			"test",
			(value) => {
				type Check = ExpectType<
					typeof value,
					"test",
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual("tata");

		type Check = ExpectType<
			typeof result,
			"toto" | "tata" | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("match string", () => {
		const result = DPattern.match(
			"test" as string,
			"test",
			(value) => {
				type Check = ExpectType<
					typeof value,
					"test",
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			string | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("not match string", () => {
		const result = DPattern.match(
			"titi" as string,
			"test",
			(value) => {
				type Check = ExpectType<
					typeof value,
					"test",
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual("titi");

		type Check = ExpectType<
			typeof result,
			string | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("match literal number", () => {
		const result = DPattern.match(
			11 as 11 | 22 | 33,
			11,
			(value) => {
				type Check = ExpectType<
					typeof value,
					11,
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			22 | 33 | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("not match literal number", () => {
		const result = DPattern.match(
			22 as 11 | 22 | 33,
			11,
			(value) => {
				type Check = ExpectType<
					typeof value,
					11,
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(22);

		type Check = ExpectType<
			typeof result,
			22 | 33 | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("match number", () => {
		const result = DPattern.match(
			10 as number,
			10,
			(value) => {
				type Check = ExpectType<
					typeof value,
					10,
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			number | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("not match number", () => {
		const result = DPattern.match(
			20 as number,
			10,
			(value) => {
				type Check = ExpectType<
					typeof value,
					10,
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(20);

		type Check = ExpectType<
			typeof result,
			number | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("match null", () => {
		const result = DPattern.match(
			null as "test" | null,
			null,
			(value) => {
				type Check = ExpectType<
					typeof value,
					null,
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			"test" | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("not match null", () => {
		const result = DPattern.match(
			"test" as "test" | null,
			null,
			(value) => {
				type Check = ExpectType<
					typeof value,
					null,
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual("test");

		type Check = ExpectType<
			typeof result,
			"test" | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("match undefined", () => {
		const result = DPattern.match(
			undefined as "test" | undefined,
			undefined,
			(value) => {
				type Check = ExpectType<
					typeof value,
					undefined,
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			"test" | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("not match undefined", () => {
		const result = DPattern.match(
			"test" as "test" | undefined,
			undefined,
			(value) => {
				type Check = ExpectType<
					typeof value,
					undefined,
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual("test");

		type Check = ExpectType<
			typeof result,
			"test" | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("match boolean", () => {
		const result = DPattern.match(
			true as boolean,
			true,
			(value) => {
				type Check = ExpectType<
					typeof value,
					true,
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			false | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("not match boolean", () => {
		const result = DPattern.match(
			true as boolean,
			false,
			(value) => {
				type Check = ExpectType<
					typeof value,
					false,
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(true);

		type Check = ExpectType<
			typeof result,
			true | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("match on maybe all", () => {
		const result = DPattern.match(
			"one" as "one" | "two",
			(value) => {
				type Check = ExpectType<
					typeof value,
					"one" | "two",
					"strict"
				>;

				return true;
			},
			(value) => {
				type Check = ExpectType<
					typeof value,
					"one" | "two",
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			"one" | "two" | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("match on predicate", () => {
		const result = DPattern.match(
			"one" as "one" | "two",
			DString.startsWith("o"),
			(value) => {
				type Check = ExpectType<
					typeof value,
					"one",
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			"two" | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("builder variant with single argument", () => {
		const match = DPattern.match<"foo" | "bar">("bar")
			.with("foo", (value) => {
				type Check = ExpectType<typeof value, "foo", "strict">;

				return "matched-foo";
			})
			.otherwise((rest) => {
				type Check = ExpectType<typeof rest, "bar", "strict">;

				return `rest-${rest}`;
			});

		expect(match).toBe("rest-bar");

		type Check = ExpectType<
			typeof match,
			string,
			"strict"
		>;
	});

	it("transforms unknown input into AnyValue in predicate pattern", () => {
		const result = DPattern.match(
			"test" as unknown,
			(value) => {
				type Check = ExpectType<
					typeof value,
					AnyValue,
					"strict"
				>;

				return true;
			},
			(value) => value,
		);

		expect(result).toStrictEqual(DPattern.result("test"));
	});
});
