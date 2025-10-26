import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser array", () => {
	it("success parsing", () => {
		const schema = DDataParser.array(DDataParser.string());

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			string[],
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			string[],
			"strict"
		>;

		const result = schema.parse(["a", "b"]);

		expect(result).toStrictEqual(DEither.success(["a", "b"]));

		type _CheckResult = ExpectType<
			typeof result,
			DEither.EitherError<DDataParser.DataParserError> | DEither.EitherSuccess<string[]>,
			"strict"
		>;
	});

	it("fails when input is not an array", () => {
		const elementSchema = DDataParser.string();
		const schema = DDataParser.array(elementSchema);

		const result = schema.parse("not-array");

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					"not-array",
				),
			),
		);
	});

	it("fails when an element parser fails", () => {
		const elementSchema = DDataParser.string();
		const schema = DDataParser.array(elementSchema);

		const result = schema.parse([42, "valid"]);

		expect(result).toStrictEqual(
			DEither.error(
				{
					...DDataParser.addIssue(
						DDataParser.setErrorPath(
							DDataParser.createError(),
							"[0]",
							0,
						),
						elementSchema,
						42,
					),
					currentPath: [],
				},
			),
		);
	});

	describe("async", () => {
		it("success parsing", async() => {
			const schema = DDataParser.array(DDataParser.string());

			const result = await schema.asyncParse(["a", "b"]);

			expect(result).toStrictEqual(DEither.success(["a", "b"]));
		});

		it("fails when input is not an array", async() => {
			const elementSchema = DDataParser.string();
			const schema = DDataParser.array(elementSchema);

			const result = await schema.asyncParse("not-array");

			expect(result).toStrictEqual(
				DEither.error(
					DDataParser.addIssue(
						DDataParser.createError(),
						schema,
						"not-array",
					),
				),
			);
		});

		it("fails when an element parser fails", async() => {
			const elementSchema = DDataParser.string();
			const schema = DDataParser.array(elementSchema);

			const result = await schema.asyncParse([42, "valid"]);

			expect(result).toStrictEqual(
				DEither.error(
					{
						...DDataParser.addIssue(
							DDataParser.setErrorPath(
								DDataParser.createError(),
								"[0]",
								0,
							),
							elementSchema,
							42,
						),
						currentPath: [],
					},
				),
			);
		});
	});
});
