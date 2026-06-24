import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser unknown", () => {
	it("refines output and input with predicate checker", () => {
		const schema = DDataParser.unknown().addChecker(
			DDataParser.checkerRefine((value): value is string => typeof value === "string"),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			string,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			string,
			"strict"
		>;
	});

	it("create data parser with checker", () => {
		const dataParser = DDataParser.unknown({
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<typeof value, unknown, "strict">;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<typeof value, unknown, "strict">;
				return true;
			}),
		);

		void dataParser;
	});

	it("returns input as-is", () => {
		const schema = DDataParser.unknown();
		expect(schema.isAsynchronous()).toBe(false);

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
