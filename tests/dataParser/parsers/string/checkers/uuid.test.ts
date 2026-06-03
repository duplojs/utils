import { DDataParser, DEither } from "@scripts";

describe("DDataParser string checker uuid", () => {
	it("accepts valid uuid", () => {
		const schema = DDataParser.uuid();

		expect(schema.parse("8e1f2a3b-4c5d-6e7f-8a9b-0c1d2e3f4a5b"))
			.toStrictEqual(
				DEither.success("8e1f2a3b-4c5d-6e7f-8a9b-0c1d2e3f4a5b"),
			);
	});

	it("fails for invalid uuid", () => {
		const checker = DDataParser.checkerUuid();
		expect(checker.isAsynchronous()).toBe(false);

		const schema = DDataParser.string({
			checkers: [checker],
			errorMessage: "string.uuid",
		});

		const result = schema.parse("not-a-uuid");

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "uuid",
							path: "",
							data: "not-a-uuid",
							message: "string.uuid",
						}),
					],
					currentPath: [],
				}),
			),
		);
	});
});
