import { DDataParser, DEither } from "@scripts";

describe("DDataParser bigint checker min", () => {
	it("accepts bigint values above threshold", () => {
		const checker = DDataParser.checkerBigIntMin(10n);
		const schema = DDataParser.bigint({
			checkers: [checker],
		});

		expect(schema.parse(15n)).toStrictEqual(DEither.success(15n));
		expect(schema.parse(10n)).toStrictEqual(DEither.success(10n));
	});

	it("fails when bigint value is below minimum", () => {
		const checker = DDataParser.checkerBigIntMin(0n);
		const schema = DDataParser.bigint({
			checkers: [checker],
			errorMessage: "bigint.min",
		});

		const result = schema.parse(-1n);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					checker,
					-1n,
				),
			),
		);
	});
});
