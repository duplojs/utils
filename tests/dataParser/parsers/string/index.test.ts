import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser string", () => {
	it("create data parser with checker", () => {
		const dataParser = DDataParser.string({
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<typeof value, string, "strict">;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<typeof value, string, "strict">;
				return true;
			}),
		);

		void dataParser;
	});

	it("succes parsing", () => {
		const schema = DDataParser.string();
		expect(schema.isAsynchronous()).toBe(false);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			string,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			string,
			"strict"
		>;

		const result = schema.parse("test");

		expect(result).toStrictEqual(DEither.success("test"));

		type _CheckResult = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<string>,
			"strict"
		>;
	});

	it("error parsing", () => {
		const schema = DDataParser.string({ errorMessage: "error" });

		const result = schema.parse(11);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "string",
							path: "",
							data: 11,
							message: "error",
						}),
					],
					currentPath: [],
				}),
			),
		);
	});

	it("succes coerc parsing", () => {
		const schema = DDataParser.string({ coerce: true });

		const result = schema.parse(11);

		expect(result).toStrictEqual(DEither.success("11"));
	});
});
