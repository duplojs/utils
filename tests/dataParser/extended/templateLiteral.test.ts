import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.templateLiteral", () => {
	it("refines output and input with predicate checker", () => {
		const parser = extended.templateLiteral(["item-", extended.number()]).addChecker(
			DDataParser.checkerRefine(
				(value): value is "item-1" => value === "item-1",
			),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof parser>,
			"item-1",
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof parser>,
			"item-1",
			"strict"
		>;
	});

	it("create data parser with checker", () => {
		const dataParser = extended.templateLiteral(["item-", extended.number()], {
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<
						typeof value,
						`item-${number}`,
						"strict"
					>;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<
					typeof value,
					`item-${number}`,
					"strict"
				>;
				return true;
			}),
		);

		void dataParser;
	});

	it("parses structured string", () => {
		const parser = extended.templateLiteral([
			"item-",
			extended.number(),
		]);

		const result = parser.parse("item-5");
		expect(result).toStrictEqual(DEither.success("item-5"));
		expect(parser.parse("invalid")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);

		type check = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<`item-${number}`>,
			"strict"
		>;
	});
});
