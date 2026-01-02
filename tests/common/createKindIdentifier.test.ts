import { DDataParser, type Kind, pipe, type ExpectType, createKindIdentifier, when } from "@scripts";

describe("createKindIdentifier", () => {
	const identifier = createKindIdentifier<
		DDataParser.DataParser,
		| DDataParser.DataParsers
		| DDataParser.DataParsersExtended
	>();

	it("predicate with identified data parser", () => {
		const schema = DDataParser.string() as DDataParser.DataParserString | DDataParser.DataParserNumber;

		const predicate = identifier(
			schema,
			DDataParser.stringKind,
		);

		expect(predicate).toStrictEqual(true);

		if (predicate) {
			type check = ExpectType<
				typeof schema,
				DDataParser.DataParserString<DDataParser.DataParserDefinitionString>,
				"strict"
			>;
		}
	});

	it("predicate wrong value", () => {
		const schema = DDataParser.string();

		const predicate = identifier(
			schema,
			DDataParser.numberKind,
		);

		expect(predicate).toStrictEqual(false);

		if (predicate) {
			type check = ExpectType<
				typeof schema,
				never,
				"strict"
			>;
		}
	});

	it("predicate on union", () => {
		const schema = DDataParser.string() as DDataParser.DataParserString
			| DDataParser.DataParser
			| DDataParser.DataParserNumber;

		const predicate = identifier(
			schema,
			[
				DDataParser.stringKind,
				DDataParser.extendedKind,
			],
		);

		expect(predicate).toStrictEqual(false);

		if (predicate) {
			type check = ExpectType<
				typeof schema,
				DDataParser.extended.DataParserStringExtended<DDataParser.DataParserDefinitionString>,
				"strict"
			>;
		}
	});

	it("use in pipe", () => {
		const schema = DDataParser.extended.string();

		const result = pipe(
			schema,
			when(
				identifier([
					DDataParser.stringKind,
					DDataParser.extendedKind,
				]),
				(schema) => {
					type check = ExpectType<
						typeof schema,
						DDataParser.extended.DataParserStringExtended<{
							readonly errorMessage?: string | undefined;
							readonly coerce: boolean;
							readonly checkers: readonly [];
						}>,
						"strict"
					>;

					return true;
				},
			),
		);

		expect(result).toStrictEqual(true);
	});

	it("test types", () => {
		const schema = DDataParser.string() as unknown as (
			& DDataParser.DataParser
			& Kind<typeof DDataParser.stringKind["definition"]>
			& Kind<typeof DDataParser.extendedKind["definition"]>
		);

		const predicate = identifier(
			schema,
			[
				DDataParser.stringKind,
				DDataParser.extendedKind,
			],
		);

		if (predicate) {
			type Check1 = ExpectType<
				typeof schema,
				& DDataParser.DataParser
				& Kind<typeof DDataParser.stringKind["definition"]>
				& Kind<typeof DDataParser.extendedKind["definition"]>,
				"strict"
			>;
		}
	});
});
