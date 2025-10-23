import { DDataParser, DEither } from "@scripts";

describe("DDataParser string checker max length", () => {
	it("allows string less or equal to max length", () => {
		const checker = DDataParser.checkerStringMax(10);
		const schema = DDataParser.string({
			checkers: [checker],
		});

		expect(schema.parse("0123456789")).toStrictEqual(DEither.success("0123456789"));
		expect(schema.parse("test")).toStrictEqual(DEither.success("test"));
	});

	it("fails string above maximum length", () => {
		const checker = DDataParser.checkerStringMax(3);
		const schema = DDataParser.string({
			checkers: [checker],
		});

		const result = schema.parse("test");

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					checker,
					"test",
				),
			),
		);
	});
});
