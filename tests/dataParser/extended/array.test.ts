import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.array", () => {
	it("create data parser with checker", () => {
		const dataParser = extended.array(extended.number(), {
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<
						typeof value,
						number[],
						"strict"
					>;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<
					typeof value,
					number[],
					"strict"
				>;
				return true;
			}),
		);

		void dataParser;
	});

	it("parses array elements", () => {
		const parser = extended.array(extended.number());
		const result = parser.parse([1, 2]);
		expect(result).toStrictEqual(DEither.success([1, 2]));

		type check = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<number[]>,
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
