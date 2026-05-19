import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.union", () => {
	it("create data parser with checker", () => {
		const dataParser = extended.union([extended.string(), extended.number()], {
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<
						typeof value,
						string | number,
						"strict"
					>;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<
					typeof value,
					string | number,
					"strict"
				>;
				return true;
			}),
		);

		void dataParser;
	});

	it("parses union options", () => {
		const parser = extended.union([
			extended.string(),
			extended.number(),
		]);

		const stringResult = parser.parse("value");
		const numberResult = parser.parse(10);
		expect(stringResult).toStrictEqual(DEither.success("value"));
		expect(numberResult).toStrictEqual(DEither.success(10));

		type check = ExpectType<
			typeof stringResult,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<string | number>,
			"strict"
		>;
	});
});
