import { DDataParser, DEither } from "@scripts";

const { extended } = DDataParser;

describe("extended.bigint", () => {
	it("parses bigint", () => {
		const parser = extended.bigint();
		expect(parser.parse(5n)).toStrictEqual(DEither.success(5n));
	});

	it("supports min/max helpers", () => {
		const parser = extended.bigint();
		expect(parser.min(2n).parse(1n)).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
		expect(parser.max(2n).parse(3n)).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
