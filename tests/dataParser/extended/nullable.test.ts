import { DDataParser, DEither } from "@scripts";

const { extended } = DDataParser;

describe("extended.nullable", () => {
	it("parses null and inner values", () => {
		const parser = extended.nullable(extended.number());
		expect(parser.parse(null)).toStrictEqual(DEither.success(null));
		expect(parser.parse(5)).toStrictEqual(DEither.success(5));
	});

	it("fails when inner parser fails", () => {
		const inner = extended.number({ errorMessage: "not-number" });
		const parser = extended.nullable(inner);

		expect(parser.parse("nope")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
