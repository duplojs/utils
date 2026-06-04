import { DDataParser, DEither, E, type ExpectType } from "@scripts";

describe("DDataParser union", () => {
	it("create data parser with checker", () => {
		const dataParser = DDataParser.union([DDataParser.string(), DDataParser.number()], {
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<typeof value, string | number, "strict">;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<typeof value, string | number, "strict">;
				return true;
			}),
		);

		void dataParser;
	});

	it("parses with the first matching parser", () => {
		const schema = DDataParser.union([
			DDataParser.string(),
			DDataParser.number(),
		]);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			string | number,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			string | number,
			"strict"
		>;

		const result = schema.parse("value");

		expect(result).toStrictEqual(DEither.success("value"));

		type _CheckResult = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<string | number>,
			"strict"
		>;
	});

	it("parses with a later parser option", () => {
		const schema = DDataParser.union([
			DDataParser.string(),
			DDataParser.number(),
		]);

		const result = schema.parse(42);

		expect(result).toStrictEqual(DEither.success(42));
	});

	it("aggregates errors when all options fail", () => {
		const stringParser = DDataParser.string();
		const numberParser = DDataParser.number();
		const schema = DDataParser.union([
			stringParser,
			numberParser,
		]);

		const result = schema.parse(true);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "string",
							path: "(option: 0)",
							data: true,
							message: undefined,
						}),
						DDataParser.errorIssueKind.addTo({
							expected: "number",
							path: "(option: 1)",
							data: true,
							message: undefined,
						}),
						DDataParser.errorIssueKind.addTo({
							expected: "respect at least one union value",
							path: "",
							data: true,
							message: undefined,
						}),
					],
					currentPath: [],
				}),
			),
		);
	});

	it("cleans the temporary option path after execution", () => {
		const schema = DDataParser.union([
			DDataParser.string(),
			DDataParser.number(),
		]);
		const error = DDataParser.createError();

		const result = schema.exec(true, error);

		expect(result).toBe(DDataParser.SymbolDataParserError);
		expect(error.currentPath).toStrictEqual([]);
	});

	describe("async", () => {
		it("parses with the first matching parser", async() => {
			const schema = DDataParser.union([
				DDataParser.string(),
				DDataParser.number(),
			]);

			const result = await schema.asyncParse("value");

			expect(result).toStrictEqual(DEither.success("value"));
		});

		it("aggregates errors when all options fail", async() => {
			const stringParser = DDataParser.string();
			const numberParser = DDataParser.number();
			const schema = DDataParser.union([
				stringParser,
				numberParser,
			]);

			const result = await schema.asyncParse(true);

			expect(result).toStrictEqual(
				DEither.error(
					DDataParser.errorKind.addTo({
						issues: [
							DDataParser.errorIssueKind.addTo({
								expected: "string",
								path: "(option: 0)",
								data: true,
								message: undefined,
							}),
							DDataParser.errorIssueKind.addTo({
								expected: "number",
								path: "(option: 1)",
								data: true,
								message: undefined,
							}),
							DDataParser.errorIssueKind.addTo({
								expected: "respect at least one union value",
								path: "",
								data: true,
								message: undefined,
							}),
						],
						currentPath: [],
					}),
				),
			);
		});
	});

	describe("isAsynchronous", () => {
		it("returns false when all options are sync", () => {
			const schema = DDataParser.union([
				DDataParser.string(),
				DDataParser.number(),
			]);

			expect(schema.isAsynchronous()).toBe(false);
		});

		it("returns true when any option is async", () => {
			const asyncOption = DDataParser.transform(
				DDataParser.string(),
				async(value) => Promise.resolve(value),
			);
			const schema = DDataParser.union([
				asyncOption,
				DDataParser.number(),
			]);

			expect(schema.isAsynchronous()).toBe(true);
		});
	});
});
