import { DDataParser, DEither } from "@scripts";

const { extended } = DDataParser;

describe("extended.pipe", () => {
	it("pipelines parsers", () => {
		const schema = extended.pipe(
			extended.number(),
			extended.transform(extended.number(), (value) => value * 2),
		);

		expect(schema.parse(3)).toStrictEqual(DEither.success(6));
	});

	it("propagates input failure", () => {
		const inner = extended.number({ errorMessage: "not-number" });
		const schema = extended.pipe(inner, extended.number());

		expect(schema.parse("nope")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
