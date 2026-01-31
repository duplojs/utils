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
			DEither.Error<DDataParser.DataParserError> | DEither.Success<string | undefined>,
			"strict"
		>;
	});

	it("returns success for undefined", () => {
		const schema = DDataParser.optional(DDataParser.number());

		expect(schema.parse(undefined)).toStrictEqual(DEither.success(undefined));
	});

	it("returns coalescing value when undefined", () => {
		const schema = DDataParser.optional(
			DDataParser.number(),
			{ coalescingValue: 5 },
		);

		expect(schema.parse(undefined)).toStrictEqual(DEither.success(5));

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			number,
			"strict"
		>;
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

		it("returns coalescing value when undefined", async() => {
			const schema = DDataParser.optional(
				DDataParser.number(),
				{ coalescingValue: 5 },
			);

			const result = await schema.asyncParse(undefined);

			expect(result).toStrictEqual(DEither.success(5));
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

	describe("isAsynchronous", () => {
		it("returns false when inner parser is sync", () => {
			const schema = DDataParser.optional(DDataParser.string());

			expect(schema.isAsynchronous()).toBe(false);
		});

		it("returns true when inner parser is async", () => {
			const asyncInner = DDataParser.transform(
				DDataParser.string(),
				async(value) => Promise.resolve(value),
			);
			const schema = DDataParser.optional(asyncInner);

			expect(schema.isAsynchronous()).toBe(true);
		});
	});
});
