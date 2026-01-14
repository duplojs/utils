import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser templateLiteral", () => {
	it("parses simple literal with number", () => {
		const schema = DDataParser.templateLiteral([
			"user-",
			DDataParser.number(),
		]);

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

		const result = schema.parse("amount-12.45");

		expect(result).toStrictEqual(DEither.success("amount-12.45"));
	});

	it("fails for non integer when number parser has int checker", () => {
		const schema = DDataParser.templateLiteral([
			"count-",
			DDataParser.number({
				checkers: [DDataParser.checkerInt()],
			}),
		]);

		const invalid = "count-10.5";
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
			null,
			true,
			false,
			undefined,
			12,
			12n,
		]);

		expect(schema.definition.pattern.source).toBe(
			"^(?:test\\-)(?:-?[0-9]+(?:\\.[0-9]+)?)(?:\\-)(?:[0-9]+n)(?:\\-)(?:true|false)(?:\\-)(?:[^]*)(?:null)(?:\\-)(?:undefined)(?:\\-)(?:(?:math)|(?:1)|(?:undefined)|(?:null)|(?:12n)|(?:false))(?:\\-)(?:(?:ok\\-)(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,})(?:null)(?:true)(?:false)(?:undefined)(?:12)(?:12n)$",
		);

		const result = schema.parse("test-0-20n-false-okokkokonull-undefined-undefined-ok-campani.mathieu@gmail.comnulltruefalseundefined1212n");

		expect(result).toStrictEqual(
			DEither.success("test-0-20n-false-okokkokonull-undefined-undefined-ok-campani.mathieu@gmail.comnulltruefalseundefined1212n"),
		);

		type _Check = ExpectType<
			typeof result,
			| DEither.EitherError<DDataParser.DataParserError>
			| DEither.EitherSuccess<
				| `test-${number}-${bigint}-false-${string}null-undefined-undefined-ok-${string}nulltruefalseundefined1212n`
				| `test-${number}-${bigint}-false-${string}null-undefined-null-ok-${string}nulltruefalseundefined1212n`
				| `test-${number}-${bigint}-false-${string}null-undefined-false-ok-${string}nulltruefalseundefined1212n`
				| `test-${number}-${bigint}-false-${string}null-undefined-1-ok-${string}nulltruefalseundefined1212n`
				| `test-${number}-${bigint}-false-${string}null-undefined-math-ok-${string}nulltruefalseundefined1212n`
				| `test-${number}-${bigint}-false-${string}null-undefined-12-ok-${string}nulltruefalseundefined1212n`
				| `test-${number}-${bigint}-true-${string}null-undefined-undefined-ok-${string}nulltruefalseundefined1212n`
				| `test-${number}-${bigint}-true-${string}null-undefined-null-ok-${string}nulltruefalseundefined1212n`
				| `test-${number}-${bigint}-true-${string}null-undefined-false-ok-${string}nulltruefalseundefined1212n`
				| `test-${number}-${bigint}-true-${string}null-undefined-1-ok-${string}nulltruefalseundefined1212n`
				| `test-${number}-${bigint}-true-${string}null-undefined-math-ok-${string}nulltruefalseundefined1212n`
				| `test-${number}-${bigint}-true-${string}null-undefined-12-ok-${string}nulltruefalseundefined1212n`
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

		expect(schema.parse("test-99999999-0n-true-AAAAAZZZZnullnull-undefined--ok-mathieu@gmail.comnulltruefalseundefined1212n"))
			.toStrictEqual(
				DEither.error(expect.any(Object)),
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
	});

	it("parses template with regex constrained string segment", () => {
		const schema = DDataParser.templateLiteral([
			DDataParser.string({
				checkers: [DDataParser.checkerStringRegex(/^ID-[0-9]{3}$/)],
			}),
			"-",
			DDataParser.literal(["ok", "ko"]),
		]);

		const successResult = schema.parse("ID-123-ok");
		const failureResult = schema.parse("WRONG-ok");

		expect(successResult).toStrictEqual(DEither.success("ID-123-ok"));
		expect(failureResult).toStrictEqual(DEither.error(expect.any(Object)));
	});

	it("parses template with min and max constrained string", () => {
		const schema = DDataParser.templateLiteral([
			"tag-",
			DDataParser.string({
				checkers: [
					DDataParser.checkerStringMin(2),
					DDataParser.checkerStringMax(4),
				],
			}),
		]);

		expect(schema.parse("tag-ab")).toStrictEqual(DEither.success("tag-ab"));
		expect(schema.parse("tag-abc")).toStrictEqual(DEither.success("tag-abc"));
		expect(schema.parse("tag-abcd")).toStrictEqual(DEither.success("tag-abcd"));
		expect(schema.parse("tag-a")).toStrictEqual(DEither.error(expect.any(Object)));
		expect(schema.parse("tag-abcde")).toStrictEqual(DEither.error(expect.any(Object)));
	});

	it("parses template with union of literal and nested template", () => {
		const schema = DDataParser.templateLiteral([
			DDataParser.union([
				DDataParser.literal(["static"]),
				DDataParser.templateLiteral([
					"dyn-",
					DDataParser.number({
						checkers: [DDataParser.checkerInt()],
					}),
				]),
			]),
		]);

		expect(schema.parse("static")).toStrictEqual(DEither.success("static"));
		expect(schema.parse("dyn-50")).toStrictEqual(DEither.success("dyn-50"));
		expect(schema.parse("dyn-5.5")).toStrictEqual(DEither.error(expect.any(Object)));
	});
});
