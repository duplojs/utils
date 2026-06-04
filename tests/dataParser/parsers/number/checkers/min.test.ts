import { DDataParser, DEither } from "@scripts";

describe("DDataParser number checker min", () => {
	it("allows numbers greater or equal to min", () => {
		const checker = DDataParser.checkerNumberMin(5);
		expect(checker.isAsynchronous()).toBe(false);

		const schema = DDataParser.number({
			checkers: [checker],
		});

		expect(schema.parse(5)).toStrictEqual(DEither.success(5));
		expect(schema.parse(10)).toStrictEqual(DEither.success(10));
	});

	it("allows numbers strictly greater than min when exclusive is true", () => {
		const checker = DDataParser.checkerNumberMin(5, {
			exclusive: true,
		});
		const schema = DDataParser.number({
			checkers: [checker],
		});

		expect(schema.parse(6)).toStrictEqual(DEither.success(6));
	});

	it("fails numbers below minimum", () => {
		const checker = DDataParser.checkerNumberMin(0);
		const schema = DDataParser.number({
			checkers: [checker],
			errorMessage: "number.min",
		});

		const result = schema.parse(-1);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "number >= 0",
							path: "",
							data: -1,
							message: "number.min",
						}),
					],
					currentPath: [],
				}),
			),
		);
	});

	it("fails number equal to min when exclusive is true", () => {
		const checker = DDataParser.checkerNumberMin(5, {
			exclusive: true,
		});
		const schema = DDataParser.number({
			checkers: [checker],
			errorMessage: "number.min.exclusive",
		});

		const result = schema.parse(5);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "number > 5",
							path: "",
							data: 5,
							message: "number.min.exclusive",
						}),
					],
					currentPath: [],
				}),
			),
		);
	});
});
