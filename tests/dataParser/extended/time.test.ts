import { DDataParser, DDate, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.time", () => {
	it("parses TheTime values", () => {
		const parser = extended.time();
		const value: DDate.SerializedTheTime = "time42+";

		const result = parser.parse(value);
		expect(result).toStrictEqual(DEither.success(DDate.createTimeOrThrow(value)));

		type check = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<DDate.TheTime>,
			"strict"
		>;
	});

	it("supports refine helper", () => {
		const parser = extended.time().refine(
			(time) => time.toNative() > 0,
			{ errorMessage: "time.positive" },
		);

		expect(parser.parse("time1+")).toStrictEqual(DEither.success(DDate.createTimeOrThrow("time1+")));
		expect(parser.parse("time1-")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});

	it("supports time min/max checkers", () => {
		const minParser = extended.time().min(DDate.createTime(1, "minute"));
		const maxParser = extended.time().max(DDate.createTime(1, "minute"));

		expect(minParser.parse("time30000+")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
		expect(minParser.parse("time60000+")).toStrictEqual(
			DEither.success(DDate.createTimeOrThrow("time60000+")),
		);
		expect(maxParser.parse("time90000+")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
		expect(maxParser.parse("time60000+")).toStrictEqual(
			DEither.success(DDate.createTimeOrThrow("time60000+")),
		);
	});
});
