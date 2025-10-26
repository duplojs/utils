import { DDataParser, DEither, pipe, type ExpectType } from "@scripts";

describe("DDataParser object", () => {
	it("success parsing", () => {
		const schema = DDataParser.object({
			name: DDataParser.string(),
			age: DDataParser.union([
				DDataParser.number(),
				DDataParser.literal(undefined),
			]),
		});

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			{
				name: string;
				age?: number;
			},
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			{
				name: string;
				age?: number;
			},
			"strict"
		>;

		const result = schema.parse({
			name: "mathcovax",
			age: 40,
		});

		expect(result).toStrictEqual(DEither.success({
			name: "mathcovax",
			age: 40,
		}));

		type _CheckResult = ExpectType<
			typeof result,
			DEither.EitherError<DDataParser.DataParserError> | DEither.EitherSuccess<{
				name: string;
				age?: number;
			}>,
			"strict"
		>;
	});

	it("type error parsing", () => {
		const schema = DDataParser.object({
			name: DDataParser.string(),
		});

		const result = schema.parse("mathcovax");

		expect(result).toStrictEqual(DEither.error(
			DDataParser.addIssue(DDataParser.createError(), schema, "mathcovax"),
		));
	});

	it("key type error parsing", () => {
		const nameSchema = DDataParser.string();
		const schema = DDataParser.object({
			name: nameSchema,
		});

		const result = schema.parse({ name: 11 });

		expect(result).toStrictEqual(
			DEither.error(
				{
					...DDataParser.addIssue(
						DDataParser.setErrorPath(
							DDataParser.createError(),
							"name",
							0,
						),
						nameSchema,
						11,
					),
					currentPath: [],
				},
			),
		);
	});

	it("missing key error parsing", () => {
		const nameSchema = DDataParser.string();
		const schema = DDataParser.object({
			name: nameSchema,
			age: DDataParser.number(),
		});

		const result = schema.parse({ age: 10 });

		expect(result).toStrictEqual(
			DEither.error(
				{
					...DDataParser.addIssue(
						DDataParser.setErrorPath(
							DDataParser.createError(),
							"name",
							0,
						),
						nameSchema,
						undefined,
					),
					currentPath: [],
				},
			),
		);
	});

	describe("async", () => {
		it("success parsing", async() => {
			const schema = DDataParser.object({
				name: DDataParser.string(),
				age: DDataParser.union([
					DDataParser.number(),
					DDataParser.literal(undefined),
				]),
			});

			const result = await schema.asyncParse({
				name: "mathcovax",
				age: 40,
			});

			expect(result).toStrictEqual(DEither.success({
				name: "mathcovax",
				age: 40,
			}));

		type _CheckResult = ExpectType<
			typeof result,
			DEither.EitherError<DDataParser.DataParserError> | DEither.EitherSuccess<{
				name: string;
				age?: number;
			}>,
			"strict"
		>;
		});

		it("type error parsing", async() => {
			const schema = DDataParser.object({
				name: DDataParser.string(),
			});

			const result = await schema.asyncParse("mathcovax");

			expect(result).toStrictEqual(DEither.error(
				DDataParser.addIssue(DDataParser.createError(), schema, "mathcovax"),
			));
		});

		it("key type error parsing", async() => {
			const nameSchema = DDataParser.string();
			const schema = DDataParser.object({
				name: nameSchema,
			});

			const result = await schema.asyncParse({ name: 11 });

			expect(result).toStrictEqual(
				DEither.error(
					{
						...DDataParser.addIssue(
							DDataParser.setErrorPath(
								DDataParser.createError(),
								"name",
								0,
							),
							nameSchema,
							11,
						),
						currentPath: [],
					},
				),
			);
		});

		it("missing key error parsing", async() => {
			const nameSchema = DDataParser.string();
			const schema = DDataParser.object({
				name: nameSchema,
				age: DDataParser.number(),
			});

			const result = await schema.asyncParse({ age: 10 });

			expect(result).toStrictEqual(
				DEither.error(
					{
						...DDataParser.addIssue(
							DDataParser.setErrorPath(
								DDataParser.createError(),
								"name",
								0,
							),
							nameSchema,
							undefined,
						),
						currentPath: [],
					},
				),
			);
		});
	});
});
