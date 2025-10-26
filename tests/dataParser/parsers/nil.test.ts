import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser null", () => {
	it("parses null value", () => {
		const schema = DDataParser.nil();

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			null,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			null,
			"strict"
		>;

		expect(schema.parse(null)).toStrictEqual(DEither.success(null));
	});

	it("fails when value is not null", () => {
		const schema = DDataParser.nil({ errorMessage: "null.invalid" });

		const result = schema.parse("not-null");

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					"not-null",
				),
			),
		);
	});

	it("coerce", () => {
		const schema = DDataParser.nil({ coerce: true });

		expect(schema.parse("null")).toStrictEqual(DEither.success(null));
		expect(schema.parse("not-null")).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					"not-null",
				),
			),
		);
	});
});
