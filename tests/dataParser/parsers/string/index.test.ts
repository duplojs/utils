import { DDataParser, DEither, DString, type ExpectType } from "@scripts";

describe("DDataParser string", () => {
	it("refines output and input with predicate checker", () => {
		const schema = DDataParser.string().addChecker(
			DDataParser.checkerRefine((value): value is "hello" => value === "hello"),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			"hello",
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			"hello",
			"strict"
		>;
	});

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

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof dataParser>,
			string,
			"strict"
		>;
	});

	it("create data parser with refine predicate checker", () => {
		const dataParser = DDataParser.string({
			checkers: [DDataParser.checkerRefine(DString.startsWith("test"))],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<typeof value, `test${string}`, "strict">;
				return true;
			}),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof dataParser>,
			`test${string}`,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof dataParser>,
			`test${string}`,
			"strict"
		>;
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
