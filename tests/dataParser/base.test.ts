import { DEither, DDataParser, type AnyValue } from "@scripts";
import { SymbolDataParserErrorPromiseIssue } from "@scripts/dataParser";
import { createDataParserKind } from "@scripts/dataParser/kind";

describe("base parser", () => {
	const dataParserTestKind = createDataParserKind("checker-test");

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
				() => SymbolDataParserErrorPromiseIssue,
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
			},
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
				() => SymbolDataParserErrorPromiseIssue,
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
	});

	it("contract", () => {
		const contractWithoutChecker: DDataParser.DataParserString = DDataParser
			.extended
			.string()
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
	});
});
