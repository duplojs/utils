import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.nil", () => {
	it("parses null", () => {
		const parser = extended.nil();
		const result = parser.parse(null);
		expect(result).toStrictEqual(DEither.success(null));

		type check = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<null>,
			"strict"
		>;
	});

	it("coerces string when enabled", () => {
		const parser = extended.nil({ coerce: true });
		expect(parser.parse("null")).toStrictEqual(DEither.success(null));
	});
});
