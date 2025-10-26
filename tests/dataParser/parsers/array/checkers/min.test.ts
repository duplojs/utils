import { DDataParser, DEither } from "@scripts";

describe("DDataParser array checker min", () => {
	it("accepts arrays at or above minimum length", () => {
		const checker = DDataParser.checkerArrayMin(2);
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

	it("fails when array length is below minimum", () => {
		const checker = DDataParser.checkerArrayMin(3);
		const schema = DDataParser.array(
			DDataParser.string(),
			{
				checkers: [checker],
				errorMessage: "array.min",
			},
		);

		const result = schema.parse(["a", "b"]);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					checker,
					["a", "b"],
				),
			),
		);
	});
});
