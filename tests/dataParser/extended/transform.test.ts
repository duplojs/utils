import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.transform", () => {
	it("create data parser with checker", () => {
		const dataParser = extended.transform(
			extended.number(),
			(value) => value + 1,
			{
				checkers: [
					DDataParser.checkerRefine((value) => {
						// unresolved inference bug : value expect number
						type check = ExpectType<
							typeof value,
							unknown,
							"strict"
						>;
						return true;
					}),
				],
			},
		).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<
					typeof value,
					number,
					"strict"
				>;
				return true;
			}),
		);

		void dataParser;
	});

	it("transforms value", () => {
		const parser = extended.transform(
			extended.number(),
			(value) => `#${value}`,
		);

		const result = parser.parse(5);
		expect(result).toStrictEqual(DEither.success("#5"));

		type check = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<string>,
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
