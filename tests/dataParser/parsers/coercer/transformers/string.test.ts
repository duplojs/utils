import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser coercer string transformer", () => {
	it("infers coerced input, output, and checker refine value types", () => {
		const schema = DDataParser.coercer(DDataParser.string()).addChecker(
			DDataParser.checkerRefine((value) => {
				type _CheckRefineValue = ExpectType<typeof value, string, "strict">;
				return true;
			}),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			string,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			string | number | bigint | boolean | symbol | null | undefined,
			"strict"
		>;
	});

	it("coerces supported values through the coercer", () => {
		const schema = DDataParser.coercer(DDataParser.string());

		expect(schema.parse(42)).toStrictEqual(DEither.success("42"));
		expect(schema.parse(42n)).toStrictEqual(DEither.success("42"));
		expect(schema.parse(true)).toStrictEqual(DEither.success("true"));
		expect(schema.parse(null)).toStrictEqual(DEither.success("null"));
		expect(schema.parse(undefined)).toStrictEqual(DEither.success("undefined"));
	});

	it("fails when transformed value is not a string", () => {
		const schema = DDataParser.coercer(DDataParser.string());

		expect(schema.parse(Object.create(null))).toStrictEqual(DEither.error(expect.any(Object)));
	});
});
