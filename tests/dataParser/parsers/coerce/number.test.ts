import { DEither, DDataParser, type ExpectType } from "@scripts";

describe("coerce.number", () => {
	it("create data parser with checker", () => {
		const dataParser = DDataParser.coerce.number({
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<
						typeof value,
						number,
						"strict"
					>;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<
					typeof value,
					number,
					"strict"
				>;
				return true;
			}),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof dataParser>,
			number,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof dataParser>,
			string | number | bigint | boolean | null,
			"strict"
		>;

		void dataParser;
	});

	it("coerces string digits to number", () => {
		expect(DDataParser.coerce.number().parse("42")).toStrictEqual(DEither.success(42));
	});

	it("fails for non numeric string", () => {
		expect(DDataParser.coerce.number({ errorMessage: "number.coerce" }).parse("abc")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});

	it("fails for symbol", () => {
		expect(DDataParser.coerce.number({ errorMessage: "number.coerce" }).parse(Symbol("foo"))).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
