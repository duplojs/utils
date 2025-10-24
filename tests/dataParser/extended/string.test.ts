import { DDataParser, DEither } from "@scripts";

const { extended } = DDataParser;

describe("extended.string", () => {
	it("parses strings", () => {
		const parser = extended.string();
		expect(parser.parse("hello")).toStrictEqual(DEither.success("hello"));
	});

	it("supports min/max helpers", () => {
		const parser = extended.string();
		const minParser = parser.min(3);
		const maxParser = parser.max(5);

		expect(minParser.parse("hi")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
		expect(maxParser.parse("toolong")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});

	it("supports regex helper", () => {
		const parser = extended.string().regex(/^foo$/);
		expect(parser.parse("foo")).toStrictEqual(DEither.success("foo"));
		expect(parser.parse("bar")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});

	it("provides email helper", () => {
		const parser = extended.email();
		expect(parser.parse("user@example.com")).toStrictEqual(DEither.success("user@example.com"));
		expect(parser.parse("invalid")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});

	it("provides url helper", () => {
		const parser = extended.url();
		expect(parser.parse("https://example.com")).toStrictEqual(DEither.success("https://example.com"));
		expect(parser.parse("not-a-url")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
