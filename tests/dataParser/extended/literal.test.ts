import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.literal", () => {
	it("parses literal values", () => {
		const parser = extended.literal(["foo", "bar"]);
		const result = parser.parse("foo");
		expect(result).toStrictEqual(DEither.success("foo"));
		expect(parser.parse("baz")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);

		type check = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<"foo" | "bar">,
			"strict"
		>;
	});
});
