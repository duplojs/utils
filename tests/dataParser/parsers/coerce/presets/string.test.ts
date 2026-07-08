import { DEither, DDataParser, type ExpectType } from "@scripts";

describe("coerce.string", () => {
	it("create data parser with checker", () => {
		const dataParser = DDataParser.coerce.string({
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<
						typeof value,
						string,
						"strict"
					>;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<
					typeof value,
					string,
					"strict"
				>;
				return true;
			}),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof dataParser>,
			string,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof dataParser>,
			string,
			"strict"
		>;

		void dataParser;
	});

	it("coerces value to string", () => {
		expect(DDataParser.coerce.string().parse(42)).toStrictEqual(DEither.success("42"));
	});

	it("fails when coercion not possible", () => {
		expect(DDataParser.coerce.string({ errorMessage: "string.coerce" }).parse(Object.create(null))).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
