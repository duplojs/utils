import { DDataParser, DEither } from "@scripts";

const { extended } = DDataParser;

describe("extended.record", () => {
	it("parses record with string keys", () => {
		const schema = extended.record(
			extended.string(),
			extended.string(),
		);

		const value = { foo: "bar" };
		expect(schema.parse(value)).toStrictEqual(DEither.success({ foo: "bar" }));
	});

	it("fails when key parser rejects", () => {
		const keyParser = extended.literal("allowed");
		const schema = extended.record(keyParser, extended.string());

		const result = schema.parse({ forbidden: "value" });

		expect(result).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
