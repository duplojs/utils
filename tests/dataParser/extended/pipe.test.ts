import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.pipe", () => {
	it("pipelines parsers", () => {
		const schema = extended.pipe(
			extended.number(),
			extended.transform(extended.number(), (value) => value * 2),
		);

		const result = schema.parse(3);
		expect(result).toStrictEqual(DEither.success(6));

		type check = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<number>,
			"strict"
		>;
	});

	it("propagates input failure", () => {
		const inner = extended.number({ errorMessage: "not-number" });
		const schema = extended.pipe(inner, extended.number());

		expect(schema.parse("nope")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
