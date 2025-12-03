import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.transform", () => {
	it("transforms value", () => {
		const parser = extended.transform(
			extended.number(),
			(value) => `#${value}`,
		);

		const result = parser.parse(5);
		expect(result).toStrictEqual(DEither.success("#5"));

		type check = ExpectType<
			typeof result,
			DEither.EitherError<DDataParser.DataParserError> | DEither.EitherSuccess<string>,
			"strict"
		>;
	});

	it("propagates inner failure", () => {
		const inner = extended.number({ errorMessage: "not-number" });
		const parser = extended.transform(inner, (value) => value);

		expect(parser.parse("oops")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
