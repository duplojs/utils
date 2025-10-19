import { DDataParser, DEither } from "@scripts";

describe("DDataParser number checker max", () => {
	it("allows numbers less or equal to max", () => {
		const checker = DDataParser.checkerNumberMax(10);
		const schema = DDataParser.number({
			checkers: [checker],
		});

		expect(schema.parse(10)).toStrictEqual(DEither.success(10));
		expect(schema.parse(5)).toStrictEqual(DEither.success(5));
	});

	it("fails numbers above maximum", () => {
		const checker = DDataParser.checkerNumberMax(10);
		const schema = DDataParser.number({
			checkers: [checker],
			errorMessage: "number.max",
		});

		const result = schema.parse(11);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					checker,
					11,
				),
			),
		);
	});
});
