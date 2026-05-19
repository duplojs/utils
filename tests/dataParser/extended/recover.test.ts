import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.recover", () => {
	it("create data parser with checker", () => {
		const dataParser = extended.recover(extended.number(), 0, {
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<
						typeof value,
						number,
						"strict"
					>;
					return true;
				}),
			],
		}).addChecker(
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

	it("returns inner value on success and recovered value on failure", () => {
		const parser = extended.recover(extended.number(), 0);

		const result = parser.parse(10);
		expect(result).toStrictEqual(DEither.success(10));

		type check = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<number>,
			"strict"
		>;
	});

	it("fails when inner parser fails", () => {
		const parser = extended
			.recover(extended.number({ errorMessage: "not-number" }), 2);

		expect(parser.parse("invalid")).toStrictEqual(DEither.success(2));
	});
});
