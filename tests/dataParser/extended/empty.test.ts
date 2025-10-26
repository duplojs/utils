import { DDataParser, DEither } from "@scripts";

const { extended } = DDataParser;

describe("extended.empty", () => {
	it("parses undefined", () => {
		const parser = extended.empty();
		expect(parser.parse(undefined)).toStrictEqual(DEither.success(undefined));
	});

	it("coerces string when enabled", () => {
		const parser = extended.empty({ coerce: true });
		expect(parser.parse("undefined")).toStrictEqual(DEither.success(undefined));
	});
});
