import { DDataParser } from "@scripts";

describe("dataParser error helpers", () => {
	it("SymbolDataParserError constants", () => {
		expect(typeof DDataParser.SymbolDataParserErrorIssue).toBe("symbol");
		expect(
			Symbol.keyFor(DDataParser.SymbolDataParserErrorIssue),
		).toBe(DDataParser.SymbolDataParserErrorIssueLabel);
	});

	it("createError returns kind-wrapped accumulator", () => {
		const error = DDataParser.createError();

		expect(DDataParser.errorKind.has(error)).toBe(true);
		expect(error).toStrictEqual(
			DDataParser.errorKind.addTo({
				issues: [],
				currentPath: [],
			}),
		);
		expect(DDataParser.errorKind.getValue(error)).toBeNull();
	});

	it("setErrorPath updates current path values", () => {
		const error = DDataParser.createError();

		const returned = DDataParser.setErrorPath(error, "user", 0);
		expect(returned).toBe(error);
		expect(error.currentPath).toStrictEqual(["user"]);

		DDataParser.setErrorPath(error, "email", 1);
		expect(error.currentPath).toStrictEqual(["user", "email"]);
	});

	it("addIssue stores source with joined path and popErrorPath removes last segment", () => {
		const error = DDataParser.createError();
		const parser = DDataParser.string();

		DDataParser.setErrorPath(error, "user", 0);
		DDataParser.setErrorPath(error, "email", 1);

		DDataParser.addIssue(error, parser, undefined);
		DDataParser.addPromiseIssue(error, parser as never, undefined);

		expect(error.issues).toStrictEqual([
			DDataParser.errorIssueKind.addTo({
				source: parser,
				path: "user.email",
				data: undefined,
			}),
			DDataParser.errorPromiseIssueKind.addTo({
				source: parser,
				path: "user.email",
				data: undefined,
			}),
		]);

		const afterPop = DDataParser.popErrorPath(error);
		expect(afterPop).toBe(error);
		expect(error.currentPath).toStrictEqual(["user"]);
	});
});
