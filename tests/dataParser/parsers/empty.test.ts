import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser empty", () => {
	it("parses undefined value", () => {
		const schema = DDataParser.empty();

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			undefined,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			undefined,
			"strict"
		>;

		expect(schema.parse(undefined)).toStrictEqual(DEither.success(undefined));
	});

	it("fails when value is not undefined", () => {
		const schema = DDataParser.empty({ errorMessage: "undefined.invalid" });

		const result = schema.parse("value");

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					"value",
				),
			),
		);
	});

	it("coerce", () => {
		const schema = DDataParser.empty({ coerce: true });

		expect(schema.parse("undefined")).toStrictEqual(DEither.success(undefined));
		expect(schema.parse("not-undefined")).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					"not-undefined",
				),
			),
		);
	});
});
