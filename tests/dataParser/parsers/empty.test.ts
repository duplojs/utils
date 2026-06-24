import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser empty", () => {
	it("refines output and input with predicate checker", () => {
		const schema = DDataParser.empty().addChecker(
			DDataParser.checkerRefine((value): value is undefined => value === undefined),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			undefined,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			undefined,
			"strict"
		>;
	});

	it("create data parser with checker", () => {
		const dataParser = DDataParser.empty({
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<typeof value, undefined, "strict">;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<typeof value, undefined, "strict">;
				return true;
			}),
		);

		void dataParser;
	});

	it("parses undefined value", () => {
		const schema = DDataParser.empty();
		expect(schema.isAsynchronous()).toBe(false);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			undefined,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			undefined,
			"strict"
		>;

		expect(schema.parse(undefined)).toStrictEqual(DEither.success(undefined));
	});

	it("fails when value is not undefined", () => {
		const schema = DDataParser.empty({ errorMessage: "undefined.invalid" });

		const result = schema.parse("value");

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "undefined",
							path: "",
							data: "value",
							message: "undefined.invalid",
						}),
					],
					currentPath: [],
				}),
			),
		);
	});

	it("coerce", () => {
		const schema = DDataParser.empty({ coerce: true });

		expect(schema.parse("undefined")).toStrictEqual(DEither.success(undefined));
		expect(schema.parse("not-undefined")).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "undefined",
							path: "",
							data: "not-undefined",
							message: undefined,
						}),
					],
					currentPath: [],
				}),
			),
		);
	});
});
