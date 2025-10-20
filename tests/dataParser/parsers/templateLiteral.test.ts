import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser templateLiteral", () => {
	it("parses simple literal with number", () => {
		const schema = DDataParser.templateLiteral([
			"user-",
			DDataParser.number(),
		] as const);

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
			DEither.EitherError<DDataParser.DataParserError> | DEither.EitherSuccess<`user-${number}`>,
			"strict"
		>;
	});

	it("parses template with email and number", () => {
		const schema = DDataParser.templateLiteral([
			DDataParser.string({
				checkers: [DDataParser.checkerEmail()],
			}),
			"-id-",
			DDataParser.number(),
		] as const);

		const input = "user@example.com-id-123";
		const result = schema.parse(input);

		expect(result).toStrictEqual(DEither.success(input));
	});

	it("fails when string does not match pattern", () => {
		const schema = DDataParser.templateLiteral([
			"user-",
			DDataParser.number(),
		] as const, {
			errorMessage: "invalid.template",
		});

		const invalid = "user-id";
		const result = schema.parse(invalid);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					invalid,
				),
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
				DDataParser.email(),
			]),
		]);

		expect(schema.definition.pattern.source).toBe(
			"^(?:test\\-)(:?[0-9]+)(?:\\-)(?:[0-9]+n)(?:\\-)(?:true|false)(?:\\-)(?:[^]*)(?:null)(?:\\-)(?:undefined)(?:\\-)(?:math|1|undefined|null|12n|false)(?:\\-)(?:(?:ok\\-)(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,})$",
		);

		const result = schema.parse("test-0-20n-false-okokkokonull-undefined-undefined-ok-campani.mathieu@gmail.com");

		expect(result).toStrictEqual(
			DEither.success("test-0-20n-false-okokkokonull-undefined-undefined-ok-campani.mathieu@gmail.com"),
		);

		type _Check = ExpectType<
			typeof result,
			| DEither.EitherError<DDataParser.DataParserError>
			| DEither.EitherSuccess<
				| `test-${number}-${bigint}-false-${string}null-undefined-undefined-ok-${string}`
				| `test-${number}-${bigint}-false-${string}null-undefined-null-ok-${string}`
				| `test-${number}-${bigint}-false-${string}null-undefined-false-ok-${string}`
				| `test-${number}-${bigint}-false-${string}null-undefined-1-ok-${string}`
				| `test-${number}-${bigint}-false-${string}null-undefined-math-ok-${string}`
				| `test-${number}-${bigint}-false-${string}null-undefined-12-ok-${string}`
				| `test-${number}-${bigint}-true-${string}null-undefined-undefined-ok-${string}`
				| `test-${number}-${bigint}-true-${string}null-undefined-null-ok-${string}`
				| `test-${number}-${bigint}-true-${string}null-undefined-false-ok-${string}`
				| `test-${number}-${bigint}-true-${string}null-undefined-1-ok-${string}`
				| `test-${number}-${bigint}-true-${string}null-undefined-math-ok-${string}`
				| `test-${number}-${bigint}-true-${string}null-undefined-12-ok-${string}`
			>,
			"strict"
		>;

		expect(schema.parse("test-0-20n-false-null-undefined-undefined-ok-campani.mathieu@gmail.com"))
			.toStrictEqual(
				DEither.success("test-0-20n-false-null-undefined-undefined-ok-campani.mathieu@gmail.com"),
			);

		expect(schema.parse("test-99999999-0n-true-AAAAAZZZZnullnull-undefined-math-ok-mathieu@gmail.com"))
			.toStrictEqual(
				DEither.success("test-99999999-0n-true-AAAAAZZZZnullnull-undefined-math-ok-mathieu@gmail.com"),
			);

		expect(schema.parse("test-99999999-0n-true-AAAAAZZZZnullnull-undefined--ok-mathieu@gmail.com"))
			.toStrictEqual(
				DEither.error(expect.any(Object)),
			);

		expect(schema.parse("test-0-20n-false-ull-undefined-undefined-ok-campani.mathieu@gmail.com"))
			.toStrictEqual(
				DEither.error(expect.any(Object)),
			);

		expect(schema.parse("test-0-20n-false-nullnullundefined-undefined-ok-campani.mathieu@gmail.com"))
			.toStrictEqual(
				DEither.error(expect.any(Object)),
			);

		expect(schema.parse("test-0-20nn-false-nullnull-undefined-undefined-ok-campani.mathieu@gmail.com"))
			.toStrictEqual(
				DEither.error(expect.any(Object)),
			);
	});
});
