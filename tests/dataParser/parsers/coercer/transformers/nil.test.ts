import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser coercer nil transformer", () => {
	it("infers coerced input, output, and checker refine value types", () => {
		const schema = DDataParser.coercer(DDataParser.nil()).addChecker(
			DDataParser.checkerRefine((value) => {
				type _CheckRefineValue = ExpectType<typeof value, null, "strict">;
				return true;
			}),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			null,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			null | "null",
			"strict"
		>;
	});

	it("coerces the null string through the coercer", () => {
		const schema = DDataParser.coercer(DDataParser.nil());

		expect(schema.parse("null")).toStrictEqual(DEither.success(null));
	});

	it("fails when transformed value is not null", () => {
		const schema = DDataParser.coercer(DDataParser.nil());

		expect(schema.parse("undefined")).toStrictEqual(DEither.error(expect.any(Object)));
	});
});
