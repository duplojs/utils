import { DDataParser, DEither } from "@scripts";

describe("DDataParser string checker email", () => {
	it("accepts valid email", () => {
		const schema = DDataParser.email();

		expect(schema.parse("user@example.com")).toStrictEqual(DEither.success("user@example.com"));
	});

	it("fails for invalid email", () => {
		const checker = DDataParser.checkerEmail();
		const schema = DDataParser.string({
			checkers: [checker],
			errorMessage: "string.email",
		});

		const result = schema.parse("invalid-email");

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "email",
							path: "",
							data: "invalid-email",
							message: "string.email",
						}),
					],
					currentPath: [],
				}),
			),
		);
	});
});
