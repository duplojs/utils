import { DDataParser, DDate, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.date", () => {
	it("parses TheDate values", () => {
		const parser = extended.date();
		const value: DDate.SerializedTheDate = "date42+";

		const result = parser.parse(value);
		expect(result).toStrictEqual(DEither.success(DDate.createOrThrow(value)));

		type check = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<DDate.TheDate>,
			"strict"
		>;
	});

	it("supports refine helper", () => {
		const parser = extended.date().refine(
			(date) => DDate.greaterThan(date, DDate.createOrThrow(0)),
			{ errorMessage: "date.positive" },
		);

		expect(parser.parse("date1+")).toStrictEqual(DEither.success(DDate.createOrThrow("date1+")));
		expect(parser.parse("date1-")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
