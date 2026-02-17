import { DEither, DDataParser, createOverride, forward, type SimplifyTopLevel, RemoveKind } from "@scripts";
import { createDataParserKind } from "@scripts/dataParser/kind";

describe("base parser", () => {
	const dataParserTestKind = createDataParserKind("checker-test");

	const specificOverrideHandler = createOverride<DDataParser.DataParser>("@test/data-parser-base");
	const mockSpecificOverrideHandler = vi.fn(forward);
	specificOverrideHandler.apply = mockSpecificOverrideHandler;

	beforeEach(() => {
		mockSpecificOverrideHandler.mockClear();
	});

	it("dataParserCheckerInit", () => {
		const exec = (input: unknown) => input;

		const result = DDataParser.dataParserCheckerInit(
			dataParserTestKind as never,
			{
				definition: {
					errorMessage: "error",
				},
			},
			exec,
		);

		expect(DDataParser.checkerKind.has(result)).toBe(true);
		expect(dataParserTestKind.has(result)).toBe(true);
		expect(result).toStrictEqual(
			dataParserTestKind.addTo(
				DDataParser.checkerKind.addTo({
					definition: {
						errorMessage: "error",
					},
					exec,
				}),
			),
		);
	});

	describe("dataParserInit", () => {
		const execChecker = vi.fn((value: number) => value > 0 ? value : DDataParser.SymbolDataParserErrorIssue);

		const checker = DDataParser.dataParserCheckerInit(
			dataParserTestKind as never,
			{
				definition: {
					errorMessage: "positive",
				},
			},
			execChecker as never,
		);

		const exec = vi.fn((input) => typeof input === "number" ? input : DDataParser.SymbolDataParserErrorIssue);

		const parser = DDataParser.dataParserInit(
			dataParserTestKind as never,
			{
				errorMessage: "invalid",
				checkers: [checker],
			},
			exec as never,
			specificOverrideHandler,
		);

		beforeEach(() => {
			execChecker.mockClear();
			exec.mockClear();
		});

		it("have correct structure", () => {
			expect(DDataParser.dataParserKind.has(parser)).toBe(true);
			expect(parser).toStrictEqual(
				dataParserTestKind.addTo(
					DDataParser.dataParserKind.addTo(
						{
							definition: {
								errorMessage: "invalid",
								checkers: [checker],
							},
							exec: expect.any(Function),
							parse: expect.any(Function),
							asyncExec: expect.any(Function),
							asyncParse: expect.any(Function),
							addChecker: expect.any(Function),
							clone: expect.any(Function),
							contract: expect.any(Function),
							parseOrThrow: expect.any(Function),
							asyncParseOrThrow: expect.any(Function),
							isAsynchronous: expect.any(Function),
						},
						null as never,
					),
				),
			);
		});

		it("run base exec and return success", () => {
			const result = parser.parse(5);

			expect(result).toStrictEqual(DEither.success(5));
			expect(exec).toHaveBeenCalledWith(5, DDataParser.createError(), parser);
			expect(execChecker).toHaveBeenCalledWith(5, checker);
		});

		it("parseOrThrow returns value on success", () => {
			const result = parser.parseOrThrow(5);

			expect(result).toBe(5);
		});

		it("parseOrThrow throws on error", () => {
			expect(() => parser.parseOrThrow("test")).toThrow(DDataParser.DataParserThrowError);
		});

		it("run base exec and return error", () => {
			const result = parser.parse("test");

			expect(result).toStrictEqual(DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					parser,
					"test",
				),
			));
			expect(exec).toHaveBeenCalledWith(
				"test",
				DDataParser.addIssue(
					DDataParser.createError(),
					parser,
					"test",
				),
				parser,
			);
			expect(execChecker).toHaveBeenCalledTimes(0);
		});

		it("run base exec and check return error", () => {
			const result = parser.parse(-1);

			expect(result).toStrictEqual(DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					checker,
					-1,
				),
			));
			expect(exec).toHaveBeenCalledWith(
				-1,
				DDataParser.addIssue(
					DDataParser.createError(),
					checker,
					-1,
				),
				parser,
			);
			expect(execChecker).toHaveBeenCalledWith(-1, checker);
		});

		it("run base exec and check return error", () => {
			const parser = DDataParser.dataParserInit(
				dataParserTestKind as never,
				{
					errorMessage: "invalid",
					checkers: [],
				},
				exec,
				specificOverrideHandler,
			);

			const result = parser.parse(-1);

			expect(result).toStrictEqual(DEither.success(-1));
			expect(exec).toHaveBeenCalledWith(-1, DDataParser.createError(), parser);
		});

		it("add checkers", () => {
			const newParser = parser.addChecker(...[checker] as never);

			expect(newParser).toStrictEqual(
				dataParserTestKind.addTo(
					DDataParser.dataParserKind.addTo(
						{
							definition: {
								errorMessage: "invalid",
								checkers: [checker, checker],
							},
							exec: expect.any(Function),
							parse: expect.any(Function),
							asyncExec: expect.any(Function),
							asyncParse: expect.any(Function),
							addChecker: expect.any(Function),
							clone: expect.any(Function),
							contract: expect.any(Function),
							parseOrThrow: expect.any(Function),
							asyncParseOrThrow: expect.any(Function),
							isAsynchronous: expect.any(Function),
						},
						null as never,
					),
				),
			);
		});

		it("clone correct structure", () => {
			const newParser = parser.clone();
			expect(DDataParser.dataParserKind.has(newParser)).toBe(true);
			expect(newParser).toStrictEqual(
				dataParserTestKind.addTo(
					DDataParser.dataParserKind.addTo(
						{
							definition: {
								errorMessage: "invalid",
								checkers: [checker],
							},
							exec: expect.any(Function),
							parse: expect.any(Function),
							asyncExec: expect.any(Function),
							asyncParse: expect.any(Function),
							addChecker: expect.any(Function),
							clone: expect.any(Function),
							contract: expect.any(Function),
							parseOrThrow: expect.any(Function),
							asyncParseOrThrow: expect.any(Function),
							isAsynchronous: expect.any(Function),
						},
						null as never,
					),
				),
			);
		});

		it("promise issue", () => {
			const parser = DDataParser.dataParserInit(
				dataParserTestKind as never,
				{
					errorMessage: "invalid",
					checkers: [],
				},
				() => DDataParser.SymbolDataParserErrorPromiseIssue,
				specificOverrideHandler,
			);

			const result = parser.parse(-1);

			expect(result).toStrictEqual(
				DEither.error(
					DDataParser.addPromiseIssue(
						DDataParser.createError(),
						parser as never,
						-1,
					),
				),
			);

			expect(specificOverrideHandler.apply).toHaveBeenCalledOnce();
		});

		it("isAsynchronous", () => {
			expect(parser.isAsynchronous()).toBe(false);
		});
	});

	describe("async dataParserInit", () => {
		const execChecker = vi.fn(
			(value: number) => value > 0 ? value : DDataParser.SymbolDataParserErrorIssue,
		);

		const checker = DDataParser.dataParserCheckerInit(
			dataParserTestKind as never,
			{
				definition: {
					errorMessage: "positive",
				},
			},
			execChecker as never,
		);

		const exec = vi.fn(
			(input) => Promise.resolve(
				typeof input === "number"
					? input
					: DDataParser.SymbolDataParserErrorIssue,
			),
		);

		const parser = DDataParser.dataParserInit(
			dataParserTestKind as never,
			{
				errorMessage: "invalid",
				checkers: [checker],
			},
			{
				sync: exec as never,
				async: exec as never,
				isAsynchronous: () => true,
			},
			specificOverrideHandler,
		);

		beforeEach(() => {
			execChecker.mockClear();
			exec.mockClear();
		});

		it("run base exec and return success", async() => {
			const result = await parser.asyncParse(5);

			expect(result).toStrictEqual(DEither.success(5));
			expect(exec).toHaveBeenCalledWith(5, DDataParser.createError(), parser);
			expect(execChecker).toHaveBeenCalledWith(5, checker);
		});

		it("asyncParseOrThrow returns value on success", async() => {
			const result = await parser.asyncParseOrThrow(5);

			expect(result).toBe(5);
		});

		it("asyncParseOrThrow throws on error", async() => {
			await expect(parser.asyncParseOrThrow("test")).rejects.toThrow(DDataParser.DataParserThrowError);
		});

		it("run base exec and return error", async() => {
			const result = await parser.asyncParse("test");

			expect(result).toStrictEqual(DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					parser,
					"test",
				),
			));
			expect(exec).toHaveBeenCalledWith(
				"test",
				DDataParser.addIssue(
					DDataParser.createError(),
					parser,
					"test",
				),
				parser,
			);
			expect(execChecker).toHaveBeenCalledTimes(0);
		});

		it("run base exec and check return error", async() => {
			const result = await parser.asyncParse(-1);

			expect(result).toStrictEqual(DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					checker,
					-1,
				),
			));
			expect(exec).toHaveBeenCalledWith(
				-1,
				DDataParser.addIssue(
					DDataParser.createError(),
					checker,
					-1,
				),
				parser,
			);
			expect(execChecker).toHaveBeenCalledWith(-1, checker);
		});

		it("run base exec and check return error", async() => {
			const parser = DDataParser.dataParserInit(
				dataParserTestKind as never,
				{
					errorMessage: "invalid",
					checkers: [],
				},
				exec,
				specificOverrideHandler,
			);

			const result = await parser.asyncParse(-1);

			expect(result).toStrictEqual(DEither.success(-1));
			expect(exec).toHaveBeenCalledWith(-1, DDataParser.createError(), parser);
		});

		it("promise issue", async() => {
			const parser = DDataParser.dataParserInit(
				dataParserTestKind as never,
				{
					errorMessage: "invalid",
					checkers: [],
				},
				() => DDataParser.SymbolDataParserErrorPromiseIssue,
				specificOverrideHandler,
			);

			const result = await parser.asyncParse(-1);

			expect(result).toStrictEqual(
				DEither.error(
					DDataParser.addPromiseIssue(
						DDataParser.createError(),
						parser as never,
						-1,
					),
				),
			);
		});

		it("isAsynchronous", () => {
			expect(parser.isAsynchronous()).toBe(true);
		});
	});

	it("contract", () => {
		const contractWithChecker1: DDataParser.DataParserString = DDataParser
			.extended
			.string()
			.max(1);

		const contractWithChecker2: DDataParser.DataParserString = DDataParser
			.string()
			.addChecker(
				DDataParser.checkerStringMax(1),
			);

		const contractWithChecker3: DDataParser.extended.DataParserStringExtended = DDataParser
			.extended
			.string()
			.max(1);

		const contractWithCoerce: DDataParser.DataParserString = DDataParser
			.extended
			.string({ coerce: true })
			.max(1);

		const dataParserWithChecker: DDataParser.DataParserString<
			Omit<DDataParser.DataParserDefinitionString, "checkers"> & {
				readonly checkers: readonly DDataParser.DataParserCheckerStringMax[];
			}
		> = DDataParser
			.extended
			.string()
			.max(1);

		// @ts-expect-error wrong checker
		const dataParserWithWrongChecker: DDataParser.DataParserString<
			Omit<DDataParser.DataParserDefinitionString, "checkers"> & {
				readonly checkers: readonly DDataParser.DataParserCheckerStringMax[];
			}
		> = DDataParser
			.extended
			.string()
			.max(1)
			.min(0);

		type RecursiveTuple = [string, (RecursiveTuple | string)[]];

		const schema: DDataParser.Contract<RecursiveTuple> = DDataParser
			.tuple([
				DDataParser.string(),
				DDataParser.array(
					DDataParser.union([
						DDataParser.lazy(() => schema),
						DDataParser.string(),
					]),
				),
			])
			.contract();

		const tupleSchema: DDataParser.AdvancedContract<
			DDataParser.DataParserTuple<
				SimplifyTopLevel<
				& Omit<DDataParser.DataParserDefinitionTuple, "shape" | "rest">
				& {
					readonly shape: readonly [
						(DDataParser.DataParserString | DDataParser.DataParserNumber<
							& DDataParser.DataParserDefinitionNumber
							& { readonly coerce: true }
						>),
						...DDataParser.DataParserString[],
					];
					readonly rest: DDataParser.DataParserString | undefined;
				}
				>
			>
		> = DDataParser.tuple([DDataParser.number({ coerce: true })]);
	});
});
