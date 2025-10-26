import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser bigint", () => {
	it("success parsing", () => {
		const schema = DDataParser.bigint();

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			bigint,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			bigint,
			"strict"
		>;

		const value = 42n;
		const result = schema.parse(value);

		expect(result).toStrictEqual(DEither.success(value));

		type _CheckResult = ExpectType<
			typeof result,
			DEither.EitherError<DDataParser.DataParserError> | DEither.EitherSuccess<bigint>,
			"strict"
		>;
	});

	it("fails parsing when value is not bigint", () => {
		const schema = DDataParser.bigint({
			errorMessage: "not-bigint",
		});

		const result = schema.parse(10);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					10,
				),
			),
		);
	});

	it("coerces string and number representations", () => {
		const schema = DDataParser.bigint({ coerce: true });

		expect(schema.parse("42")).toStrictEqual(DEither.success(42n));
		expect(schema.parse(7)).toStrictEqual(DEither.success(7n));
		expect(schema.parse(true)).toStrictEqual(DEither.success(1n));
	});
});
