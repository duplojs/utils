import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser coercer boolean transformer", () => {
	it("infers coerced input, output, and checker refine value types", () => {
		const schema = DDataParser.coercer(DDataParser.boolean()).addChecker(
			DDataParser.checkerRefine((value) => {
				type _CheckRefineValue = ExpectType<typeof value, boolean, "strict">;
				return true;
			}),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			boolean,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			string | number | boolean,
			"strict"
		>;
	});

	it("coerces supported values through the coercer", () => {
		const schema = DDataParser.coercer(DDataParser.boolean());

		expect(schema.parse(" true ")).toStrictEqual(DEither.success(true));
		expect(schema.parse("FALSE")).toStrictEqual(DEither.success(false));
		expect(schema.parse(1)).toStrictEqual(DEither.success(true));
		expect(schema.parse(0)).toStrictEqual(DEither.success(false));
	});

	it("fails when transformed value is not a boolean", () => {
		const schema = DDataParser.coercer(DDataParser.boolean());

		expect(schema.parse("yes")).toStrictEqual(DEither.error(expect.any(Object)));
		expect(schema.parse(2)).toStrictEqual(DEither.error(expect.any(Object)));
	});
});
