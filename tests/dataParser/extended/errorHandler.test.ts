import { DDataParser, DEither, pipe, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.errorHandler", () => {
	it("create data parser with checker", () => {
		const dataParser = extended.number().errorHandler(() => null, {
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<
						typeof value,
						number,
						"strict"
					>;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<
					typeof value,
					number,
					"strict"
				>;
				return true;
			}),
		);

		void dataParser;
	});

	it("reassigns issue messages from an extended parser instance", () => {
		const parser = extended.number({ errorMessage: "initial-number-message" })
			.errorHandler(
				DDataParser.createErrorMessageTransformer(
					DDataParser.numberKind,
					() => "number-message",
				),
			);

		const result = parser.parse("invalid");

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

		type check = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<number>,
			"strict"
		>;
	});

	it("creates an error handler parser from the extended namespace function", () => {
		const parser = extended.errorHandler(
			extended.number({ errorMessage: "initial-number-message" }),
			DDataParser.createErrorMessageTransformer(
				DDataParser.numberKind,
				() => "number-message",
			),
		);

		const result = parser.parse("invalid");

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

		type check = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<number>,
			"strict"
		>;
	});

	it("creates an error handler parser from the extended namespace function with multiple transformers", () => {
		const parser = pipe(
			extended.string({ errorMessage: "initial-string-message" }),
			(inner) => extended.errorHandler(
				inner,
				[
					DDataParser.createErrorMessageTransformer(
						DDataParser.numberKind,
						() => "number-message",
					),
					DDataParser.createErrorMessageTransformer(
						DDataParser.stringKind,
						() => "string-message",
					),
				],
			),
		);

		const result = parser.parse(12);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "string",
							path: "",
							data: 12,
							message: "string-message",
						}),
					],
					currentPath: [],
				}),
			),
		);

		type check = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<string>,
			"strict"
		>;
	});
});
