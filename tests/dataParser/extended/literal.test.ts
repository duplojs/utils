import { DDataParser, DEither } from "@scripts";

const { extended } = DDataParser;

describe("extended.literal", () => {
	it("parses literal values", () => {
		const parser = extended.literal(["foo", "bar"]);
		expect(parser.parse("foo")).toStrictEqual(DEither.success("foo"));
		expect(parser.parse("baz")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
