import { DDataParser, DEither } from "@scripts";

const { extended } = DDataParser;

describe("extended.object", () => {
	it("parses object shape", () => {
		const parser = extended.object({
			name: extended.string(),
			age: extended.number(),
		});

		const value = {
			name: "alice",
			age: 30,
		};

		expect(parser.parse(value)).toStrictEqual(DEither.success(value));
	});
});
