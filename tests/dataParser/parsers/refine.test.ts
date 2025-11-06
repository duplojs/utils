import { DDataParser, DEither, isType, not } from "@scripts";

describe("DDataParser checker refine", () => {
	it("refine string", () => {
		const checker = DDataParser.checkerRefine((input: string) => input.length === 3, { errorMessage: "test" });
		const schema = DDataParser.string().addChecker(checker);

		expect(schema.parse("123")).toStrictEqual(DEither.success("123"));
		expect(schema.parse("test")).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					checker,
					"test",
				),
			),
		);
	});

	it("refine literal", () => {
		const schema = DDataParser.literal([12, null]).addChecker(
			DDataParser.checkerRefine(not(isType("null"))),
		);

		expect(schema.parse(12)).toStrictEqual(DEither.success(12));
		expect(schema.parse(null)).toStrictEqual(
			DEither.error(
				expect.any(Object),
			),
		);
	});
});
