import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser optional", () => {
	it("parses value using inner parser", () => {
		const schema = DDataParser.optional(DDataParser.string());

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			string | undefined,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			string | undefined,
			"strict"
		>;

		const result = schema.parse("value");

		expect(result).toStrictEqual(DEither.success("value"));

		type _Check = ExpectType<
			typeof result,
			DEither.EitherError<DDataParser.DataParserError> | DEither.EitherSuccess<string | undefined>,
			"strict"
		>;
	});

	it("returns success for undefined", () => {
		const schema = DDataParser.optional(DDataParser.number());

		expect(schema.parse(undefined)).toStrictEqual(DEither.success(undefined));
	});

	it("fails when inner parser fails", () => {
		const inner = DDataParser.number({ errorMessage: "not-number" });
		const schema = DDataParser.optional(inner, { errorMessage: "optional.invalid" });

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
			const schema = DDataParser.optional(DDataParser.string());

			const result = await schema.asyncParse("value");

			expect(result).toStrictEqual(DEither.success("value"));
		});

		it("returns success for undefined", async() => {
			const schema = DDataParser.optional(DDataParser.number());

			const result = await schema.asyncParse(undefined);

			expect(result).toStrictEqual(DEither.success(undefined));
		});

		it("fails when inner parser fails", async() => {
			const inner = DDataParser.number({ errorMessage: "not-number" });
			const schema = DDataParser.optional(inner, { errorMessage: "optional.invalid" });

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
