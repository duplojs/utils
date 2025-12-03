import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.templateLiteral", () => {
	it("parses structured string", () => {
		const parser = extended.templateLiteral([
			"item-",
			extended.number(),
		]);

		const result = parser.parse("item-5");
		expect(result).toStrictEqual(DEither.success("item-5"));
		expect(parser.parse("invalid")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);

		type check = ExpectType<
			typeof result,
			DEither.EitherError<DDataParser.DataParserError> | DEither.EitherSuccess<`item-${number}`>,
			"strict"
		>;
	});
});
