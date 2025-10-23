import { DDataParser, DEither } from "@scripts";

describe("DDataParser string checker min length", () => {
	it("allows string greater or equal to min length", () => {
		const checker = DDataParser.checkerStringMin(3);
		const schema = DDataParser.string({
			checkers: [checker],
		});

		expect(schema.parse("test")).toStrictEqual(DEither.success("test"));
		expect(schema.parse("123")).toStrictEqual(DEither.success("123"));
	});

	it("fails string below minimum length", () => {
		const checker = DDataParser.checkerStringMin(3);
		const schema = DDataParser.string({
			checkers: [checker],
		});

		const result = schema.parse("ok");

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					checker,
					"ok",
				),
			),
		);
	});
});
