import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser string checker email", () => {
	it("accepts valid email", () => {
		const schema = DDataParser.email();

		expect(schema.parse("user@example.com")).toStrictEqual(DEither.success("user@example.com"));

		type check = ExpectType<
			DDataParser.Output<typeof schema>,
			`${string}@${string}.${string}`,
			"strict"
		>;

		type checkInput = ExpectType<
			DDataParser.Input<typeof schema>,
			`${string}@${string}.${string}`,
			"strict"
		>;
	});

	it("fails for invalid email", () => {
		const checker = DDataParser.checkerEmail();
		expect(checker.isAsynchronous()).toBe(false);

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
