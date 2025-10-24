import { DDataParser, DEither } from "@scripts";

const { extended } = DDataParser;

describe("extended.array", () => {
	it("parses array elements", () => {
		const parser = extended.array(extended.number());
		expect(parser.parse([1, 2])).toStrictEqual(DEither.success([1, 2]));
	});

	it("supports min/max helpers", () => {
		const parser = extended.array(extended.number());
		expect(parser.min(2).parse([1])).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
		expect(parser.max(2).parse([1, 2, 3])).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});

	it("allows addChecker", () => {
		const parser = extended.array(extended.number());
		const enhanced = parser.addChecker(
			DDataParser.checkerArrayMin(2),
		);

		expect(enhanced.parse([1])).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
