import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.number", () => {
	it("parses numbers", () => {
		const parser = extended.number();
		const result = parser.parse(10);
		expect(result).toStrictEqual(DEither.success(10));

		type check = ExpectType<
			typeof result,
			DEither.EitherError<DDataParser.DataParserError> | DEither.EitherSuccess<number>,
			"strict"
		>;
	});

	it("supports min/max helpers", () => {
		const parser = extended.number();

		expect(parser.min(5).parse(4)).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
		expect(parser.max(5).parse(6)).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});

	it("supports int helpers", () => {
		const parser = extended.number().int();

		expect(parser.parse(6.5)).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
		expect(parser.parse(3)).toStrictEqual(DEither.success(3));
	});

	it("provides int helper", () => {
		const parser = extended.int();
		expect(parser.parse(3)).toStrictEqual(DEither.success(3));
		expect(parser.parse(3.5)).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
