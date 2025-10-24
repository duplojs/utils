import { DDataParser, DEither } from "@scripts";

const { extended } = DDataParser;

describe("extended.templateLiteral", () => {
	it("parses structured string", () => {
		const parser = extended.templateLiteral([
			"item-",
			extended.number(),
		]);

		expect(parser.parse("item-5")).toStrictEqual(DEither.success("item-5"));
		expect(parser.parse("invalid")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
