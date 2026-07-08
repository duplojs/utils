import { DDate, DEither, DDataParser, type ExpectType } from "@scripts";

const dataParserCoerceMapperEntries = [...DDataParser.dataParserCoerceTransformerMapper.entries()];

function restoreDataParserCoerceMapper() {
	DDataParser.dataParserCoerceTransformerMapper.clear();

	dataParserCoerceMapperEntries.map(
		([kind, transformer]) => DDataParser.dataParserCoerceTransformerMapper.set(kind, transformer),
	);
}

describe("DDataParser coercer", () => {
	beforeEach(restoreDataParserCoerceMapper);
	afterEach(restoreDataParserCoerceMapper);

	it("preserves output and extends input from eligible coerce parser", () => {
		const schema = DDataParser.coercer(DDataParser.number());

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			number,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			string | number,
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
		DDataParser.dataParserCoerceTransformerMapper.delete(DDataParser.numberKind);

		expect(DDataParser.coercer(DDataParser.number()).parse("42")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});

	it("reuses the transformer resolved during first parse", () => {
		const schema = DDataParser.coercer(DDataParser.number());

		expect(schema.parse("42")).toStrictEqual(DEither.success(42));

		DDataParser.dataParserCoerceTransformerMapper.delete(DDataParser.numberKind);

		expect(schema.parse("43")).toStrictEqual(DEither.success(43));
		expect(DDataParser.coercer(DDataParser.number()).parse("44")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});

	it("keeps coercion synchronous when inner parser is synchronous", () => {
		expect(DDataParser.coercer(DDataParser.number()).isAsynchronous()).toBe(false);
	});

	it("transformer throw", () => {
		DDataParser.dataParserCoerceTransformerMapper.set(DDataParser.numberKind, Number);

		expect(DDataParser.coerce.number().parse(Symbol("foo"))).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
