import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser nullable", () => {
	it("parses value using inner parser", () => {
		const schema = DDataParser.nullable(DDataParser.string());

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			string | null,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			string | null,
			"strict"
		>;

		const result = schema.parse("value");

		expect(result).toStrictEqual(DEither.success("value"));

		type _Check = ExpectType<
			typeof result,
			DEither.EitherError<DDataParser.DataParserError> | DEither.EitherSuccess<string | null>,
			"strict"
		>;
	});

	it("returns success for null", () => {
		const schema = DDataParser.nullable(DDataParser.number());

		expect(schema.parse(null)).toStrictEqual(DEither.success(null));
	});

	it("fails when inner parser fails", () => {
		const inner = DDataParser.number({ errorMessage: "not-number" });
		const schema = DDataParser.nullable(inner, { errorMessage: "nullable.invalid" });

		const result = schema.parse("nope");

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					inner,
					"nope",
				),
			),
		);
	});

	describe("async", () => {
		it("parses value using inner parser", async() => {
			const schema = DDataParser.nullable(DDataParser.string());

			const result = await schema.asyncParse("value");

			expect(result).toStrictEqual(DEither.success("value"));
		});

		it("returns success for null", async() => {
			const schema = DDataParser.nullable(DDataParser.number());

			const result = await schema.asyncParse(null);

			expect(result).toStrictEqual(DEither.success(null));
		});

		it("fails when inner parser fails", async() => {
			const inner = DDataParser.number({ errorMessage: "not-number" });
			const schema = DDataParser.nullable(inner, { errorMessage: "nullable.invalid" });

			const result = await schema.asyncParse("nope");

			expect(result).toStrictEqual(
				DEither.error(
					DDataParser.addIssue(
						DDataParser.createError(),
						inner,
						"nope",
					),
				),
			);
		});
	});
});
