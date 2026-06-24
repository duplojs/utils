import { DDataParser, DDataParserExtended, DEither, type ExpectType } from "@scripts";

describe("DDataParserExtended.tuple", () => {
	it("refines output and input with predicate checker", () => {
		const parser = DDataParserExtended.tuple([
			DDataParserExtended.string(),
			DDataParserExtended.number(),
		]).addChecker(
			DDataParser.checkerRefine(
				(value): value is ["id", number] => value[0] === "id",
			),
		);

		type _CheckOut = ExpectType<
			DDataParserExtended.Output<typeof parser>,
			["id", number] & [string, number],
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParserExtended.Input<typeof parser>,
			["id", number] & [string, number],
			"strict"
		>;
	});

	it("parses tuple shape", () => {
		const parser = DDataParserExtended.tuple([
			DDataParserExtended.string(),
			DDataParserExtended.number(),
		]);

		const result = parser.parse(["a", 1]);
		expect(result).toStrictEqual(DEither.success(["a", 1]));

		type check = ExpectType<
			typeof result,
			DEither.Error<DDataParserExtended.DataParserError> | DEither.Success<[string, number]>,
			"strict"
		>;
	});

	it("create data parser tuple with checker", () => {
		const dataParser = DDataParserExtended.tuple(
			[
				DDataParserExtended.string(),
				DDataParserExtended.number(),
			],
			{
				checkers: [
					DDataParser.checkerRefine((value) => {
							type check = ExpectType<
								typeof value,
								[string, number],
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
						[string, number],
						"strict"
					>;
					return true;
			}),
		);
	});

	it("support min/max checker", () => {
		const schema = DDataParserExtended
			.tuple(
				[DDataParserExtended.string()],
				{
					rest: DDataParserExtended.number(),
				},
			)
			.max(5)
			.min(2);

		expect(schema.parse(["test", 1, 2]))
			.toStrictEqual(
				DEither.success(["test", 1, 2]),
			);
		expect(schema.parse(["test"]))
			.toStrictEqual(
				DEither.error(expect.any(Object)),
			);
		expect(schema.parse(["test", 1, 2, 3, 4, 5]))
			.toStrictEqual(
				DEither.error(expect.any(Object)),
			);
	});

	it("supports rest parser", () => {
		const parser = DDataParserExtended
			.tuple([DDataParserExtended.string()])
			.rest(DDataParserExtended.number());

		const successResult = parser.parse(["test", 1, 2]);
		expect(successResult).toStrictEqual(
			DEither.success(["test", 1, 2]),
		);
		expect(parser.parse(["test", "1"]))
			.toStrictEqual(
				DEither.error(expect.any(Object)),
			);

		type check = ExpectType<
			typeof successResult,
			DEither.Error<DDataParserExtended.DataParserError> | DEither.Success<[string, ...number[]]>,
			"strict"
		>;
	});
});
