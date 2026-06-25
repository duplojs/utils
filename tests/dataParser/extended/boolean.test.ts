import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.boolean", () => {
	it("refines output and input with predicate checker", () => {
		const parser = extended.boolean().addChecker(
			DDataParser.checkerRefine((value): value is true => value),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof parser>,
			true,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof parser>,
			true,
			"strict"
		>;
	});

	it("create data parser with checker", () => {
		const dataParser = extended.boolean({
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<
						typeof value,
						boolean,
						"strict"
					>;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<
					typeof value,
					boolean,
					"strict"
				>;
				return true;
			}),
		);

		void dataParser;
	});

	it("parses boolean", () => {
		const parser = extended.boolean();
		const result = parser.parse(true);
		expect(result).toStrictEqual(DEither.success(true));

		type check = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<boolean>,
			"strict"
		>;
	});

	it("coerces when enabled", () => {
		const parser = extended.boolean({ coerce: true });
		expect(parser.parse("true")).toStrictEqual(DEither.success(true));
	});
});
