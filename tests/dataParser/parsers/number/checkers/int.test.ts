import { DDataParser, DEither } from "@scripts";

describe("DDataParser number checker int", () => {
	it("accepts integer values", () => {
		const checker = DDataParser.checkerInt();
		const schema = DDataParser.number({
			checkers: [checker],
		});

		const result = schema.parse(5);

		expect(result).toStrictEqual(DEither.success(5));
	});

	it("rejects non-integer values", () => {
		const checker = DDataParser.checkerInt();
		const schema = DDataParser.number({
			checkers: [checker],
		});

		const result = schema.parse(3.14);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					checker,
					3.14,
				),
			),
		);
	});

	it("int helper returns parser configured with the checker", () => {
		const schema = DDataParser.int();

		expect(schema.parse(42)).toStrictEqual(DEither.success(42));

		const result = schema.parse(7.5);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema.definition.checkers[0],
					7.5,
				),
			),
		);
	});
});
