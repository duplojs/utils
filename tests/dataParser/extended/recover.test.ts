import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.recover", () => {
	it("returns inner value on success and recovered value on failure", () => {
		const parser = extended.recover(extended.number(), 0);

		const result = parser.parse(10);
		expect(result).toStrictEqual(DEither.success(10));

		type check = ExpectType<
			typeof result,
			DEither.EitherError<DDataParser.DataParserError> | DEither.EitherSuccess<number>,
			"strict"
		>;
	});

	it("fails when inner parser fails", () => {
		const parser = extended
			.recover(extended.number({ errorMessage: "not-number" }), 2);

		expect(parser.parse("invalid")).toStrictEqual(DEither.success(2));
	});
});
