import { DDataParser, DEither } from "@scripts";

const { extended } = DDataParser;

describe("extended.union", () => {
	it("parses union options", () => {
		const parser = extended.union([
			extended.string(),
			extended.number(),
		]);

		expect(parser.parse("value")).toStrictEqual(DEither.success("value"));
		expect(parser.parse(10)).toStrictEqual(DEither.success(10));
	});
});
