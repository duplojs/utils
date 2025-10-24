import { DDataParser, DEither } from "@scripts";

const { extended } = DDataParser;

describe("extended.transform", () => {
	it("transforms value", () => {
		const parser = extended.transform(
			extended.number(),
			(value) => `#${value}`,
		);

		expect(parser.parse(5)).toStrictEqual(DEither.success("#5"));
	});

	it("propagates inner failure", () => {
		const inner = extended.number({ errorMessage: "not-number" });
		const parser = extended.transform(inner, (value) => value);

		expect(parser.parse("oops")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
