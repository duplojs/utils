import { DDataParserExtended, DEither, type ExpectType } from "@scripts";

describe("extended.nullable", () => {
	it("parses null and inner values", () => {
		const parser = DDataParserExtended.nullable(DDataParserExtended.number());
		const nullResult = parser.parse(null);
		const numberResult = parser.parse(5);
		expect(nullResult).toStrictEqual(DEither.success(null));
		expect(numberResult).toStrictEqual(DEither.success(5));

		type check = ExpectType<
			typeof nullResult,
			DEither.Error<DDataParserExtended.DataParserError> | DEither.Success<number | null>,
			"strict"
		>;
	});

	it("fails when inner parser fails", () => {
		const inner = DDataParserExtended.number({ errorMessage: "not-number" });
		const parser = DDataParserExtended.nullable(inner);

		expect(parser.parse("nope")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});

	it("parse with default value", () => {
		const schema = DDataParserExtended.number().nullable().default(1);

		expect(schema.parse(null)).toStrictEqual(
			DEither.success(1),
		);

		type check = ExpectType<
			typeof schema,
			DDataParserExtended.DataParserNullableExtended<{
				readonly checkers: readonly [];
				readonly errorMessage?: string | undefined;
				readonly inner: DDataParserExtended.DataParserNumberExtended<{
					readonly errorMessage?: string | undefined;
					readonly coerce: boolean;
					readonly checkers: readonly [];
				}>;
				readonly coalescingValue: 1;
			}>,
			"strict"
		>;
	});
});
