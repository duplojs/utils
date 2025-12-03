import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.array", () => {
	it("parses array elements", () => {
		const parser = extended.array(extended.number());
		const result = parser.parse([1, 2]);
		expect(result).toStrictEqual(DEither.success([1, 2]));

		type check = ExpectType<
			typeof result,
			DEither.EitherError<DDataParser.DataParserError> | DEither.EitherSuccess<number[]>,
			"strict"
		>;
	});

	it("supports min/max helpers", () => {
		const parser = extended.array(extended.number());
		expect(parser.min(2).parse([1])).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
		expect(parser.max(2).parse([1, 2, 3])).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});

	it("allows addChecker", () => {
		const parser = extended.array(extended.number());
		const enhanced = parser.addChecker(
			DDataParser.checkerArrayMin(2),
		);

		expect(enhanced.parse([1])).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
