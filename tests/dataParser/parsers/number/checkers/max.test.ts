import { DDataParser, DEither } from "@scripts";

describe("DDataParser number checker max", () => {
	it("allows numbers less or equal to max", () => {
		const checker = DDataParser.checkerNumberMax(10);
		expect(checker.isAsynchronous()).toBe(false);

		const schema = DDataParser.number({
			checkers: [checker],
		});

		expect(schema.parse(10)).toStrictEqual(DEither.success(10));
		expect(schema.parse(5)).toStrictEqual(DEither.success(5));
	});

	it("allows numbers strictly less than max when exclusive is true", () => {
		const checker = DDataParser.checkerNumberMax(10, {
			exclusive: true,
		});
		const schema = DDataParser.number({
			checkers: [checker],
		});

		expect(schema.parse(9)).toStrictEqual(DEither.success(9));
	});

	it("fails numbers above maximum", () => {
		const checker = DDataParser.checkerNumberMax(10);
		const schema = DDataParser.number({
			checkers: [checker],
			errorMessage: "number.max",
		});

		const result = schema.parse(11);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "number <= 10",
							path: "",
							data: 11,
							message: "number.max",
						}),
					],
					currentPath: [],
				}),
			),
		);
	});

	it("fails number equal to max when exclusive is true", () => {
		const checker = DDataParser.checkerNumberMax(10, {
			exclusive: true,
		});
		const schema = DDataParser.number({
			checkers: [checker],
			errorMessage: "number.max.exclusive",
		});

		const result = schema.parse(10);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "number < 10",
							path: "",
							data: 10,
							message: "number.max.exclusive",
						}),
					],
					currentPath: [],
				}),
			),
		);
	});
});
