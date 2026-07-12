import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser coercer empty transformer", () => {
	it("infers coerced input, output, and checker refine value types", () => {
		const schema = DDataParser.coercer(DDataParser.empty()).addChecker(
			DDataParser.checkerRefine((value) => {
				type _CheckRefineValue = ExpectType<typeof value, undefined, "strict">;
				return true;
			}),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			undefined,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			undefined | "undefined",
			"strict"
		>;
	});

	it("coerces the undefined string through the coercer", () => {
		const schema = DDataParser.coercer(DDataParser.empty());

		expect(schema.parse("undefined")).toStrictEqual(DEither.success(undefined));
	});

	it("fails when transformed value is not undefined", () => {
		const schema = DDataParser.coercer(DDataParser.empty());

		expect(schema.parse("null")).toStrictEqual(DEither.error(expect.any(Object)));
	});
});
