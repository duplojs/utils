import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser coercer number transformer", () => {
	it("infers coerced input, output, and checker refine value types", () => {
		const schema = DDataParser.coercer(DDataParser.number()).addChecker(
			DDataParser.checkerRefine((value) => {
				type _CheckRefineValue = ExpectType<typeof value, number, "strict">;
				return true;
			}),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			number,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			string | number | bigint | boolean | null,
			"strict"
		>;
	});

	it("coerces supported values through the coercer", () => {
		const schema = DDataParser.coercer(DDataParser.number());

		expect(schema.parse("42")).toStrictEqual(DEither.success(42));
		expect(schema.parse(42n)).toStrictEqual(DEither.success(42));
		expect(schema.parse(true)).toStrictEqual(DEither.success(1));
		expect(schema.parse(null)).toStrictEqual(DEither.success(0));
	});

	it("fails when transformed value is not a finite number", () => {
		const schema = DDataParser.coercer(DDataParser.number());

		expect(schema.parse("not-a-number")).toStrictEqual(DEither.error(expect.any(Object)));
		expect(schema.parse(Symbol("foo"))).toStrictEqual(DEither.error(expect.any(Object)));
	});
});
