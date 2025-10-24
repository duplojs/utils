import { DDataParser, DEither } from "@scripts";

const { extended } = DDataParser;

describe("extended.nil", () => {
	it("parses null", () => {
		const parser = extended.nil();
		expect(parser.parse(null)).toStrictEqual(DEither.success(null));
	});

	it("coerces string when enabled", () => {
		const parser = extended.nil({ coerce: true });
		expect(parser.parse("null")).toStrictEqual(DEither.success(null));
	});
});
