import { DDataParser, DEither } from "@scripts";

describe("DDataParser array checker max", () => {
	it("accepts arrays at or below maximum length", () => {
		const checker = DDataParser.checkerArrayMax(3);
		const schema = DDataParser.array(
			DDataParser.string(),
			{
				checkers: [checker],
			},
		);

		expect(schema.parse(["a", "b"])).toStrictEqual(DEither.success(["a", "b"]));
		expect(schema.parse(["one", "two", "three"])).toStrictEqual(
			DEither.success(["one", "two", "three"]),
		);
	});

	it("fails when array length exceeds maximum", () => {
		const checker = DDataParser.checkerArrayMax(2);
		const schema = DDataParser.array(
			DDataParser.string(),
			{
				checkers: [checker],
				errorMessage: "array.max",
			},
		);

		const result = schema.parse(["one", "two", "three"]);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					checker,
					["one", "two", "three"],
				),
			),
		);
	});
});
