import { DDataParser, DEither, Printer } from "@scripts";

describe("dataParser error helpers", () => {
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

	it("addIssue stores expected with joined path and popErrorPath removes last segment", () => {
		const error = DDataParser.createError();

		DDataParser.setErrorPath(error, "user", 0);
		DDataParser.setErrorPath(error, "email", 1);

		DDataParser.addIssue(error, "value", undefined, undefined);

		expect(error.issues).toStrictEqual([
			DDataParser.errorIssueKind.addTo({
				expected: "value",
				path: "user.email",
				data: undefined,
				message: undefined,
			}),
		]);

		const afterPop = DDataParser.popErrorPath(error);
		expect(afterPop).toBe(error);
		expect(error.currentPath).toStrictEqual(["user"]);
	});

	it("interpretError renders multiple nested issues", () => {
		const error = DDataParser.createError();

		DDataParser.setErrorPath(error, "user", 0);
		DDataParser.setErrorPath(error, "email", 1);
		DDataParser.addIssue(error, "string with max 5 characters", "tonton", "email is invalid");

		DDataParser.setErrorPath(error, "useAsyncRetry", 0);
		DDataParser.setErrorPath(error, "(option 1)", 1);
		DDataParser.setErrorPath(error, "age", 2);
		DDataParser.addIssue(error, "number >= 18", "15", "age too small");

		expect(DDataParser.interpretError(error)).toBe(
			Printer.renderParagraph([
				Printer.colorizedBold("Validation failed", "red"),
				Printer.renderParagraph([
					"",
					Printer.renderLine([
						Printer.colorizedBold("✖", "red"),
						Printer.colorizedBold("user.email", "cyan"),
						"expected",
						Printer.colorized("string with max 5 characters", "green"),
						"but received",
						Printer.colorized("\"tonton\"", "red"),
					]),
					`${Printer.indent(1)}↳ email is invalid`,
				]),
				Printer.renderParagraph([
					"",
					Printer.renderLine([
						Printer.colorizedBold("✖", "red"),
						Printer.colorizedBold("useAsyncRetry.(option 1).age", "cyan"),
						"expected",
						Printer.colorized("number >= 18", "green"),
						"but received",
						Printer.colorized("\"15\"", "red"),
					]),
					`${Printer.indent(1)}↳ age too small`,
				]),
			]),
		);
	});

	it("interpretError renders no issue found for empty errors and supports either left input", () => {
		const error = DDataParser.createError();
		const eitherError = DEither.left("error", error);

		expect(DDataParser.interpretError(eitherError)).toBe(
			Printer.renderParagraph([
				Printer.colorizedBold("Validation failed", "red"),
				"No issue found",
			]),
		);
	});

	it("interpretError renders root when issue path is empty", () => {
		const error = DDataParser.createError();

		DDataParser.addIssue(error, "string", "", "root issue");

		expect(DDataParser.interpretError(error)).toBe(
			Printer.renderParagraph([
				Printer.colorizedBold("Validation failed", "red"),
				Printer.renderParagraph([
					"",
					Printer.renderLine([
						Printer.colorizedBold("✖", "red"),
						Printer.colorizedBold("<root>", "cyan"),
						"expected",
						Printer.colorized("string", "green"),
						"but received",
						Printer.colorized("\"\"", "red"),
					]),
					`${Printer.indent(1)}↳ root issue`,
				]),
			]),
		);
	});
});
