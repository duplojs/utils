import { DEither, DDataParser, type ExpectType } from "@scripts";

describe("coerce.bigint", () => {
	it("create data parser with checker", () => {
		const dataParser = DDataParser.coerce.bigint({
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<
						typeof value,
						bigint,
						"strict"
					>;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<
					typeof value,
					bigint,
					"strict"
				>;
				return true;
			}),
		);

		void dataParser;
	});

	it("coerces numeric string", () => {
		expect(DDataParser.coerce.bigint().parse("5")).toStrictEqual(DEither.success(5n));
	});

	it("fails for non integer numeric", () => {
		expect(DDataParser.coerce.bigint({ errorMessage: "bigint.coerce" }).parse(1.5)).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
