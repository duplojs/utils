import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser templateLiteral", () => {
	it("create data parser with checker", () => {
		const dataParser = DDataParser.templateLiteral(["id-", DDataParser.number()], {
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<typeof value, `id-${number}`, "strict">;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<typeof value, `id-${number}`, "strict">;
				return true;
			}),
		);

		void dataParser;
	});

	it("parses simple literal with number", () => {
		const schema = DDataParser.templateLiteral([
			"user-",
			DDataParser.number(),
		]);
		expect(schema.isAsynchronous()).toBe(false);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			`user-${number}`,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			`user-${number}`,
			"strict"
		>;

		const result = schema.parse("user-42");

		expect(result).toStrictEqual(DEither.success("user-42"));

		type _Check = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<`user-${number}`>,
			"strict"
		>;
	});

	it("parses template with email and number", () => {
		const schema = DDataParser.templateLiteral([
			DDataParser.string(),
			"-id-",
			DDataParser.number(),
		]);

		const input = "user@example.com-id-123";
		const result = schema.parse(input);

		expect(result).toStrictEqual(DEither.success(input));
	});

	it("parses decimal number when number parser allows floats", () => {
		const schema = DDataParser.templateLiteral([
			"amount-",
			DDataParser.number(),
		]);

		expect(schema.parse("amount-12")).toStrictEqual(DEither.success("amount-12"));
		expect(schema.parse("amount--15")).toStrictEqual(DEither.success("amount--15"));
		expect(schema.parse("amount-150.06")).toStrictEqual(DEither.success("amount-150.06"));
		expect(schema.parse("amount-0")).toStrictEqual(DEither.success("amount-0"));
		expect(schema.parse("amount-0.5")).toStrictEqual(DEither.success("amount-0.5"));
		expect(schema.parse("amount-00")).toStrictEqual(DEither.success("amount-00"));
		expect(schema.parse("amount-015")).toStrictEqual(DEither.success("amount-015"));
		expect(schema.parse("amount-0x10")).toStrictEqual(DEither.success("amount-0x10"));
		expect(schema.parse("amount-0b10")).toStrictEqual(DEither.success("amount-0b10"));
		expect(schema.parse("amount-0o10")).toStrictEqual(DEither.success("amount-0o10"));
		expect(schema.parse("amount-1e3")).toStrictEqual(DEither.success("amount-1e3"));
		expect(schema.parse("amount-+12")).toStrictEqual(DEither.success("amount-+12"));
		expect(schema.parse("amount-.5")).toStrictEqual(DEither.success("amount-.5"));
		expect(schema.parse("amount-12.")).toStrictEqual(DEither.success("amount-12."));
	});

	it("treats non-finite primitive number parts like number parser parts", () => {
		const schema = DDataParser.templateLiteral([
			"metric-",
			Number.NaN,
			"-",
			Infinity,
			"-",
			-Infinity,
		]);

		type _CheckInput = ExpectType<
			DDataParser.Input<typeof schema>,
			`metric-${number}-${number}-${number}`,
			"strict"
		>;

		expect(schema.parse("metric-1-2-3")).toStrictEqual(DEither.success("metric-1-2-3"));
		expect(schema.parse("metric-NaN-Infinity--Infinity")).toStrictEqual(DEither.error(expect.any(Object)));
	});

	it("fails when string does not match pattern", () => {
		const schema = DDataParser.templateLiteral([
			"user-",
			DDataParser.number(),
		], {
			errorMessage: "invalid.template",
		});

		const invalid = "user-id";
		const result = schema.parse(invalid);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: `string matching template literal pattern ${schema.definition.pattern.source}`,
							path: "",
							data: invalid,
							message: "invalid.template",
						}),
					],
					currentPath: [],
				}),
			),
		);
	});

	it("complex pattern", () => {
		const schema = DDataParser.templateLiteral([
			"test-",
			DDataParser.number(),
			"-",
			DDataParser.bigint(),
			"-",
			DDataParser.boolean(),
			"-",
			DDataParser.string(),
			DDataParser.nil(),
			"-",
			DDataParser.empty(),
			"-",
			DDataParser.literal([
				"math",
				1,
				undefined,
				null,
				12n,
				false,
			]),
			"-",
			DDataParser.templateLiteral([
				"ok-",
				DDataParser.string(),
			]),
			null,
			true,
			false,
			undefined,
			12,
			12n,
		]);

		expect(schema.definition.pattern.source).toBe(
			"^(?:test\\-)(?:(?:[+-]?(?:(?:[0-9]+(?:\\.[0-9]*)?)|(?:\\.[0-9]+))(?:[eE][+-]?[0-9]+)?)|(?:0(?:[xX][0-9a-fA-F]+|[bB][01]+|[oO][0-7]+)))(?:\\-)(?:(?:(?:-?0(?:[xX][0-9a-fA-F]+|[bB][01]+|[oO][0-7]+))|(?:-?(?:0|[1-9][0-9]*)))n)(?:\\-)(?:true|false)(?:\\-)(?:[^]*)(?:null)(?:\\-)(?:undefined)(?:\\-)(?:(?:math)|(?:1)|(?:undefined)|(?:null)|(?:12n)|(?:false))(?:\\-)(?:(?:ok\\-)(?:[^]*))(?:null)(?:true)(?:false)(?:undefined)(?:12)(?:12n)$",
		);

		const result = schema.parse("test-0-20n-false-okokkokonull-undefined-undefined-ok-campani.mathieu@gmail.comnulltruefalseundefined1212n");

		expect(result).toStrictEqual(
			DEither.success("test-0-20n-false-okokkokonull-undefined-undefined-ok-campani.mathieu@gmail.comnulltruefalseundefined1212n"),
		);

		type _Check = ExpectType<
			typeof result,
			| DEither.Error<DDataParser.DataParserError>
			| DEither.Success<
				| `test-${number}-${bigint}n-false-${string}null-undefined-undefined-ok-${string}nulltruefalseundefined1212n`
				| `test-${number}-${bigint}n-false-${string}null-undefined-null-ok-${string}nulltruefalseundefined1212n`
				| `test-${number}-${bigint}n-false-${string}null-undefined-false-ok-${string}nulltruefalseundefined1212n`
				| `test-${number}-${bigint}n-false-${string}null-undefined-1-ok-${string}nulltruefalseundefined1212n`
				| `test-${number}-${bigint}n-false-${string}null-undefined-math-ok-${string}nulltruefalseundefined1212n`
				| `test-${number}-${bigint}n-false-${string}null-undefined-12n-ok-${string}nulltruefalseundefined1212n`
				| `test-${number}-${bigint}n-true-${string}null-undefined-undefined-ok-${string}nulltruefalseundefined1212n`
				| `test-${number}-${bigint}n-true-${string}null-undefined-null-ok-${string}nulltruefalseundefined1212n`
				| `test-${number}-${bigint}n-true-${string}null-undefined-false-ok-${string}nulltruefalseundefined1212n`
				| `test-${number}-${bigint}n-true-${string}null-undefined-1-ok-${string}nulltruefalseundefined1212n`
				| `test-${number}-${bigint}n-true-${string}null-undefined-math-ok-${string}nulltruefalseundefined1212n`
				| `test-${number}-${bigint}n-true-${string}null-undefined-12n-ok-${string}nulltruefalseundefined1212n`
			>,
			"strict"
		>;

		expect(schema.parse("test-0-20n-false-null-undefined-undefined-ok-campani.mathieu@gmail.comnulltruefalseundefined1212n"))
			.toStrictEqual(
				DEither.success("test-0-20n-false-null-undefined-undefined-ok-campani.mathieu@gmail.comnulltruefalseundefined1212n"),
			);

		expect(schema.parse("test-99999999-0n-true-AAAAAZZZZnullnull-undefined-math-ok-mathieu@gmail.comnulltruefalseundefined1212n"))
			.toStrictEqual(
				DEither.success("test-99999999-0n-true-AAAAAZZZZnullnull-undefined-math-ok-mathieu@gmail.comnulltruefalseundefined1212n"),
			);

		expect(schema.parse("test-0-20n-false-ull-undefined-undefined-ok-campani.mathieu@gmail.comnulltruefalseundefined1212n"))
			.toStrictEqual(
				DEither.error(expect.any(Object)),
			);

		expect(schema.parse("test-0-20n-false-nullnullundefined-undefined-ok-campani.mathieu@gmail.comnulltruefalseundefined1212n"))
			.toStrictEqual(
				DEither.error(expect.any(Object)),
			);

		expect(schema.parse("test-0-20nn-false-nullnull-undefined-undefined-ok-campani.mathieu@gmail.comnulltruefalseundefined1212n"))
			.toStrictEqual(
				DEither.error(expect.any(Object)),
			);

		expect(schema.parse("test-00-20n-false-nullnull-undefined-undefined-ok-campani.mathieu@gmail.comnulltruefalseundefined1212n"))
			.toStrictEqual(
				DEither.success("test-00-20n-false-nullnull-undefined-undefined-ok-campani.mathieu@gmail.comnulltruefalseundefined1212n"),
			);

		expect(schema.parse("test-0-020n-false-nullnull-undefined-undefined-ok-campani.mathieu@gmail.comnulltruefalseundefined1212n"))
			.toStrictEqual(
				DEither.error(expect.any(Object)),
			);
	});

	it("parses template with union of literal and nested template", () => {
		const schema = DDataParser.templateLiteral([
			DDataParser.union([
				DDataParser.literal(["static"]),
				DDataParser.templateLiteral([
					"dyn-",
					DDataParser.number(),
				]),
			]),
		]);

		expect(schema.parse("static")).toStrictEqual(DEither.success("static"));
		expect(schema.parse("dyn-50")).toStrictEqual(DEither.success("dyn-50"));
		expect(schema.parse("dyn-5.5")).toStrictEqual(DEither.success("dyn-5.5"));
	});

	it("parses nested template literal and literal parts with bigint suffixes", () => {
		const inner = DDataParser.templateLiteral([
			"inner-",
			DDataParser.literal([7n, 8n]),
			"-",
			DDataParser.bigint(),
		]);
		const schema = DDataParser.templateLiteral([
			"item-",
			DDataParser.bigint(),
			"-",
			DDataParser.literal([50n, 60n]),
			"-",
			inner,
			"-",
			DDataParser.literal(["tail", 90n]),
		]);

		const typedInput: DDataParser.Input<typeof schema> = "item-10n-50n-inner-7n-99n-tail";

		type _CheckInput = ExpectType<
			DDataParser.Input<typeof schema>,
			`item-${bigint}n-${50n | 60n}n-inner-${7n | 8n}n-${bigint}n-${"tail" | "90n"}`,
			"strict"
		>;

		type _CheckOutput = ExpectType<
			DDataParser.Output<typeof schema>,
			`item-${bigint}n-${50n | 60n}n-inner-${7n | 8n}n-${bigint}n-${"tail" | "90n"}`,
			"strict"
		>;

		const result = schema.parse(typedInput);

		expect(result).toStrictEqual(DEither.success(typedInput));
		expect(schema.parse("item-12n-60n-inner-8n-100n-90n")).toStrictEqual(
			DEither.success("item-12n-60n-inner-8n-100n-90n"),
		);
		expect(schema.parse("item--12n-60n-inner-8n--100n-90n")).toStrictEqual(
			DEither.success("item--12n-60n-inner-8n--100n-90n"),
		);
		expect(schema.parse("item-12-50n-inner-7n-99n-tail")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
		expect(schema.parse("item-012n-50n-inner-7n-99n-tail")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
		expect(schema.parse("item-+0x10n-50n-inner-7n-99n-tail")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);

		type _CheckResult = ExpectType<
			typeof result,
			| DEither.Error<DDataParser.DataParserError>
			| DEither.Success<DDataParser.Output<typeof schema>>,
			"strict"
		>;
	});
});
