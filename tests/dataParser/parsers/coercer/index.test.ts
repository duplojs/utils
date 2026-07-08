import { DDate, DEither, DDataParser, type ExpectType } from "@scripts";

const dataParserCoerceTransformersEntries = [...DDataParser.DataParserCoercer.transformers.entries()];

function restoreDataParserCoerceTransformers() {
	DDataParser.DataParserCoercer.transformers.clear();

	dataParserCoerceTransformersEntries.map(
		([kind, transformer]) => DDataParser.DataParserCoercer.transformers.set(kind, transformer),
	);
}

describe("DDataParser coercer", () => {
	beforeEach(restoreDataParserCoerceTransformers);
	afterEach(restoreDataParserCoerceTransformers);

	it("preserves output and extends input from eligible coerce parser", () => {
		const schema = DDataParser.coercer(DDataParser.number());

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			number,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			string | number | bigint | boolean | null,
			"strict"
		>;

		expect(schema.parse("42")).toStrictEqual(DEither.success(42));
	});

	it("runs checkers after inner parser succeeds", () => {
		const schema = DDataParser.coercer(DDataParser.number()).addChecker(
			DDataParser.checkerNumberMin(10),
		);

		expect(schema.parse("42")).toStrictEqual(DEither.success(42));
		expect(schema.parse("5")).toStrictEqual(DEither.error(expect.any(Object)));
	});

	it("coerces numeric boolean values through base coercer", () => {
		const schema = DDataParser.coercer(DDataParser.boolean());

		expect(schema.parse(1)).toStrictEqual(DEither.success(true));
		expect(schema.parse(0)).toStrictEqual(DEither.success(false));
		expect(schema.parse(2)).toStrictEqual(DEither.error(expect.any(Object)));
	});

	it("coerces ISO time strings through base coercer", () => {
		const schema = DDataParser.coercer(DDataParser.time());

		expect(schema.parse("01:02")).toStrictEqual(
			DEither.success(DDate.createTimeOrThrow("time3720000+")),
		);
	});

	it("rejects ISO time strings when time creation fails through base coercer", () => {
		const schema = DDataParser.coercer(DDataParser.time());
		const createTimeSpy = vi.spyOn(DDate, "createTime")
			.mockReturnValueOnce(DEither.left("time-created-error", null) as never);

		try {
			expect(schema.parse("01:02")).toStrictEqual(DEither.error(expect.any(Object)));
			expect(createTimeSpy).toHaveBeenCalledWith({ value: "01:02" });
		} finally {
			createTimeSpy.mockRestore();
		}
	});

	it("returns an error when no transformer is registered for inner parser kind", () => {
		DDataParser.DataParserCoercer.transformers.delete(DDataParser.numberKind);

		expect(DDataParser.coercer(DDataParser.number()).parse("42")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});

	it("keeps unsupported parser input and output unchanged", () => {
		const schema = DDataParser.coercer(DDataParser.literal("ready"));

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			"ready",
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			"ready",
			"strict"
		>;

		expect(schema.parse("ready")).toStrictEqual(DEither.success("ready"));
		expect(schema.parse("42")).toStrictEqual(DEither.error(expect.any(Object)));
	});

	it("returns an error when asynchronous inner parser rejects", async() => {
		interface RejectedParserDefinition extends DDataParser.DataParserDefinition {
			readonly rejectedError: Error;
		}

		class RejectedParser extends DDataParser.DataParserBase.init(
			DDataParser.dataParserKind,
		)<
				RejectedParserDefinition,
				number,
				number
			> {
			public get classConstructor() {
				return this.checkConstructor(RejectedParser);
			}

			public static override execParse(
				self: RejectedParser,
				data: unknown,
				error: DDataParser.DataParserError,
			) {
				void data;
				void error;
				return Promise.reject(self.definition.rejectedError);
			}

			public static override dataParserIsAsynchronous(self: RejectedParser) {
				void self;
				return true;
			}

			public static override prepareDefinition(
				definition?: Partial<RejectedParserDefinition>,
			): RejectedParserDefinition {
				return {
					...definition,
					rejectedError: definition?.rejectedError ?? new Error("rejected"),
					checkers: definition?.checkers ?? [],
					errorMessage: definition?.errorMessage,
				};
			}

			public static override create(
				definition?: Partial<RejectedParserDefinition>,
			) {
				return new RejectedParser(this.prepareDefinition(definition));
			}
		}

		const rejectedError = new Error("coercer rejected");
		const schema = DDataParser.coercer(RejectedParser.create({ rejectedError }));

		await expect(schema.asyncParse(42)).resolves.toStrictEqual(
			DEither.error(
				expect.objectContaining({
					issues: [
						expect.objectContaining({
							expected: "successful coerce result",
							data: rejectedError,
						}),
					],
				}),
			),
		);
	});

	it("reuses the transformer resolved during first parse", () => {
		const schema = DDataParser.coercer(DDataParser.number());

		expect(schema.parse("42")).toStrictEqual(DEither.success(42));

		DDataParser.DataParserCoercer.transformers.delete(DDataParser.numberKind);

		expect(schema.parse("43")).toStrictEqual(DEither.success(43));
		expect(DDataParser.coercer(DDataParser.number()).parse("44")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});

	it("keeps coercion synchronous when inner parser is synchronous", () => {
		expect(DDataParser.coercer(DDataParser.number()).isAsynchronous()).toBe(false);
	});

	it("transformer throw", () => {
		DDataParser.DataParserCoercer.transformers.set(DDataParser.numberKind, Number);

		expect(DDataParser.coerce.number().parse(Symbol("foo"))).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
