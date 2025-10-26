import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser number", () => {
	it("success parsing", () => {
		const schema = DDataParser.number();

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			number,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			number,
			"strict"
		>;

		const result = schema.parse(42);

		expect(result).toStrictEqual(DEither.success(42));

		type _CheckResult = ExpectType<
			typeof result,
			DEither.EitherError<DDataParser.DataParserError> | DEither.EitherSuccess<number>,
			"strict"
		>;
	});

	it("error parsing", () => {
		const schema = DDataParser.number({ errorMessage: "error" });

		const result = schema.parse("42");

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					"42",
				),
			),
		);
	});

	it("success coercing parsing", () => {
		const schema = DDataParser.number({ coerce: true });

		const result = schema.parse("11");

		expect(result).toStrictEqual(DEither.success(11));
	});

	it("fails to coerce NaN", () => {
		const schema = DDataParser.number({ coerce: true });

		const result = schema.parse("not-a-number");

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					"not-a-number",
				),
			),
		);
	});

	it("rejects NaN values", () => {
		const schema = DDataParser.number();

		const result = schema.parse(Number.NaN);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					Number.NaN,
				),
			),
		);
	});
});
