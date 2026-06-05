import * as DDataParser from "@scripts/dataParser";
import * as DEither from "@scripts/either";
import { asserts, type ExpectType } from "@scripts/common";
import { createDataParserKind } from "@scripts/dataParser/kind";

describe("base parser", () => {
	const checkerTestKind = createDataParserKind("checker-test");
	const parserTestKind = createDataParserKind("parser-test");
	const asyncParserTestKind = createDataParserKind("async-parser-test");

	interface CheckerTestDefinition extends DDataParser.DataParserCheckerDefinition {
		readonly positive: boolean;
	}

	class CheckerTest extends DDataParser.DataParserCheckerBase.init(
		checkerTestKind,
	)<
			CheckerTestDefinition,
			number
		> {
		public get classConstructor() {
			return this.checkConstructor(CheckerTest);
		}

		public isAsynchronous() {
			return false;
		}

		public static override execCheck(
			value: number,
			error: DDataParser.DataParserError,
			self: CheckerTest,
			dataParser: DDataParser.DataParser,
		) {
			if (!self.definition.positive || value > 0) {
				return value;
			}

			return DDataParser.addIssue(
				error,
				"positive number",
				value,
				self.definition.errorMessage ?? dataParser.definition.errorMessage,
			);
		}

		public static override create(
			definition: Partial<CheckerTestDefinition> = {},
		) {
			return new CheckerTest({
				...definition,
				positive: definition.positive ?? true,
			});
		}
	}

	interface ParserTestDefinition extends DDataParser.DataParserDefinition<
		| CheckerTest
		| DDataParser.DataParserCheckerRefine
	> {
		readonly asynchronous: boolean;
	}

	class ParserTest extends DDataParser.DataParserBase.init(
		parserTestKind,
	)<
			ParserTestDefinition,
			number,
			unknown
		> {
		public get classConstructor() {
			return this.checkConstructor(ParserTest);
		}

		public declare addChecker: (
			...checkers: CheckerTest[]
		) => ParserTest;

		public static override execParse(
			self: ParserTest,
			data: unknown,
			error: DDataParser.DataParserError,
		) {
			if (typeof data === "number") {
				return data;
			}

			return DDataParser.addIssue(
				error,
				"number",
				data,
				self.definition.errorMessage,
			);
		}

		public static override dataParserIsAsynchronous(self: ParserTest) {
			return self.definition.asynchronous;
		}

		public static override prepareDefinition(
			definition: Partial<ParserTestDefinition> = {},
		): ParserTestDefinition {
			return {
				...definition,
				asynchronous: definition.asynchronous ?? false,
				checkers: definition.checkers ?? [],
				errorMessage: definition.errorMessage,
			};
		}

		public static override create(
			definition?: Partial<ParserTestDefinition>,
		) {
			return new ParserTest(this.prepareDefinition(definition));
		}
	}

	class AsyncParserTest extends DDataParser.DataParserBase.init(
		asyncParserTestKind,
	)<
			ParserTestDefinition,
			number,
			unknown
		> {
		public get classConstructor() {
			return this.checkConstructor(AsyncParserTest);
		}

		public static override execParse(
			self: AsyncParserTest,
			data: unknown,
			error: DDataParser.DataParserError,
		) {
			return Promise.resolve(
				typeof data === "number"
					? data
					: DDataParser.addIssue(
						error,
						"number",
						data,
						self.definition.errorMessage,
					),
			);
		}

		public static override dataParserIsAsynchronous(self: AsyncParserTest) {
			return self.definition.asynchronous;
		}

		public static override prepareDefinition(
			definition: Partial<ParserTestDefinition> = {},
		): ParserTestDefinition {
			return {
				...definition,
				asynchronous: true,
				checkers: definition.checkers ?? [],
				errorMessage: definition.errorMessage,
			};
		}

		public static override create(
			definition?: Partial<ParserTestDefinition>,
		) {
			return new AsyncParserTest(this.prepareDefinition(definition));
		}
	}

	it("creates a checker class instance with its definition and kinds", () => {
		const checker = CheckerTest.create({
			errorMessage: "positive",
		});

		expect(checker).toBeInstanceOf(CheckerTest);
		expect(DDataParser.checkerKind.has(checker)).toBe(true);
		expect(checkerTestKind.has(checker)).toBe(true);
		expect(checker.definition).toStrictEqual({
			errorMessage: "positive",
			positive: true,
		});
		expect(checker.isAsynchronous()).toBe(false);
	});

	it("creates a parser class instance with its definition and kinds", () => {
		const checker = CheckerTest.create();
		const parser = ParserTest.create({
			errorMessage: "invalid",
			checkers: [checker],
		});

		expect(parser).toBeInstanceOf(ParserTest);
		expect(DDataParser.dataParserKind.has(parser)).toBe(true);
		expect(parserTestKind.has(parser)).toBe(true);
		expect(parser.definition).toStrictEqual({
			asynchronous: false,
			errorMessage: "invalid",
			checkers: [checker],
		});
	});

	it("clones a checker definition without mutating the original checker", () => {
		const checker = CheckerTest.create({
			errorMessage: "positive",
		});

		const clone = checker.clone();

		type Check = ExpectType<
			typeof clone,
			CheckerTest,
			"strict"
		>;

		expect(clone).toBeInstanceOf(CheckerTest);
		expect(clone).not.toBe(checker);
		expect(clone.definition).toStrictEqual(checker.definition);
		expect(clone.definition).not.toBe(checker.definition);
	});

	it("sets a checker error message by mutating the checker definition", () => {
		const checker = CheckerTest.create();
		const parser = ParserTest.create({
			errorMessage: "number.invalid",
			checkers: [checker],
		});

		const result = checker.setErrorMessage("positive.invalid");
		const parsedResult = parser.parse(-1);

		type Check = ExpectType<
			typeof result,
			CheckerTest,
			"strict"
		>;

		expect(result).toBe(checker);
		expect(checker.definition.errorMessage).toBe("positive.invalid");
		expect(parsedResult).toStrictEqual(DEither.error(expect.any(Object)));
		asserts(parsedResult, DEither.errorKind.has);
		expect(DEither.unwrapLeft(parsedResult).issues).toStrictEqual([
			expect.objectContaining({
				expected: "positive number",
				data: -1,
				message: "positive.invalid",
			}),
		]);
	});

	it("adds a checker error message without mutating the original checker", () => {
		const checker = CheckerTest.create();
		const newChecker = checker.addErrorMessage("positive.invalid");
		const parser = ParserTest.create({
			errorMessage: "number.invalid",
			checkers: [newChecker],
		});

		const parsedResult = parser.parse(-1);

		type Check = ExpectType<
			typeof newChecker,
			CheckerTest,
			"strict"
		>;

		expect(newChecker).toBeInstanceOf(CheckerTest);
		expect(newChecker).not.toBe(checker);
		expect(checker.definition.errorMessage).toBeUndefined();
		expect(newChecker.definition.errorMessage).toBe("positive.invalid");
		expect(parsedResult).toStrictEqual(DEither.error(expect.any(Object)));
		asserts(parsedResult, DEither.errorKind.has);
		expect(DEither.unwrapLeft(parsedResult).issues).toStrictEqual([
			expect.objectContaining({
				expected: "positive number",
				data: -1,
				message: "positive.invalid",
			}),
		]);
	});

	it("parses valid data and applies registered checkers", () => {
		const parser = ParserTest.create({
			checkers: [CheckerTest.create()],
		});

		expect(parser.parse(5)).toStrictEqual(DEither.success(5));
		expect(parser.parse(-1)).toStrictEqual(DEither.error(expect.any(Object)));
	});

	it("keeps a checker error through the remaining checkers", () => {
		const parser = ParserTest.create({
			checkers: [
				CheckerTest.create(),
				CheckerTest.create({
					positive: false,
				}),
			],
		});

		const result = parser.parse(-1);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "positive number",
							path: "",
							data: -1,
							message: undefined,
						}),
					],
					currentPath: [],
				}),
			),
		);
	});

	it("returns a parser error when core parsing fails", () => {
		const parser = ParserTest.create({
			errorMessage: "invalid",
		});

		const result = parser.parse("test");

		expect(result).toStrictEqual(DEither.error(expect.any(Object)));
		asserts(result, DEither.errorKind.has);
		expect(DEither.unwrapLeft(result).issues).toStrictEqual([
			expect.objectContaining({
				expected: "number",
				data: "test",
				message: "invalid",
			}),
		]);
	});

	it("returns parsed data or throws from parseOrThrow", () => {
		const parser = ParserTest.create();

		expect(parser.parseOrThrow(5)).toBe(5);
		expect(() => parser.parseOrThrow("test")).toThrow(DDataParser.ParseError);
	});

	it("adds checkers without mutating the original parser", () => {
		const checker = CheckerTest.create();
		const parser = ParserTest.create();

		const newParser = parser.addChecker(checker) as ParserTest;

		expect(newParser).toBeInstanceOf(ParserTest);
		expect(newParser).not.toBe(parser);
		expect(parser.definition.checkers).toStrictEqual([]);
		expect(newParser.definition.checkers).toStrictEqual([checker]);
	});

	it("clones the parser definition without mutating the original parser", () => {
		const checker = CheckerTest.create();
		const parser = ParserTest.create({
			checkers: [checker],
		});

		const clone = parser.clone();

		expect(clone).toBeInstanceOf(ParserTest);
		expect(clone).not.toBe(parser);
		expect(clone.definition).toStrictEqual(parser.definition);
		expect(clone.definition).not.toBe(parser.definition);
		expect(clone.definition.checkers).not.toBe(parser.definition.checkers);
	});

	it("sets an error message by mutating the parser definition", () => {
		const parser = ParserTest.create();

		const result = parser.setErrorMessage("number.invalid");
		const parsedResult = parser.parse("test");

		type Check = ExpectType<
			typeof result,
			ParserTest,
			"strict"
		>;

		expect(result).toBe(parser);
		expect(parser.definition.errorMessage).toBe("number.invalid");
		expect(parsedResult).toStrictEqual(DEither.error(expect.any(Object)));
		asserts(parsedResult, DEither.errorKind.has);
		expect(DEither.unwrapLeft(parsedResult).issues).toStrictEqual([
			expect.objectContaining({
				expected: "number",
				data: "test",
				message: "number.invalid",
			}),
		]);
	});

	it("adds an error message without mutating the original parser", () => {
		const parser = ParserTest.create({
			checkers: [CheckerTest.create()],
		});

		const newParser = parser.addErrorMessage("number.invalid");
		const parsedResult = newParser.parse("test");
		const checkerResult = newParser.parse(-1);

		type Check = ExpectType<
			typeof newParser,
			ParserTest,
			"strict"
		>;

		expect(newParser).toBeInstanceOf(ParserTest);
		expect(newParser).not.toBe(parser);
		expect(parser.definition.errorMessage).toBeUndefined();
		expect(newParser.definition.errorMessage).toBe("number.invalid");
		expect(newParser.definition.checkers).toStrictEqual(parser.definition.checkers);
		expect(newParser.definition.checkers).not.toBe(parser.definition.checkers);
		expect(parsedResult).toStrictEqual(DEither.error(expect.any(Object)));
		asserts(parsedResult, DEither.errorKind.has);
		expect(DEither.unwrapLeft(parsedResult).issues).toStrictEqual([
			expect.objectContaining({
				expected: "number",
				data: "test",
				message: "number.invalid",
			}),
		]);
		expect(checkerResult).toStrictEqual(DEither.error(expect.any(Object)));
		asserts(checkerResult, DEither.errorKind.has);
		expect(DEither.unwrapLeft(checkerResult).issues).toStrictEqual([
			expect.objectContaining({
				expected: "positive number",
				data: -1,
				message: "number.invalid",
			}),
		]);
	});

	it("reports whether the parser or one of its checkers is asynchronous", () => {
		const syncParser = ParserTest.create();
		const asyncParser = ParserTest.create({
			asynchronous: true,
		});
		const parserWithAsyncChecker = ParserTest.create({
			checkers: [
				DDataParser.checkerRefine(async() => {
					await Promise.resolve();
					return true;
				}),
			],
		});

		expect(syncParser.isAsynchronous()).toBe(false);
		expect(asyncParser.isAsynchronous()).toBe(true);
		expect(parserWithAsyncChecker.isAsynchronous()).toBe(true);
	});

	it("check if asynchronous on recursive schema", () => {
		interface Schema {
			test: Schema;
			toto: string;
		}

		const recursiveSchema: DDataParser.DataParser<Schema> = DDataParser.object({
			test: DDataParser.lazy(() => recursiveSchema),
			toto: DDataParser.string(),
		});

		expect(recursiveSchema.isAsynchronous()).toBe(false);

		const asyncRecursiveSchema: DDataParser.DataParser<Schema> = DDataParser.object({
			test: DDataParser.lazy(() => recursiveSchema),
			toto: DDataParser.string().addChecker(
				DDataParser.checkerRefine(async() => {
					await Promise.resolve();
					return true;
				}),
			),
		});

		expect(asyncRecursiveSchema.isAsynchronous()).toBe(true);
	});

	it("awaits asynchronous parsing with asyncParse and asyncParseOrThrow", async() => {
		const parser = AsyncParserTest.create();

		await expect(parser.asyncParse(5)).resolves.toStrictEqual(DEither.success(5));
		await expect(parser.asyncParse("test")).resolves.toStrictEqual(DEither.error(expect.any(Object)));
		await expect(parser.asyncParseOrThrow(5)).resolves.toBe(5);
		await expect(parser.asyncParseOrThrow("test")).rejects.toThrow(DDataParser.ParseError);
	});

	it("keeps an asynchronous checker error through the remaining checkers", async() => {
		const parser = AsyncParserTest.create({
			checkers: [
				CheckerTest.create(),
				CheckerTest.create({
					positive: false,
				}),
			],
		});

		const result = await parser.asyncParse(-1);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "positive number",
							path: "",
							data: -1,
							message: undefined,
						}),
					],
					currentPath: [],
				}),
			),
		);
	});

	it("returns or throws the synchronous execution error symbol for asynchronous parsing", () => {
		const parser = AsyncParserTest.create();

		const result = parser.parse(5);

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
		expect(() => parser.parseOrThrow(5)).toThrow(DDataParser.ParseError);
	});

	it("preserves the parser instance and output type with contract", () => {
		const parser = ParserTest.create();

		const contracted = parser.contract<number>();

		type Check = ExpectType<
			typeof contracted,
			DDataParser.DataParser<number>,
			"strict"
		>;

		expect(contracted).toBe(parser);
	});
});
