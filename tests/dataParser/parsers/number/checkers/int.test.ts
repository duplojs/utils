import { DDataParser, DEither } from "@scripts";

describe("DDataParser number checker int", () => {
	it("accepts integer values", () => {
		const checker = DDataParser.checkerInt();
		expect(checker.isAsynchronous()).toBe(false);

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
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "integer",
							path: "",
							data: 3.14,
							message: undefined,
						}),
					],
					currentPath: [],
				}),
			),
		);
	});

	it("int helper returns parser configured with the checker", () => {
		const schema = DDataParser.int();

		expect(schema.parse(42)).toStrictEqual(DEither.success(42));

		const result = schema.parse(7.5);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "integer",
							path: "",
							data: 7.5,
							message: undefined,
						}),
					],
					currentPath: [],
				}),
			),
		);
	});
});
