import { DDataParserExtended, DEither, type ExpectType } from "@scripts";

describe("extended.optional", () => {
	it("parses undefined and inner values", () => {
		const parser = DDataParserExtended.optional(DDataParserExtended.string());
		const undefinedResult = parser.parse(undefined);
		const valueResult = parser.parse("value");
		expect(undefinedResult).toStrictEqual(DEither.success(undefined));
		expect(valueResult).toStrictEqual(DEither.success("value"));

		type check = ExpectType<
			typeof valueResult,
			DEither.Error<DDataParserExtended.DataParserError> | DEither.Success<string | undefined>,
			"strict"
		>;
	});

	it("fails when inner parser fails", () => {
		const inner = DDataParserExtended.number({ errorMessage: "not-number" });
		const parser = DDataParserExtended.optional(inner);

		expect(parser.parse("oops")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});

	it("parse with default value", () => {
		const schema = DDataParserExtended.number().optional().default(1);

		expect(schema.parse(undefined)).toStrictEqual(
			DEither.success(1),
		);

		type check = ExpectType<
			typeof schema,
			DDataParserExtended.DataParserOptionalExtended<{
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
