import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser number", () => {
	it("refines output and input with predicate checker", () => {
		const schema = DDataParser.number().addChecker(
			DDataParser.checkerRefine((value): value is 42 => value === 42),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			42,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			42,
			"strict"
		>;
	});

	it("create data parser with checker", () => {
		const dataParser = DDataParser.number({
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<typeof value, number, "strict">;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<typeof value, number, "strict">;
				return true;
			}),
		);

		void dataParser;
	});

	it("success parsing", () => {
		const schema = DDataParser.number();
		expect(schema.isAsynchronous()).toBe(false);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			number,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			number,
			"strict"
		>;

		const result = schema.parse(42);

		expect(result).toStrictEqual(DEither.success(42));

		type _CheckResult = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<number>,
			"strict"
		>;
	});

	it("error parsing", () => {
		const schema = DDataParser.number({ errorMessage: "error" });

		const result = schema.parse("42");

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "number",
							path: "",
							data: "42",
							message: "error",
						}),
					],
					currentPath: [],
				}),
			),
		);
	});

	it("success coercing parsing", () => {
		const schema = DDataParser.number({ coerce: true });

		const result = schema.parse("11");

		expect(result).toStrictEqual(DEither.success(11));
	});

	it("fails to coerce NaN", () => {
		const schema = DDataParser.number({ coerce: true });

		for (const value of ["not-a-number", "Infinity", "-Infinity"]) {
			expect(schema.parse(value)).toStrictEqual(
				DEither.error(
					DDataParser.errorKind.addTo({
						issues: [
							DDataParser.errorIssueKind.addTo({
								expected: "number",
								path: "",
								data: value,
								message: undefined,
							}),
						],
						currentPath: [],
					}),
				),
			);
		}
	});

	it("rejects NaN and infinity values", () => {
		const schema = DDataParser.number();

		for (const value of [Number.NaN, Infinity, -Infinity]) {
			expect(schema.parse(value)).toStrictEqual(
				DEither.error(
					DDataParser.errorKind.addTo({
						issues: [
							DDataParser.errorIssueKind.addTo({
								expected: "number",
								path: "",
								data: value,
								message: undefined,
							}),
						],
						currentPath: [],
					}),
				),
			);
		}
	});
});
