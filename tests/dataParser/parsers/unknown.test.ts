import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser unknown", () => {
	it("returns input as-is", () => {
		const schema = DDataParser.unknown();

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			unknown,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			unknown,
			"strict"
		>;

		const value = { foo: "bar" };
		const result = schema.parse(value);

		expect(result).toStrictEqual(DEither.success(value));

		type _Check = ExpectType<
			typeof result,
			| DEither.Error<DDataParser.DataParserError>
			| DEither.Success<unknown>,
			"strict"
		>;
	});

	it("allows undefined", () => {
		const schema = DDataParser.unknown();

		expect(schema.parse(undefined)).toStrictEqual(DEither.success(undefined));
	});
});
