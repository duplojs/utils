import { DDataParser, DEither, pipe, type ExpectType } from "@scripts";

describe("DDataParser errorHandler", () => {
	it("create data parser with checker", () => {
		const dataParser = DDataParser.errorHandler(DDataParser.number(), () => null, {
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

	it("parses inner value when valid", () => {
		const schema = DDataParser.errorHandler(
			DDataParser.number(),
			() => "handled",
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			number,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			number,
			"strict"
		>;

		const result = schema.parse(42);

		expect(result).toStrictEqual(DEither.success(42));

		type _CheckResult = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<number>,
			"strict"
		>;
	});

	it("reassigns issue messages from matching parser sources", () => {
		const schema = DDataParser.errorHandler(
			DDataParser.number({ errorMessage: "initial-number-message" }),
			DDataParser.createErrorMessageTransformer(
				DDataParser.numberKind,
				() => "number-message",
			),
		);

		const result = schema.parse("invalid");

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "number",
							path: "",
							data: "invalid",
							message: "number-message",
						}),
					],
					currentPath: [],
				}),
			),
		);
	});

	it("keeps issue messages unchanged when transformers do not match", () => {
		const schema = DDataParser.errorHandler(
			DDataParser.number({ errorMessage: "initial-number-message" }),
			DDataParser.createErrorMessageTransformer(
				DDataParser.stringKind,
				() => "string-message",
			),
		);

		const result = schema.parse("invalid");

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "number",
							path: "",
							data: "invalid",
							message: "initial-number-message",
						}),
					],
					currentPath: [],
				}),
			),
		);
	});

	it("supports multiple transformers for parser and checker sources", () => {
		const schema = DDataParser.errorHandler(
			DDataParser.object({
				name: DDataParser.string({ errorMessage: "initial-string-message" }),
				age: DDataParser.number().addChecker(
					DDataParser.checkerNumberMin(18, { errorMessage: "initial-min-message" }),
				),
			}),
			[
				DDataParser.createErrorMessageTransformer(
					DDataParser.stringKind,
					() => "string-message",
				),
				DDataParser.createErrorMessageTransformer(
					DDataParser.checkerNumberMinKind,
					() => "min-message",
				),
			],
		);

		const result = schema.parse({
			name: 12,
			age: 10,
		});

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "string",
							path: "name",
							data: 12,
							message: "string-message",
						}),
						DDataParser.errorIssueKind.addTo({
							expected: "number >= 18",
							path: "age",
							data: 10,
							message: "min-message",
						}),
					],
					currentPath: [],
				}),
			),
		);
	});

	it("works in pipe composition", () => {
		const schema = pipe(
			DDataParser.number({ errorMessage: "initial-number-message" }),
			(inner) => DDataParser.errorHandler(
				inner,
				DDataParser.createErrorMessageTransformer(
					DDataParser.numberKind,
					() => "number-message",
				),
			),
		);

		const result = schema.parse("invalid");

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "number",
							path: "",
							data: "invalid",
							message: "number-message",
						}),
					],
					currentPath: [],
				}),
			),
		);
	});

	describe("async", () => {
		it("reassigns issue messages from asynchronous inner parser", async() => {
			const inner = DDataParser.transform(
				DDataParser.number({ errorMessage: "initial-number-message" }),
				async(value) => Promise.resolve(value),
			);
			const schema = DDataParser.errorHandler(
				inner,
				DDataParser.createErrorMessageTransformer(
					DDataParser.numberKind,
					() => "number-message",
				),
			);

			const result = await schema.asyncParse("invalid");

			expect(result).toStrictEqual(
				DEither.error(
					DDataParser.errorKind.addTo({
						issues: [
							DDataParser.errorIssueKind.addTo({
								expected: "number",
								path: "",
								data: "invalid",
								message: "number-message",
							}),
						],
						currentPath: [],
					}),
				),
			);
		});
	});

	describe("isAsynchronous", () => {
		it("returns false when inner parser is sync", () => {
			const schema = DDataParser.errorHandler(DDataParser.number(), () => null);

			expect(schema.isAsynchronous()).toBe(false);
		});

		it("returns true when inner parser is async", () => {
			const asyncInner = DDataParser.transform(
				DDataParser.number(),
				async(value) => Promise.resolve(value),
			);
			const schema = DDataParser.errorHandler(asyncInner, () => null);

			expect(schema.isAsynchronous()).toBe(true);
		});
	});
});
