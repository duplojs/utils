import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser coercer bigint transformer", () => {
	it("infers coerced input, output, and checker refine value types", () => {
		const schema = DDataParser.coercer(DDataParser.bigint()).addChecker(
			DDataParser.checkerRefine((value) => {
				type _CheckRefineValue = ExpectType<typeof value, bigint, "strict">;
				return true;
			}),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			bigint,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			string | number | boolean | bigint,
			"strict"
		>;
	});

	it("coerces supported values through the coercer", () => {
		const schema = DDataParser.coercer(DDataParser.bigint());

		expect(schema.parse("42")).toStrictEqual(DEither.success(42n));
		expect(schema.parse(42)).toStrictEqual(DEither.success(42n));
		expect(schema.parse(true)).toStrictEqual(DEither.success(1n));
	});

	it("fails when transformed value is not a bigint", () => {
		const schema = DDataParser.coercer(DDataParser.bigint());

		expect(schema.parse(1.5)).toStrictEqual(DEither.error(expect.any(Object)));
	});
});
