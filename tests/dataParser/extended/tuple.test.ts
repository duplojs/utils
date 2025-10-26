import { DDataParser, DEither } from "@scripts";

const { extended } = DDataParser;

describe("extended.tuple", () => {
	it("parses tuple shape", () => {
		const parser = extended.tuple([
			extended.string(),
			extended.number(),
		]);

		expect(parser.parse(["a", 1])).toStrictEqual(DEither.success(["a", 1]));
	});
});
