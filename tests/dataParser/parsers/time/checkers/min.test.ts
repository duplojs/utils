import { DDataParser, DEither, DDate, type ExpectType } from "@scripts";

describe("DDataParser time checker min", () => {
	it("allows times greater or equal to min", () => {
		const checker = DDataParser.checkerTimeMin(DDate.createTime(1, "minute"));
		const schema = DDataParser.time({
			checkers: [checker],
		});

		const resultEqual = schema.parse(DDate.createTime(60, "second"));
		const resultGreater = schema.parse(DDate.createTime(120, "second"));

		expect(resultEqual).toStrictEqual(DEither.success(DDate.createTime(60, "second")));
		expect(resultGreater).toStrictEqual(DEither.success(DDate.createTime(120, "second")));

		type checkEqual = ExpectType<
			typeof resultEqual,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<DDate.TheTime>,
			"strict"
		>;
	});

	it("fails times below minimum", () => {
		const checker = DDataParser.checkerTimeMin(DDate.createTime(1, "minute"));
		const schema = DDataParser.time({
			checkers: [checker],
			errorMessage: "time.min",
		});
		const input = DDate.createTime(30, "second");

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
			DEither.Error<DDataParser.DataParserError> | DEither.Success<DDate.TheTime>,
			"strict"
		>;
	});
});
