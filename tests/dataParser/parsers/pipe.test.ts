import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser pipe", () => {
	it("create data parser with checker", () => {
		const dataParser = DDataParser.pipe(DDataParser.string(), DDataParser.number({ coerce: true }), {
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<typeof value, number, "strict">;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<typeof value, number, "strict">;
				return true;
			}),
		);

		void dataParser;
	});

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
			DEither.Error<DDataParser.DataParserError> | DEither.Success<`#${number}`>,
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
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "number",
							path: "(pipeIn)",
							data: "nope",
							message: "not-number",
						}),
					],
					currentPath: [],
				}),
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
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "string",
							path: "(pipeOut)",
							data: 5,
							message: undefined,
						}),
					],
					currentPath: [],
				}),
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
					DDataParser.errorKind.addTo({
						issues: [
							DDataParser.errorIssueKind.addTo({
								expected: "number",
								path: "(pipeIn)",
								data: "nope",
								message: "not-number",
							}),
						],
						currentPath: [],
					}),
				),
			);
		});
	});

	describe("isAsynchronous", () => {
		it("returns false when input and output parsers are sync", () => {
			const schema = DDataParser.pipe(
				DDataParser.number(),
				DDataParser.string(),
			);

			expect(schema.isAsynchronous()).toBe(false);
		});

		it("returns true when input parser is async", () => {
			const asyncInput = DDataParser.transform(
				DDataParser.string(),
				async(value) => Promise.resolve(value),
			);
			const schema = DDataParser.pipe(
				asyncInput,
				DDataParser.string(),
			);

			expect(schema.isAsynchronous()).toBe(true);
		});

		it("returns true when output parser is async", () => {
			const asyncOutput = DDataParser.transform(
				DDataParser.string(),
				async(value) => Promise.resolve(value),
			);
			const schema = DDataParser.pipe(
				DDataParser.string(),
				asyncOutput,
			);

			expect(schema.isAsynchronous()).toBe(true);
		});
	});
});
