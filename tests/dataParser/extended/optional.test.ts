import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.optional", () => {
	it("parses undefined and inner values", () => {
		const parser = extended.optional(extended.string());
		const undefinedResult = parser.parse(undefined);
		const valueResult = parser.parse("value");
		expect(undefinedResult).toStrictEqual(DEither.success(undefined));
		expect(valueResult).toStrictEqual(DEither.success("value"));

		type check = ExpectType<
			typeof valueResult,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<string | undefined>,
			"strict"
		>;
	});

	it("fails when inner parser fails", () => {
		const inner = extended.number({ errorMessage: "not-number" });
		const parser = extended.optional(inner);

		expect(parser.parse("oops")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
