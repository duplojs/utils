import { DEither, DDataParser, type ExpectType } from "@scripts";

describe("extended.coerce.boolean", () => {
	it("create data parser with checker", () => {
		const dataParser = DDataParser.extended.coerce.boolean({
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

		void dataParser;
	});

	it("coerces string", () => {
		expect(DDataParser.extended.coerce.boolean().parse("true")).toStrictEqual(DEither.success(true));
		expect(DDataParser.extended.coerce.boolean().parse("false")).toStrictEqual(DEither.success(false));
	});

	it("fails for invalid input", () => {
		expect(DDataParser.extended.coerce.boolean({ errorMessage: "boolean.coerce" }).parse("yes")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
