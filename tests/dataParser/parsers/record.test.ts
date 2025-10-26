import { DDataParser, DEither, pipe, type ExpectType } from "@scripts";

describe("DDataParser record", () => {
	it("parses record of strings", () => {
		const schema = DDataParser.record(
			DDataParser.union([
				DDataParser.string(),
				DDataParser.number({ coerce: true }),
			]),
			DDataParser.string(),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			Record<string, string>,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			Record<string | number, string>,
			"strict"
		>;

		const input = {
			foo: "bar",
			1: "qux",
		};

		const result = schema.parse(input);

		expect(result).toStrictEqual(DEither.success(input));

		type _Check = ExpectType<
			typeof result,
			| DEither.EitherError<DDataParser.DataParserError>
			| DEither.EitherSuccess<Record<string, string>>,
			"strict"
		>;
	});

	it("fails when key parser rejects a key", () => {
		const keyParser = DDataParser.literal(["value", "tt"]);
		const valueParser = DDataParser.number();
		const schema = DDataParser.record(
			keyParser,
			valueParser,
			{ errorMessage: "record.invalid" },
		);

		const result = schema.parse({ forbidden: "testValue" });

		expect(result).toStrictEqual(
			pipe(
				DDataParser.createError(),
				(error) => DDataParser.setErrorPath(
					error,
					"forbidden",
					0,
				),
				(error) => DDataParser.addIssue(
					error,
					keyParser,
					"forbidden",
				),
				(error) => DDataParser.addIssue(
					error,
					valueParser,
					"testValue",
				),
				(error) => DEither.error({
					...error,
					currentPath: [],
				}),
			),
		);
	});

	it("fails when input is not an object", () => {
		const schema = DDataParser.record(
			DDataParser.string(),
			DDataParser.string(),
			{ errorMessage: "record.invalid" },
		);

		const result = schema.parse("not-an-object");

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					"not-an-object",
				),
			),
		);
	});

	describe("async", () => {
		it("parses record of strings", async() => {
			const schema = DDataParser.record(
				DDataParser.string(),
				DDataParser.string(),
			);

			const input = {
				foo: "bar",
				baz: "qux",
			};

			const result = await schema.asyncParse(input);

			expect(result).toStrictEqual(DEither.success(input));
		});

		it("fails when key parser rejects a key", async() => {
			const keyParser = DDataParser.literal(["value", "tt"]);
			const valueParser = DDataParser.number();
			const schema = DDataParser.record(
				keyParser,
				valueParser,
				{ errorMessage: "record.invalid" },
			);

			const result = await schema.asyncParse({ forbidden: "testValue" });

			expect(result).toStrictEqual(
				pipe(
					DDataParser.createError(),
					(error) => DDataParser.setErrorPath(
						error,
						"forbidden",
						0,
					),
					(error) => DDataParser.addIssue(
						error,
						keyParser,
						"forbidden",
					),
					(error) => DDataParser.addIssue(
						error,
						valueParser,
						"testValue",
					),
					(error) => DEither.error({
						...error,
						currentPath: [],
					}),
				),
			);
		});

		it("fails when input is not an object", async() => {
			const schema = DDataParser.record(
				DDataParser.string(),
				DDataParser.string(),
				{ errorMessage: "record.invalid" },
			);

			const result = await schema.asyncParse("not-an-object");

			expect(result).toStrictEqual(
				DEither.error(
					DDataParser.addIssue(
						DDataParser.createError(),
						schema,
						"not-an-object",
					),
				),
			);
		});
	});
});
