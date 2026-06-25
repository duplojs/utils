import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.bigint", () => {
	it("refines output and input with predicate checker", () => {
		const parser = extended.bigint().addChecker(
			DDataParser.checkerRefine((value): value is 42n => value === 42n),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof parser>,
			42n,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof parser>,
			42n,
			"strict"
		>;
	});

	it("create data parser with checker", () => {
		const dataParser = extended.bigint({
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<
						typeof value,
						bigint,
						"strict"
					>;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<
					typeof value,
					bigint,
					"strict"
				>;
				return true;
			}),
		);

		void dataParser;
	});

	it("parses bigint", () => {
		const parser = extended.bigint();
		const result = parser.parse(5n);
		expect(result).toStrictEqual(DEither.success(5n));

		type check = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<bigint>,
			"strict"
		>;
	});

	it("supports min/max helpers", () => {
		const parser = extended.bigint();
		expect(parser.min(2n).parse(1n)).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
		expect(parser.max(2n).parse(3n)).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
