import { DDataParser, DEither } from "@scripts";

describe("DDataParser number checker min", () => {
	it("allows numbers greater or equal to min", () => {
		const checker = DDataParser.checkerNumberMin(5);
		const schema = DDataParser.number({
			checkers: [checker],
		});

		expect(schema.parse(5)).toStrictEqual(DEither.success(5));
		expect(schema.parse(10)).toStrictEqual(DEither.success(10));
	});

	it("fails numbers below minimum", () => {
		const checker = DDataParser.checkerNumberMin(0);
		const schema = DDataParser.number({
			checkers: [checker],
			errorMessage: "number.min",
		});

		const result = schema.parse(-1);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					checker,
					-1,
				),
			),
		);
	});
});
