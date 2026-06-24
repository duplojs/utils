import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser transform", () => {
	it("refines output and input with predicate checker", () => {
		const schema = DDataParser.transform(
			DDataParser.string(),
			(value) => value,
		).addChecker(
			DDataParser.checkerRefine((value): value is "value" => value === "value"),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			"value",
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			"value",
			"strict"
		>;
	});

	it("create data parser with checker", () => {
		const dataParser = DDataParser.transform(DDataParser.string(), (input) => input.length, {
			checkers: [
				DDataParser.checkerRefine((value) => {
					// unresolved inference bug : value expect number
					type check = ExpectType<typeof value, unknown, "strict">;
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

	it("transforms inner parser output", () => {
		const schema = DDataParser.transform(
			DDataParser.number(),
			(value) => String(value),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			string,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			number,
			"strict"
		>;

		const result = schema.parse(21);

		expect(result).toStrictEqual(DEither.success("21"));

		type _CheckResult = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<string>,
			"strict"
		>;
	});

	it("fails when inner parser fails", () => {
		const inner = DDataParser.number({ errorMessage: "not-number" });
		const schema = DDataParser.transform(inner, (value) => value);
		const expectedError = DDataParser.createError();

		DDataParser.addIssue(expectedError, "number", "value", "not-number", inner);

		const result = schema.parse("value");

		expect(result).toStrictEqual(
			DEither.error(expectedError),
		);
	});

	it("collects promise usage as issue when theFunction returns promise in sync mode", () => {
		const schema = DDataParser.transform(
			DDataParser.number(),
			(value) => Promise.resolve(value),
		);

		const result = schema.parse(10);

		expect(result).toStrictEqual(
			DEither.error(
				expect.objectContaining({
					issues: [
						expect.objectContaining({
							expected: "synchronous result",
							data: expect.any(Promise),
						}),
					],
				}),
			),
		);
	});

	describe("async", () => {
		it("transforms inner parser output", async() => {
			const schema = DDataParser.transform(
				DDataParser.number(),
				(value) => Promise.resolve(String(value)),
			);

			const result = await schema.asyncParse(21);

			expect(result).toStrictEqual(DEither.success("21"));
		});

		it("fails when inner parser fails", async() => {
			const inner = DDataParser.number({ errorMessage: "not-number" });
			const schema = DDataParser.transform(inner, (value) => Promise.resolve(value));
			const expectedError = DDataParser.createError();

			DDataParser.addIssue(expectedError, "number", "value", "not-number", inner);

			const result = await schema.asyncParse("value");

			expect(result).toStrictEqual(
				DEither.error(expectedError),
			);
		});

		it("error when promise can't be resolved", async() => {
			const schema = DDataParser.transform(
				DDataParser.number(),
				(value) => Promise.reject(new Error()),
			);

			const result = await schema.asyncParse(10);

			expect(result).toStrictEqual(
				DEither.error(
					expect.objectContaining({
						issues: [
							expect.objectContaining({
								expected: "successful transform result",
								data: expect.any(Error),
							}),
						],
					}),
				),
			);
		});

		it("async context without async transform", async() => {
			const schema = DDataParser.transform(
				DDataParser.number(),
				(value) => String(value),
			);

			const result = await schema.asyncParse(10);

			expect(result).toStrictEqual(DEither.success("10"));
		});
	});

	describe("isAsynchronous", () => {
		it("returns false when transform function is sync", () => {
			const schema = DDataParser.transform(
				DDataParser.number(),
				(value) => value,
			);

			expect(schema.isAsynchronous()).toBe(false);
		});

		it("returns true when transform function is async", () => {
			const schema = DDataParser.transform(
				DDataParser.number(),
				async(value) => Promise.resolve(value),
			);

			expect(schema.isAsynchronous()).toBe(true);
		});
	});
});
