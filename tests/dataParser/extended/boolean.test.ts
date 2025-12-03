import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.boolean", () => {
	it("parses boolean", () => {
		const parser = extended.boolean();
		const result = parser.parse(true);
		expect(result).toStrictEqual(DEither.success(true));

		type check = ExpectType<
			typeof result,
			DEither.EitherError<DDataParser.DataParserError> | DEither.EitherSuccess<boolean>,
			"strict"
		>;
	});

	it("coerces when enabled", () => {
		const parser = extended.boolean({ coerce: true });
		expect(parser.parse("true")).toStrictEqual(DEither.success(true));
	});
});
