import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser coercer template literal transformer", () => {
	it("infers coerced input, output, and checker refine value types", () => {
		const schema = DDataParser.coercer(
			DDataParser.templateLiteral([DDataParser.boolean()]),
		).addChecker(
			DDataParser.checkerRefine((value) => {
				type _CheckRefineValue = ExpectType<typeof value, `${boolean}`, "strict">;
				return true;
			}),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			`${boolean}`,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			`${boolean}` | number | bigint | boolean,
			"strict"
		>;
	});

	it("coerces supported primitive values through the coercer", () => {
		const booleanSchema = DDataParser.coercer(
			DDataParser.templateLiteral([DDataParser.boolean()]),
		);
		const numberSchema = DDataParser.coercer(
			DDataParser.templateLiteral([DDataParser.number()]),
		);

		expect(booleanSchema.parse(false)).toStrictEqual(DEither.success("false"));
		expect(numberSchema.parse(42)).toStrictEqual(DEither.success("42"));
		expect(numberSchema.parse(42n)).toStrictEqual(DEither.success("42"));
	});

	it("fails when transformed value does not match the template literal", () => {
		const schema = DDataParser.coercer(
			DDataParser.templateLiteral(["id-", DDataParser.number()]),
		);

		expect(schema.parse(42)).toStrictEqual(DEither.error(expect.any(Object)));
	});
});
