import { DEither, DDataParser, type ExpectType } from "@scripts";

describe("coerce.empty", () => {
	it("create data parser with checker", () => {
		const dataParser = DDataParser.coerce.empty({
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<
						typeof value,
						undefined,
						"strict"
					>;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<
					typeof value,
					undefined,
					"strict"
				>;
				return true;
			}),
		);

		void dataParser;
	});

	it("coerces string 'undefined'", () => {
		expect(DDataParser.coerce.empty().parse("undefined")).toStrictEqual(DEither.success(undefined));
	});

	it("fails for other string", () => {
		expect(DDataParser.coerce.empty({ errorMessage: "empty.coerce" }).parse("nope")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
