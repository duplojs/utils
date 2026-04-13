import { DDataParser, DEither } from "@scripts";

describe("DDataParser string checker match with regex", () => {
	it("match with regex", () => {
		const checker = DDataParser.checkerRegex(/t/);
		const schema = DDataParser.string({
			checkers: [checker],
		});

		expect(schema.parse("test")).toStrictEqual(DEither.success("test"));
		expect(schema.parse("toto")).toStrictEqual(DEither.success("toto"));
	});

	it("not match with regex", () => {
		const checker = DDataParser.checkerRegex(/t/);
		const schema = DDataParser.string({
			checkers: [checker],
		});

		const result = schema.parse("ok");

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "string with pattern t",
							path: "",
							data: "ok",
							message: undefined,
						}),
					],
					currentPath: [],
				}),
			),
		);
	});
});
