import { type DArray, DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser array checker max", () => {
	it("accepts arrays at or below maximum length", () => {
		const checker = DDataParser.checkerArrayMax(3);
		expect(checker.isAsynchronous()).toBe(false);

		const schema = DDataParser.array(
			DDataParser.string(),
			{
				checkers: [checker],
			},
		);

		type check = ExpectType<
			DDataParser.Output<typeof schema>,
			string[] & DArray.MaxElements<3>,
			"strict"
		>;

		type checkInput = ExpectType<
			DDataParser.Input<typeof schema>,
			string[] & DArray.MaxElements<3>,
			"strict"
		>;

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
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "array.length <= 2",
							path: "",
							data: ["one", "two", "three"],
							message: "array.max",
						}),
					],
					currentPath: [],
				}),
			),
		);
	});
});
