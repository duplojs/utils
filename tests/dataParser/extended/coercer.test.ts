import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.coercer", () => {
	it("preserves output and extends input from eligible extended parser", () => {
		const parser = extended.coercer(extended.number());

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof parser>,
			number,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof parser>,
			string | number | bigint | boolean | null,
			"strict"
		>;

		expect(parser.parse("42")).toStrictEqual(DEither.success(42));
	});

	it("keeps the exact inner parser type when coerce is called after fluent helpers", () => {
		const inner = extended.number().min(4).max(10);
		const parser = inner.coerce();

		type _CheckInner = ExpectType<
			typeof parser.definition.inner,
			typeof inner,
			"strict"
		>;

		expect(parser.definition.inner).toBe(inner);
		expect(parser.parse("5")).toStrictEqual(DEither.success(5));
		expect(parser.parse("3")).toStrictEqual(DEither.error(expect.any(Object)));
	});

	it("does not mutate the inner parser when it creates the coercer", () => {
		const inner = extended.string().min(2);
		const parser = inner.coerce();

		expect(inner.parse(42)).toStrictEqual(DEither.error(expect.any(Object)));
		expect(parser.parse(42)).toStrictEqual(DEither.success("42"));
	});

	it("runs coercer checkers after inner parser succeeds", () => {
		const parser = extended.number()
			.min(4)
			.coerce()
			.addChecker(DDataParser.checkerNumberMax(10));

		expect(parser.parse("8")).toStrictEqual(DEither.success(8));
		expect(parser.parse("11")).toStrictEqual(DEither.error(expect.any(Object)));
	});

	it("keeps coercer input unrefined when checker refines output", () => {
		const parser = extended.number().coerce().addChecker(
			DDataParser.checkerRefine(
				(value): value is 42 => value === 42,
			),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof parser>,
			42,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof parser>,
			string | number | bigint | boolean | null,
			"strict"
		>;

		expect(parser.parse("42")).toStrictEqual(DEither.success(42));
		expect(parser.parse("41")).toStrictEqual(DEither.error(expect.any(Object)));
	});
});
