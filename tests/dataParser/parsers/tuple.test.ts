import { DDataParser, DEither, pipe, type ExpectType } from "@scripts";

describe("DDataParser tuple", () => {
	it("parses fixed tuple shape", () => {
		const schema = DDataParser.tuple([
			DDataParser.string(),
			DDataParser.number(),
		]);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			[string, number],
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			[string, number],
			"strict"
		>;

		const result = schema.parse(["foo", 42]);

		expect(result).toStrictEqual(DEither.success(["foo", 42]));

		type _CheckResult = ExpectType<
			typeof result,
			DEither.EitherError<DDataParser.DataParserError> | DEither.EitherSuccess<[string, number]>,
			"strict"
		>;
	});

	it("parses tuple with rest parser", () => {
		const schema = DDataParser.tuple([DDataParser.string()], {
			rest: DDataParser.number(),
		});

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			[string, ...number[]],
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			[string, ...number[]],
			"strict"
		>;

		const result = schema.parse(["foo", 1, 2, 3]);

		expect(result).toStrictEqual(DEither.success(["foo", 1, 2, 3]));

		type _CheckResult = ExpectType<
			typeof result,
			DEither.EitherError<DDataParser.DataParserError> | DEither.EitherSuccess<[string, ...number[]]>,
			"strict"
		>;
	});

	it("fails when input is not array", () => {
		const schema = DDataParser.tuple([DDataParser.string()], {
			errorMessage: "tuple.invalid",
		});

		const result = schema.parse("invalid");

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					"invalid",
				),
			),
		);
	});

	it("collects element error with index path", () => {
		const stringParser = DDataParser.string();
		const numberParser = DDataParser.number();
		const schema = DDataParser.tuple(
			[
				stringParser,
				numberParser,
				numberParser,
			],
			{
				rest: stringParser,
			},
		);

		const result = schema.parse(["ok", "33", 20, "ok", 40, "yess"]);

		expect(result).toStrictEqual(
			pipe(
				DDataParser.createError(),
				(error) => DDataParser.setErrorPath(
					error,
					"[1]",
					0,
				),
				(error) => DDataParser.addIssue(
					error,
					numberParser,
					"33",
				),
				(error) => DDataParser.setErrorPath(
					error,
					"[4]",
					0,
				),
				(error) => DDataParser.addIssue(
					error,
					stringParser,
					40,
				),
				(error) => DEither.error({
					...error,
					currentPath: [],
				}),
			),
		);
	});

	describe("async", () => {
		it("parses fixed tuple shape", async() => {
			const schema = DDataParser.tuple([
				DDataParser.string(),
				DDataParser.number(),
			]);

			const result = await schema.asyncParse(["foo", 42]);

			expect(result).toStrictEqual(DEither.success(["foo", 42]));
		});

		it("parses tuple with rest parser", async() => {
			const schema = DDataParser.tuple([DDataParser.string()], {
				rest: DDataParser.number(),
			});

			const result = await schema.asyncParse(["foo", 1, 2, 3]);

			expect(result).toStrictEqual(DEither.success(["foo", 1, 2, 3]));
		});

		it("fails when input is not array", async() => {
			const schema = DDataParser.tuple([DDataParser.string()], {
				errorMessage: "tuple.invalid",
			});

			const result = await schema.asyncParse("invalid");

			expect(result).toStrictEqual(
				DEither.error(
					DDataParser.addIssue(
						DDataParser.createError(),
						schema,
						"invalid",
					),
				),
			);
		});

		it("collects element error with index path", async() => {
			const stringParser = DDataParser.string();
			const numberParser = DDataParser.number();
			const schema = DDataParser.tuple(
				[
					stringParser,
					numberParser,
					numberParser,
				],
				{
					rest: stringParser,
				},
			);

			const result = await schema.asyncParse(["ok", "33", 20, "ok", 40, "yess"]);

			expect(result).toStrictEqual(
				pipe(
					DDataParser.createError(),
					(error) => DDataParser.setErrorPath(
						error,
						"[1]",
						0,
					),
					(error) => DDataParser.addIssue(
						error,
						numberParser,
						"33",
					),
					(error) => DDataParser.setErrorPath(
						error,
						"[4]",
						0,
					),
					(error) => DDataParser.addIssue(
						error,
						stringParser,
						40,
					),
					(error) => DEither.error({
						...error,
						currentPath: [],
					}),
				),
			);
		});
	});
});
