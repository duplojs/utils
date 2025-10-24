import { DDataParser, DEither } from "@scripts";

const { extended } = DDataParser;

describe("extended.optional", () => {
	it("parses undefined and inner values", () => {
		const parser = extended.optional(extended.string());
		expect(parser.parse(undefined)).toStrictEqual(DEither.success(undefined));
		expect(parser.parse("value")).toStrictEqual(DEither.success("value"));
	});

	it("fails when inner parser fails", () => {
		const inner = extended.number({ errorMessage: "not-number" });
		const parser = extended.optional(inner);

		expect(parser.parse("oops")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
