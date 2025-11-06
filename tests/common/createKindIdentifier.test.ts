import { DDataParser, DEither, type Kind, pipe, type ExpectType, createKindIdentifier } from "@scripts";

describe("createKindIdentifier", () => {
	const identifier = createKindIdentifier<
		DDataParser.DataParser,
		| DDataParser.DataParsers
		| DDataParser.DataParsersExtended
	>();

	it("success", () => {
		const schema = DDataParser.string();

		const result = identifier(
			schema,
			DDataParser.stringKind,
		);

		expect(result).toStrictEqual(
			DEither.success(schema),
		);

		type Check = ExpectType<
			typeof result,
			| DEither.EitherSuccess<typeof schema>
			| DEither.EitherSuccess<
				| DDataParser.DataParserString<DDataParser.DataParserDefinitionString>
				| DDataParser.extended.DataParserStringExtended<DDataParser.DataParserDefinitionString>
			>,
			"strict"
		>;
	});

	it("error", () => {
		const schema = DDataParser.string();

		const result = identifier(
			schema,
			[
				DDataParser.stringKind,
				DDataParser.extendedKind,
			],
		);

		expect(result).toStrictEqual(
			DEither.error(schema),
		);

		type Check = ExpectType<
			typeof result,
			| DEither.EitherError<typeof schema>
			| DEither.EitherSuccess<
				DDataParser.extended.DataParserStringExtended<DDataParser.DataParserDefinitionString>
			>,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const schema = DDataParser.extended.string();

		const result = pipe(
			schema,
			identifier([
				DDataParser.stringKind,
				DDataParser.extendedKind,
			]),
		);

		expect(result).toStrictEqual(
			DEither.success(schema),
		);

		type Check = ExpectType<
			typeof result,
			| DEither.EitherSuccess<typeof schema>
			| DEither.EitherSuccess<
				DDataParser.extended.DataParserStringExtended<DDataParser.DataParserDefinitionString>
			>,
			"strict"
		>;
	});

	it("test types", () => {
		const schema = DDataParser.string() as DDataParser.DataParser;

		const result = identifier(
			schema,
			[
				DDataParser.stringKind,
				DDataParser.extendedKind,
			],
		);

		type Check = ExpectType<
			typeof result,
			| DEither.EitherError<typeof schema>
			| DEither.EitherSuccess<
				DDataParser.extended.DataParserStringExtended<DDataParser.DataParserDefinitionString>
			>,
			"strict"
		>;

		const schema1 = DDataParser.string() as unknown as (
			& DDataParser.DataParser
			& Kind<typeof DDataParser.stringKind["definition"]>
			& Kind<typeof DDataParser.extendedKind["definition"]>
		);

		const result1 = identifier(
			schema1,
			[
				DDataParser.stringKind,
				DDataParser.extendedKind,
			],
		);

		type Check1 = ExpectType<
			typeof result1,
			| DEither.EitherSuccess<typeof schema1>
			| DEither.EitherSuccess<
				DDataParser.extended.DataParserStringExtended<DDataParser.DataParserDefinitionString>
			>,
			"strict"
		>;
	});
});
