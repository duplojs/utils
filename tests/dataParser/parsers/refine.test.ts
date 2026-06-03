import { DDataParser, DEither, isType } from "@scripts";

describe("DDataParser checker refine", () => {
	it("refine string", () => {
		const checker = DDataParser.checkerRefine((input: string) => input.length === 3, { errorMessage: "test" });
		const schema = DDataParser.string().addChecker(checker);

		expect(schema.parse("123")).toStrictEqual(DEither.success("123"));
		expect(schema.parse("test")).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "value matching refine predicate",
							path: "",
							data: "test",
							message: "test",
						}),
					],
					currentPath: [],
				}),
			),
		);
	});

	it("refine literal", () => {
		const schema = DDataParser.literal([12, null]).addChecker(
			DDataParser.checkerRefine((input) => !isType(input, "null")),
		);

		expect(schema.parse(12)).toStrictEqual(DEither.success(12));
		expect(schema.parse(null)).toStrictEqual(
			DEither.error(
				expect.any(Object),
			),
		);
	});

	it("reports whether the refine predicate is asynchronous", () => {
		const syncChecker = DDataParser.checkerRefine(() => true);
		const asyncChecker = DDataParser.checkerRefine(
			(async() => {
				await Promise.resolve();
				return true;
			}) as never,
		);

		expect(syncChecker.isAsynchronous()).toBe(false);
		expect(asyncChecker.isAsynchronous()).toBe(true);
	});

	it("reports an issue when the asynchronous refine predicate rejects", async() => {
		const error = new Error("refine failed");
		const schema = DDataParser.string({
			errorMessage: "refine.error",
		}).addChecker(
			DDataParser.checkerRefine(
				(async() => {
					await Promise.resolve();
					throw error;
				}) as never,
			),
		);

		await expect(schema.asyncParse("value")).resolves.toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "successful refine result",
							path: "",
							data: error,
							message: "refine.error",
						}),
					],
					currentPath: [],
				}),
			),
		);
	});
});
