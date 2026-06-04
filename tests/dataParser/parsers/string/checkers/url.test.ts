import { DDataParser, DEither } from "@scripts";

describe("DDataParser string url checker", () => {
	it("accepts valid http url without normalization", () => {
		const checker = DDataParser.checkerUrl({
			protocol: /^https?$/,
		});
		expect(checker.isAsynchronous()).toBe(false);

		const schema = DDataParser.string({
			checkers: [checker],
		});

		const result = schema.parse("https://example.com/path");

		expect(result).toStrictEqual(DEither.success("https://example.com/path"));

		expect(schema.parse("sftp://example.com/path")).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "URL with protocol matching ^https?$",
							path: "",
							data: "sftp://example.com/path",
							message: undefined,
						}),
					],
					currentPath: [],
				}),
			),
		);
	});

	it("normalizes output when normalize option is true", () => {
		const schema = DDataParser.url({ normalize: true });

		const result = schema.parse("https://example.com/path?query=1#hash");

		expect(result).toStrictEqual(DEither.success("https://example.com/path?query=1#hash"));
	});

	it("fails when hostname does not match regex", () => {
		const checker = DDataParser.checkerUrl({
			hostname: /^api\.example\.com$/,
		});

		const schema = DDataParser.string({
			checkers: [checker],
		});

		const result = schema.parse("https://www.example.com");

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "URL with hostname matching ^api\\.example\\.com$",
							path: "",
							data: "https://www.example.com",
							message: undefined,
						}),
					],
					currentPath: [],
				}),
			),
		);

		expect(schema.parse("https://api.example.com/test")).toStrictEqual(
			DEither.success("https://api.example.com/test"),
		);
	});

	it("fails when value is not a url", () => {
		const checker = DDataParser.checkerUrl();
		const schema = DDataParser.string({
			checkers: [checker],
		});

		const result = schema.parse("not a url");

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "valid URL",
							path: "",
							data: "not a url",
							message: undefined,
						}),
					],
					currentPath: [],
				}),
			),
		);
	});
});
