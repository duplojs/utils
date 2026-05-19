import { DEither, DDataParser, type ExpectType } from "@scripts";

describe("extended.coerce.number", () => {
	it("create data parser with checker", () => {
		const dataParser = DDataParser.extended.coerce.number({
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

		void dataParser;
	});

	it("coerces string digits to number", () => {
		expect(DDataParser.extended.coerce.number().parse("42")).toStrictEqual(DEither.success(42));
	});

	it("fails for non numeric string", () => {
		expect(DDataParser.extended.coerce.number({ errorMessage: "number.coerce" }).parse("abc")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
