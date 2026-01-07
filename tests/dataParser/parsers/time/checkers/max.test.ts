import { DDataParser, DEither, DDate, type ExpectType } from "@scripts";

describe("DDataParser time checker max", () => {
	it("allows times less or equal to max", () => {
		const checker = DDataParser.checkerTimeMax(DDate.createTime(1, "minute"));
		const schema = DDataParser.time({
			checkers: [checker],
		});

		const resultEqual = schema.parse(DDate.createTime(60, "second"));
		const resultLess = schema.parse(DDate.createTime(30, "second"));

		expect(resultEqual).toStrictEqual(DEither.success("time60000+"));
		expect(resultLess).toStrictEqual(DEither.success("time30000+"));

		type checkEqual = ExpectType<
			typeof resultEqual,
			DEither.EitherError<DDataParser.DataParserError> | DEither.EitherSuccess<DDate.TheTime>,
			"strict"
		>;
	});

	it("fails times above maximum", () => {
		const checker = DDataParser.checkerTimeMax(DDate.createTime(1, "minute"));
		const schema = DDataParser.time({
			checkers: [checker],
			errorMessage: "time.max",
		});
		const input = DDate.createTime(90, "second");

		const result = schema.parse(input);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					checker,
					input,
				),
			),
		);

		type check = ExpectType<
			typeof result,
			DEither.EitherError<DDataParser.DataParserError> | DEither.EitherSuccess<DDate.TheTime>,
			"strict"
		>;
	});
});
