import { DDataParser, DEither } from "@scripts";

const { extended } = DDataParser;

describe("extended.tuple", () => {
	it("parses tuple shape", () => {
		const parser = extended.tuple([
			extended.string(),
			extended.number(),
		]);

		expect(parser.parse(["a", 1])).toStrictEqual(DEither.success(["a", 1]));
	});

	it("support min/max checker", () => {
		const schema = extended
			.tuple(
				[extended.string()],
				{
					rest: extended.number(),
				},
			)
			.max(5)
			.min(2);

		expect(schema.parse(["test", 1, 2]))
			.toStrictEqual(
				DEither.success(["test", 1, 2]),
			);
		expect(schema.parse(["test"]))
			.toStrictEqual(
				DEither.error(expect.any(Object)),
			);
		expect(schema.parse(["test", 1, 2, 3, 4, 5]))
			.toStrictEqual(
				DEither.error(expect.any(Object)),
			);
	});
});
