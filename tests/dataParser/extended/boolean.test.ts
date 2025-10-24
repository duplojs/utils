import { DDataParser, DEither } from "@scripts";

const { extended } = DDataParser;

describe("extended.boolean", () => {
	it("parses boolean", () => {
		const parser = extended.boolean();
		expect(parser.parse(true)).toStrictEqual(DEither.success(true));
	});

	it("coerces when enabled", () => {
		const parser = extended.boolean({ coerce: true });
		expect(parser.parse("true")).toStrictEqual(DEither.success(true));
	});
});
