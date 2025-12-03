import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.tuple", () => {
	it("parses tuple shape", () => {
		const parser = extended.tuple([
			extended.string(),
			extended.number(),
		]);

		const result = parser.parse(["a", 1]);
		expect(result).toStrictEqual(DEither.success(["a", 1]));

		type check = ExpectType<
			typeof result,
			DEither.EitherError<DDataParser.DataParserError> | DEither.EitherSuccess<[string, number]>,
			"strict"
		>;
	});

	it("support min/max checker", () => {
		const schema = extended
			.tuple(
				[extended.string()],
				{
					rest: extended.number(),
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
});
