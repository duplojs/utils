import { DEither, DDataParser, type ExpectType } from "@scripts";

describe("coerce.boolean", () => {
	it("create data parser with checker", () => {
		const dataParser = DDataParser.coerce.boolean({
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<
						typeof value,
						boolean,
						"strict"
					>;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<
					typeof value,
					boolean,
					"strict"
				>;
				return true;
			}),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof dataParser>,
			boolean,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof dataParser>,
			string | number | boolean,
			"strict"
		>;

		void dataParser;
	});

	it("coerces string", () => {
		expect(DDataParser.coerce.boolean().parse("true")).toStrictEqual(DEither.success(true));
		expect(DDataParser.coerce.boolean().parse("false")).toStrictEqual(DEither.success(false));
	});

	it("fails for invalid input", () => {
		expect(DDataParser.coerce.boolean({ errorMessage: "boolean.coerce" }).parse("yes")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});

	it("coerces number", () => {
		expect(DDataParser.coerce.boolean().parse(1)).toStrictEqual(DEither.success(true));
		expect(DDataParser.coerce.boolean().parse(0)).toStrictEqual(DEither.success(false));
	});
});
