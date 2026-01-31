import { DDataParser, DEither, type ExpectType, type DDate } from "@scripts";

const { extended } = DDataParser;

describe("extended.date", () => {
	it("parses TheDate values", () => {
		const parser = extended.date();
		const value: DDate.TheDate = "date42+";

		const result = parser.parse(value);
		expect(result).toStrictEqual(DEither.success(value));

		type check = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<DDate.TheDate>,
			"strict"
		>;
	});

	it("supports refine helper", () => {
		const parser = extended.date().refine(
			(date) => date.endsWith("+"),
			{ errorMessage: "date.positive" },
		);

		expect(parser.parse("date1+")).toStrictEqual(DEither.success("date1+"));
		expect(parser.parse("date1-")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
