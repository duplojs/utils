import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser boolean", () => {
	it("create data parser with checker", () => {
		const dataParser = DDataParser.boolean({
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<typeof value, boolean, "strict">;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<typeof value, boolean, "strict">;
				return true;
			}),
		);

		void dataParser;
	});

	it("parses boolean without coercion", () => {
		const schema = DDataParser.boolean();

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			boolean,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			boolean,
			"strict"
		>;

		expect(schema.parse(true)).toStrictEqual(DEither.success(true));
		expect(schema.parse(false)).toStrictEqual(DEither.success(false));
	});

	it("fails when value is not boolean", () => {
		const schema = DDataParser.boolean({ errorMessage: "boolean.invalid" });

		expect(
			schema.parse("true"),
		).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "boolean",
							path: "",
							data: "true",
							message: "boolean.invalid",
						}),
					],
					currentPath: [],
				}),
			),
		);
	});

	it("coerces string and number representations", () => {
		const schema = DDataParser.boolean({ coerce: true });

		expect(schema.parse("true")).toStrictEqual(DEither.success(true));
		expect(schema.parse("false")).toStrictEqual(DEither.success(false));
		expect(schema.parse(" TRUE  ")).toStrictEqual(DEither.success(true));
		expect(schema.parse(1)).toStrictEqual(DEither.success(true));
		expect(schema.parse(0)).toStrictEqual(DEither.success(false));
		expect(schema.parse(true)).toStrictEqual(DEither.success(true));
	});

	it("fails coercion on string", () => {
		const schema = DDataParser.boolean({
			coerce: true,
			errorMessage: "boolean.invalid",
		});

		const result = schema.parse("yes");

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "boolean",
							path: "",
							data: "yes",
							message: "boolean.invalid",
						}),
					],
					currentPath: [],
				}),
			),
		);
	});

	it("fails coercion", () => {
		const schema = DDataParser.boolean({
			coerce: true,
			errorMessage: "boolean.invalid",
		});

		const result = schema.parse(12n);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "boolean",
							path: "",
							data: 12n,
							message: "boolean.invalid",
						}),
					],
					currentPath: [],
				}),
			),
		);
	});
});
