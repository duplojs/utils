import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser pipe", () => {
	it("pipes input parser into output parser", () => {
		const schema = DDataParser.pipe(
			DDataParser.number({ coerce: true }),
			DDataParser.transform(DDataParser.number(), (value) => `#${value}` as const),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			`#${number}`,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			number,
			"strict"
		>;

		const result = schema.parse("10");

		expect(result).toStrictEqual(DEither.success("#10"));

		type _Check = ExpectType<
			typeof result,
			DEither.EitherError<DDataParser.DataParserError> | DEither.EitherSuccess<`#${number}`>,
			"strict"
		>;
	});

	it("fails when input parser fails", () => {
		const inputParser = DDataParser.number({ errorMessage: "not-number" });
		const schema = DDataParser.pipe(
			inputParser,
			DDataParser.number(),
		);

		const result = schema.parse("nope");

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					inputParser,
					"nope",
				),
			),
		);
	});

	it("fails when output parser fails", () => {
		const outputParser = DDataParser.string();
		const schema = DDataParser.pipe(
			DDataParser.number(),
			outputParser,
		);

		const result = schema.parse(5);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					outputParser,
					5,
				),
			),
		);
	});

	describe("async", () => {
		it("pipes input parser into output parser", async() => {
			const schema = DDataParser.pipe(
				DDataParser.number({ coerce: true }),
				DDataParser.transform(DDataParser.number(), (value) => `#${value}`),
			);

			const result = await schema.asyncParse("10");

			expect(result).toStrictEqual(DEither.success("#10"));
		});

		it("fails when input parser fails", async() => {
			const inputParser = DDataParser.number({ errorMessage: "not-number" });
			const schema = DDataParser.pipe(
				inputParser,
				DDataParser.number(),
			);

			const result = await schema.asyncParse("nope");

			expect(result).toStrictEqual(
				DEither.error(
					DDataParser.addIssue(
						DDataParser.createError(),
						inputParser,
						"nope",
					),

				),
			);
		});
	});
});
