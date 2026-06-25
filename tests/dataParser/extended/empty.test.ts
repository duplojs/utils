import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.empty", () => {
	it("refines output and input with predicate checker", () => {
		const parser = extended.empty().addChecker(
			DDataParser.checkerRefine((value): value is undefined => value === undefined),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof parser>,
			undefined,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof parser>,
			undefined,
			"strict"
		>;
	});

	it("create data parser with checker", () => {
		const dataParser = extended.empty({
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<
						typeof value,
						undefined,
						"strict"
					>;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<
					typeof value,
					undefined,
					"strict"
				>;
				return true;
			}),
		);

		void dataParser;
	});

	it("parses undefined", () => {
		const parser = extended.empty();
		const result = parser.parse(undefined);
		expect(result).toStrictEqual(DEither.success(undefined));

		type check = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<undefined>,
			"strict"
		>;
	});

	it("coerces string when enabled", () => {
		const parser = extended.empty({ coerce: true });
		expect(parser.parse("undefined")).toStrictEqual(DEither.success(undefined));
	});
});
