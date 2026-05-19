import { DEither, DDataParser, type ExpectType } from "@scripts";

describe("coerce.nil", () => {
	it("create data parser with checker", () => {
		const dataParser = DDataParser.coerce.nil({
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<
						typeof value,
						null,
						"strict"
					>;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<
					typeof value,
					null,
					"strict"
				>;
				return true;
			}),
		);

		void dataParser;
	});

	it("coerces string 'null'", () => {
		expect(DDataParser.coerce.nil().parse("null")).toStrictEqual(DEither.success(null));
	});

	it("fails for other values", () => {
		expect(DDataParser.coerce.nil({ errorMessage: "nil.coerce" }).parse("nope")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
