import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser object", () => {
	it("refines output and input with predicate checker", () => {
		const schema = DDataParser.object({
			name: DDataParser.string(),
		}).addChecker(
			DDataParser.checkerRefine(
				(value): value is { name: "alice" } => value.name === "alice",
			),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			{ name: "alice" } & { name: string },
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			{ name: "alice" } & { name: string },
			"strict"
		>;
	});

	it("create data parser with checker", () => {
		const dataParser = DDataParser.object({ name: DDataParser.string() }, {
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<typeof value, { name: string }, "strict">;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<typeof value, { name: string }, "strict">;
				return true;
			}),
		);

		void dataParser;
	});

	it("success parsing", () => {
		const schema = DDataParser.object({
			name: DDataParser.string(),
			age: DDataParser.union([
				DDataParser.number(),
				DDataParser.literal(undefined),
			]),
		});

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			{
				name: string;
				age?: number;
			},
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			{
				name: string;
				age?: number;
			},
			"strict"
		>;

		const result = schema.parse({
			name: "mathcovax",
			age: 40,
		});

		expect(result).toStrictEqual(DEither.success({
			name: "mathcovax",
			age: 40,
		}));

		type _CheckResult = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<{
				name: string;
				age?: number;
			}>,
			"strict"
		>;
	});

	it("type error parsing", () => {
		const schema = DDataParser.object({
			name: DDataParser.string(),
		});

		const result = schema.parse("mathcovax");

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "object",
							path: "",
							data: "mathcovax",
							message: undefined,
						}),
					],
					currentPath: [],
				}),
			),
		);
	});

	it("key type error parsing", () => {
		const nameSchema = DDataParser.string();
		const schema = DDataParser.object({
			name: nameSchema,
		});

		const result = schema.parse({ name: 11 });

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "string",
							path: "name",
							data: 11,
							message: undefined,
						}),
					],
					currentPath: [],
				}),
			),
		);
	});

	it("missing key error parsing", () => {
		const nameSchema = DDataParser.string();
		const schema = DDataParser.object({
			name: nameSchema,
			age: DDataParser.number(),
		});

		const result = schema.parse({ age: 10 });

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "string",
							path: "name",
							data: undefined,
							message: undefined,
						}),
					],
					currentPath: [],
				}),
			),
		);
	});

	describe("async", () => {
		it("success parsing", async() => {
			const schema = DDataParser.object({
				name: DDataParser.string(),
				age: DDataParser.union([
					DDataParser.number(),
					DDataParser.literal(undefined),
				]),
			});

			const result = await schema.asyncParse({
				name: "mathcovax",
				age: 40,
			});

			expect(result).toStrictEqual(DEither.success({
				name: "mathcovax",
				age: 40,
			}));

		type _CheckResult = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<{
				name: string;
				age?: number;
			}>,
			"strict"
		>;
		});

		it("type error parsing", async() => {
			const schema = DDataParser.object({
				name: DDataParser.string(),
			});

			const result = await schema.asyncParse("mathcovax");

			expect(result).toStrictEqual(
				DEither.error(
					DDataParser.errorKind.addTo({
						issues: [
							DDataParser.errorIssueKind.addTo({
								expected: "object",
								path: "",
								data: "mathcovax",
								message: undefined,
							}),
						],
						currentPath: [],
					}),
				),
			);
		});

		it("key type error parsing", async() => {
			const nameSchema = DDataParser.string();
			const schema = DDataParser.object({
				name: nameSchema,
			});

			const result = await schema.asyncParse({ name: 11 });

			expect(result).toStrictEqual(
				DEither.error(
					DDataParser.errorKind.addTo({
						issues: [
							DDataParser.errorIssueKind.addTo({
								expected: "string",
								path: "name",
								data: 11,
								message: undefined,
							}),
						],
						currentPath: [],
					}),
				),
			);
		});

		it("missing key error parsing", async() => {
			const nameSchema = DDataParser.string();
			const schema = DDataParser.object({
				name: nameSchema,
				age: DDataParser.number(),
			});

			const result = await schema.asyncParse({ age: 10 });

			expect(result).toStrictEqual(
				DEither.error(
					DDataParser.errorKind.addTo({
						issues: [
							DDataParser.errorIssueKind.addTo({
								expected: "string",
								path: "name",
								data: undefined,
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
		it("returns false when all properties are sync", () => {
			const schema = DDataParser.object({
				name: DDataParser.string(),
				age: DDataParser.number(),
			});

			expect(schema.isAsynchronous()).toBe(false);
		});

		it("returns true when any property is async", () => {
			const asyncName = DDataParser.transform(
				DDataParser.string(),
				async(value) => Promise.resolve(value),
			);
			const schema = DDataParser.object({
				name: asyncName,
				age: DDataParser.number(),
			});

			expect(schema.isAsynchronous()).toBe(true);
		});
	});
});
