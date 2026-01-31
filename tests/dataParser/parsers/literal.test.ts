import { DEither, type ExpectType, DDataParser } from "@scripts";

describe("literal parser", () => {
	it("parses allowed literal values", () => {
		const schema = DDataParser.literal(["on", "off"]);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			"on" | "off",
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			"on" | "off",
			"strict"
		>;

		const result = schema.parse("on");

		expect(result).toStrictEqual(DEither.success("on"));

		type _CheckResult = ExpectType<
			typeof result,
			DEither.Success<"on" | "off"> | DEither.Error<DDataParser.DataParserError>,
			"strict"
		>;
	});

	it("accepts single literal input", () => {
		const schema = DDataParser.literal("status");

		expect(schema.definition.value).toStrictEqual(["status"]);

		const result = schema.parse("status");

		expect(result).toStrictEqual(DEither.success("status"));
	});

	it("returns error when value is not in literal list", () => {
		const schema = DDataParser.literal("one");

		const result = schema.parse(1);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					1,
				),
			),
		);
	});
});
