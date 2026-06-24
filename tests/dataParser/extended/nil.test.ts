import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.nil", () => {
	it("refines output and input with predicate checker", () => {
		const parser = extended.nil().addChecker(
			DDataParser.checkerRefine((value): value is null => value === null),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof parser>,
			null,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof parser>,
			null,
			"strict"
		>;
	});

	it("create data parser with checker", () => {
		const dataParser = extended.nil({
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<
						typeof value,
						null,
						"strict"
					>;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<
					typeof value,
					null,
					"strict"
				>;
				return true;
			}),
		);

		void dataParser;
	});

	it("parses null", () => {
		const parser = extended.nil();
		const result = parser.parse(null);
		expect(result).toStrictEqual(DEither.success(null));

		type check = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<null>,
			"strict"
		>;
	});

	it("coerces string when enabled", () => {
		const parser = extended.nil({ coerce: true });
		expect(parser.parse("null")).toStrictEqual(DEither.success(null));
	});
});
