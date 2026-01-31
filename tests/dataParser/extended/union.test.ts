import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.union", () => {
	it("parses union options", () => {
		const parser = extended.union([
			extended.string(),
			extended.number(),
		]);

		const stringResult = parser.parse("value");
		const numberResult = parser.parse(10);
		expect(stringResult).toStrictEqual(DEither.success("value"));
		expect(numberResult).toStrictEqual(DEither.success(10));

		type check = ExpectType<
			typeof stringResult,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<string | number>,
			"strict"
		>;
	});
});
