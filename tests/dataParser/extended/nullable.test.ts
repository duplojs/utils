import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.nullable", () => {
	it("parses null and inner values", () => {
		const parser = extended.nullable(extended.number());
		const nullResult = parser.parse(null);
		const numberResult = parser.parse(5);
		expect(nullResult).toStrictEqual(DEither.success(null));
		expect(numberResult).toStrictEqual(DEither.success(5));

		type check = ExpectType<
			typeof nullResult,
			DEither.EitherError<DDataParser.DataParserError> | DEither.EitherSuccess<number | null>,
			"strict"
		>;
	});

	it("fails when inner parser fails", () => {
		const inner = extended.number({ errorMessage: "not-number" });
		const parser = extended.nullable(inner);

		expect(parser.parse("nope")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
