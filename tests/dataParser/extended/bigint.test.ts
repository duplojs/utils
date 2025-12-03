import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.bigint", () => {
	it("parses bigint", () => {
		const parser = extended.bigint();
		const result = parser.parse(5n);
		expect(result).toStrictEqual(DEither.success(5n));

		type check = ExpectType<
			typeof result,
			DEither.EitherError<DDataParser.DataParserError> | DEither.EitherSuccess<bigint>,
			"strict"
		>;
	});

	it("supports min/max helpers", () => {
		const parser = extended.bigint();
		expect(parser.min(2n).parse(1n)).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
		expect(parser.max(2n).parse(3n)).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
