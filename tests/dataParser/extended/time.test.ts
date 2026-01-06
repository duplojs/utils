import { DDataParser, DDate, DEither, type ExpectType } from "@scripts";
import { type TheTime } from "@scripts/date";

const { extended } = DDataParser;

describe("extended.time", () => {
	it("parses TheTime values", () => {
		const parser = extended.time();
		const value: TheTime = "time42+";

		const result = parser.parse(value);
		expect(result).toStrictEqual(DEither.success(value));

		type check = ExpectType<
			typeof result,
			DEither.EitherError<DDataParser.DataParserError> | DEither.EitherSuccess<TheTime>,
			"strict"
		>;
	});

	it("supports refine helper", () => {
		const parser = extended.time().refine(
			(time) => time.endsWith("+"),
			{ errorMessage: "time.positive" },
		);

		expect(parser.parse("time1+")).toStrictEqual(DEither.success("time1+"));
		expect(parser.parse("time1-")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});

	it("supports time min/max checkers", () => {
		const minChecker = DDataParser.checkerTimeMin("time60000+");
		const maxChecker = DDataParser.checkerTimeMax("time60000+");
		const minParser = extended.time().min(DDate.createTime(60000));
		const maxParser = extended.time().max(DDate.createTime(60000));

		expect(minParser.parse("time30000+")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
		expect(minParser.parse("time60000+")).toStrictEqual(
			DEither.success("time60000+"),
		);
		expect(maxParser.parse("time90000+")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
		expect(maxParser.parse("time60000+")).toStrictEqual(
			DEither.success("time60000+"),
		);
	});
});
