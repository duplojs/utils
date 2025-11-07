import { DDataParser, DEither } from "@scripts";

const { extended } = DDataParser;

describe("extended.recover", () => {
	it("returns inner value on success and recovered value on failure", () => {
		const parser = extended.recover(extended.number(), 0);

		expect(parser.parse(10)).toStrictEqual(DEither.success(10));
	});

	it("fails when inner parser fails", () => {
		const parser = extended
			.recover(extended.number({ errorMessage: "not-number" }), "test");

		expect(parser.parse("invalid")).toStrictEqual(DEither.success("test"));
	});
});
