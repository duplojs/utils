import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.unknown", () => {
	it("passes through value", () => {
		const parser = extended.unknown();
		const value = { foo: "bar" };
		const result = parser.parse(value);
		expect(result).toStrictEqual(DEither.success(value));

		type check = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<unknown>,
			"strict"
		>;
	});
});
