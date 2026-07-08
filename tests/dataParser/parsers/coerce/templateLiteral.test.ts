import { DEither, DDataParser, type ExpectType } from "@scripts";

describe("coerce.templateLiteral", () => {
	it("create data parser with checker", () => {
		const dataParser = DDataParser.coerce.templateLiteral(
			["item-", DDataParser.number()],
			{
				checkers: [
					DDataParser.checkerRefine((value) => {
						type check = ExpectType<
							typeof value,
							`item-${number}`,
							"strict"
						>;
						return true;
					}),
				],
			},
		).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<
					typeof value,
					`item-${number}`,
					"strict"
				>;
				return true;
			}),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof dataParser>,
			`item-${number}`,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof dataParser>,
			number | bigint | boolean | `item-${number}`,
			"strict"
		>;

		void dataParser;
	});

	it("coerces value to string", () => {
		expect(DDataParser.coerce.templateLiteral(["item-", DDataParser.number()]).parse("item-42")).toStrictEqual(DEither.success("item-42"));
	});

	it("coerces primitive template literal input to string", () => {
		expect(DDataParser.coerce.templateLiteral([DDataParser.number()]).parse(42)).toStrictEqual(
			DEither.success("42"),
		);
	});

	it("fails when coercion not possible", () => {
		expect(DDataParser.coerce.templateLiteral(
			["item-", DDataParser.number()],
			{ errorMessage: "templateLiteral.coerce" },
		).parse(Object.create(null))).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
