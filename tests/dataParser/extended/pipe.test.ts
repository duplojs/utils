import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.pipe", () => {
	it("refines output and input with predicate checker", () => {
		const parser = extended.pipe(
			extended.string(),
			extended.string(),
		).addChecker(
			DDataParser.checkerRefine((value): value is "value" => value === "value"),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof parser>,
			"value",
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof parser>,
			"value",
			"strict"
		>;
	});

	it("create data parser with checker", () => {
		const dataParser = extended.pipe(extended.number(), extended.string({ coerce: true }), {
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<
						typeof value,
						string,
						"strict"
					>;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<
					typeof value,
					string,
					"strict"
				>;
				return true;
			}),
		);

		void dataParser;
	});

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
