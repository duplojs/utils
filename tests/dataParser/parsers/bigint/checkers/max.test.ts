import { DDataParser, DEither } from "@scripts";

describe("DDataParser bigint checker max", () => {
	it("accepts bigint values under threshold", () => {
		const checker = DDataParser.checkerBigIntMax(10n);
		const schema = DDataParser.bigint({
			checkers: [checker],
		});

		expect(schema.parse(5n)).toStrictEqual(DEither.success(5n));
		expect(schema.parse(10n)).toStrictEqual(DEither.success(10n));
	});

	it("fails when bigint exceeds maximum", () => {
		const checker = DDataParser.checkerBigIntMax(10n);
		const schema = DDataParser.bigint({
			checkers: [checker],
			errorMessage: "bigint.max",
		});

		const result = schema.parse(11n);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					checker,
					11n,
				),
			),
		);
	});
});
