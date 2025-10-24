import { DDataParser, DEither } from "@scripts";

const { extended } = DDataParser;

describe("extended.unknown", () => {
	it("passes through value", () => {
		const parser = extended.unknown();
		const value = { foo: "bar" };
		expect(parser.parse(value)).toStrictEqual(DEither.success(value));
	});
});
