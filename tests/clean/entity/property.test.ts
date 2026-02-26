import { DClean, DDataParser, type DDate, DEither, DPE, pipe, unwrap, type ExpectType } from "@scripts";

describe("entity property", () => {
	it("builds union definitions and preserves inner definitions", () => {
		const Name = DClean.createNewType("name", DPE.string());
		const Date = DClean.createNewType("date", DPE.date());

		const result = DClean.entityPropertyDefinitionTools.union(
			Name,
			Date,
		);

		expect(DClean.entityPropertyUnionKind.has(result)).toBe(true);
		expect(unwrap(result)).toStrictEqual([Name, Date]);

		type Check = ExpectType<
			typeof result,
			DClean.EntityPropertyDefinitionUnion<
				readonly [typeof Name, typeof Date]
			>,
			"strict"
		>;

		type CheckEntity = ExpectType<
			DClean.EntityProperty<typeof result>,
			| DClean.NewType<"name", string, never>
			| DClean.NewType<"date", DDate.TheDate, never>,
			"strict"
		>;

		type CheckRaw = ExpectType<
			DClean.EntityRawProperty<typeof result>,
			DDate.TheDate | string,
			"strict"
		>;

		type CheckInput = ExpectType<
			DClean.EntityInputRawProperty<typeof result>,
			string | DDate.TheDate | Date,
			"strict"
		>;
	});

	it("builds nullable definitions and preserves wrapped definition", () => {
		const Tag = DClean.createNewType("tag", DPE.string());

		const result = DClean.entityPropertyDefinitionTools.nullable(Tag);

		expect(DClean.entityPropertyNullableKind.has(result)).toBe(true);
		expect(unwrap(result)).toBe(Tag);

		type Check = ExpectType<
			typeof result,
			DClean.EntityPropertyDefinitionNullable<typeof Tag>,
			"strict"
		>;

		type CheckEntity = ExpectType<
			DClean.EntityProperty<typeof result>,
			DClean.NewType<"tag", string, never> | null,
			"strict"
		>;

		type CheckRaw = ExpectType<
			DClean.EntityRawProperty<typeof result>,
			null | string,
			"strict"
		>;

		type CheckInput = ExpectType<
			DClean.EntityInputRawProperty<typeof result>,
			string | null,
			"strict"
		>;
	});

	it("builds array definitions with default and explicit params", () => {
		const Score = DClean.createNewType("score", DPE.number());

		const defaultArray = DClean.entityPropertyDefinitionTools.array(Score);
		const boundedArray = DClean.entityPropertyDefinitionTools.array(
			Score,
			{
				min: 1,
				max: 2,
			},
		);

		expect(DClean.entityPropertyArrayKind.has(defaultArray)).toBe(true);
		expect(unwrap(defaultArray)).toBe(Score);
		expect(DClean.entityPropertyArrayKind.getValue(defaultArray)).toStrictEqual({});
		expect(DClean.entityPropertyArrayKind.getValue(boundedArray)).toStrictEqual({
			min: 1,
			max: 2,
		});

		type Check = ExpectType<
			typeof boundedArray,
			DClean.EntityPropertyDefinitionArray<typeof Score, {
				readonly min: 1;
				readonly max: 2;
			}>,
			"strict"
		>;

		type Check1 = ExpectType<
			typeof defaultArray,
			DClean.EntityPropertyDefinitionArray<typeof Score, {}>,
			"strict"
		>;

		type CheckEntity = ExpectType<
			DClean.EntityProperty<typeof boundedArray>,
			readonly [
				DClean.NewType<"score", number, never>,
				...DClean.NewType<"score", number, never>[],
			],
			"strict"
		>;

		type CheckRaw = ExpectType<
			DClean.EntityRawProperty<typeof boundedArray>,
			readonly [
				number,
				...number[],
			],
			"strict"
		>;

		type CheckInput = ExpectType<
			DClean.EntityInputRawProperty<typeof boundedArray>,
			readonly number[],
			"strict"
		>;
	});

	it("builds structure definitions and infers nested entity/raw/input types", () => {
		const Label = DClean.createNewType("label", DPE.string());
		const Count = DClean.createNewType("count", DPE.number());
		const nullableCount = DClean.entityPropertyDefinitionTools.nullable(Count);
		const labelArray = DClean.entityPropertyDefinitionTools.array(Label);

		const result = DClean.entityPropertyDefinitionTools.structure({
			label: Label,
			meta: nullableCount,
			items: labelArray,
		});

		expect(DClean.entityPropertyStructureKind.has(result)).toBe(true);
		expect(unwrap(result)).toStrictEqual({
			label: Label,
			meta: nullableCount,
			items: labelArray,
		});

		type Check = ExpectType<
			typeof result,
			DClean.EntityPropertyDefinitionStructure<{
				readonly label: typeof Label;
				readonly meta: DClean.EntityPropertyDefinitionNullable<typeof Count>;
				readonly items: DClean.EntityPropertyDefinitionArray<typeof Label, {}>;
			}>,
			"strict"
		>;

		type CheckEntity = ExpectType<
			DClean.EntityProperty<typeof result>,
			{
				readonly label: DClean.NewType<"label", string, never>;
				readonly meta: DClean.NewType<"count", number, never> | null;
				readonly items: readonly DClean.NewType<"label", string, never>[];
			},
			"strict"
		>;

		type CheckRaw = ExpectType<
			DClean.EntityRawProperty<typeof result>,
			{
				readonly label: string;
				readonly meta: number | null;
				readonly items: readonly string[];
			},
			"strict"
		>;

		type CheckInput = ExpectType<
			DClean.EntityInputRawProperty<typeof result>,
			{
				readonly label: string;
				readonly meta: number | null;
				readonly items: readonly string[];
			},
			"strict"
		>;
	});

	it("builds identifier definitions and infers literal types", () => {
		const result = DClean.entityPropertyDefinitionTools.identifier("draft");

		expect(DClean.entityPropertyIdentifierKind.has(result)).toBe(true);
		expect(unwrap(result)).toBe("draft");

		type Check = ExpectType<
			typeof result,
			DClean.EntityPropertyDefinitionIdentifier<"draft">,
			"strict"
		>;

		type CheckEntity = ExpectType<
			DClean.EntityProperty<typeof result>,
			"draft",
			"strict"
		>;

		type CheckRaw = ExpectType<
			DClean.EntityRawProperty<typeof result>,
			"draft",
			"strict"
		>;

		type CheckInput = ExpectType<
			DClean.EntityInputRawProperty<typeof result>,
			"draft",
			"strict"
		>;
	});

	it("converts a new type handler definition using the provided callback", () => {
		const Name = DClean.createNewType("name", DPE.string());
		const treatNewTypeHandler = vi.fn((handler: any) => {
			expect(handler).toBe(Name);
			return DDataParser.string();
		});

		const parser = pipe(
			Name,
			(definition) => DClean.entityPropertyDefinitionToDataParser(
				definition,
				treatNewTypeHandler,
			),
		);

		expect(parser.parse("Alice")).toStrictEqual(DEither.success("Alice"));
		expect(treatNewTypeHandler).toHaveBeenCalledTimes(1);
	});

	it("converts union definitions recursively for first and rest members", () => {
		const Name = DClean.createNewType("name", DPE.string());
		const Age = DClean.createNewType("age", DPE.number());
		const treatNewTypeHandler = vi.fn((handler: any) => (
			handler === Name
				? DDataParser.string()
				: DDataParser.number()
		));

		const parser = DClean.entityPropertyDefinitionToDataParser(
			DClean.entityPropertyDefinitionTools.union(Name, Age),
			treatNewTypeHandler,
		);

		expect(parser.parse("Alice")).toStrictEqual(DEither.success("Alice"));
		expect(parser.parse(42)).toStrictEqual(DEither.success(42));
		expect(parser.parse(true)).toStrictEqual(DEither.error(expect.any(Object)));
		expect(treatNewTypeHandler).toHaveBeenCalledTimes(2);
	});

	it("converts nullable definitions recursively", () => {
		const Label = DClean.createNewType("label", DPE.string());

		const parser = DClean.entityPropertyDefinitionToDataParser(
			DClean.entityPropertyDefinitionTools.nullable(Label),
			() => DDataParser.string(),
		);

		expect(parser.parse("ok")).toStrictEqual(DEither.success("ok"));
		expect(parser.parse(null)).toStrictEqual(DEither.success(null));
		expect(parser.parse(1)).toStrictEqual(DEither.error(expect.any(Object)));
	});

	it("converts array definitions without bounds", () => {
		const Tag = DClean.createNewType("tag", DPE.string());

		const parser = DClean.entityPropertyDefinitionToDataParser(
			DClean.entityPropertyDefinitionTools.array(Tag),
			() => DDataParser.string(),
		);

		expect(parser.parse([])).toStrictEqual(DEither.success([]));
		expect(parser.parse(["a", "b"])).toStrictEqual(DEither.success(["a", "b"]));
		expect(parser.parse([1])).toStrictEqual(DEither.error(expect.any(Object)));
	});

	it("converts array definitions with min and max bounds", () => {
		const Tag = DClean.createNewType("tag", DPE.string());

		const parser = DClean.entityPropertyDefinitionToDataParser(
			DClean.entityPropertyDefinitionTools.array(
				Tag,
				{
					min: 1,
					max: 2,
				},
			),
			() => DDataParser.string(),
		);

		expect(parser.parse(["a"])).toStrictEqual(DEither.success(["a"]));
		expect(parser.parse([])).toStrictEqual(DEither.error(expect.any(Object)));
		expect(parser.parse(["a", "b", "c"])).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});

	it("converts structure definitions recursively", () => {
		const Label = DClean.createNewType("label", DPE.string());
		const Count = DClean.createNewType("count", DPE.number());
		const treatNewTypeHandler = vi.fn((handler: any) => (
			handler === Label
				? DDataParser.string()
				: DDataParser.number()
		));

		const parser = DClean.entityPropertyDefinitionToDataParser(
			DClean.entityPropertyDefinitionTools.structure({
				label: Label,
				count: DClean.entityPropertyDefinitionTools.nullable(Count),
				tags: DClean.entityPropertyDefinitionTools.array(Label),
			}),
			treatNewTypeHandler,
		);

		expect(parser.parse({
			label: "A",
			count: 1,
			tags: ["x"],
		})).toStrictEqual(DEither.success({
			label: "A",
			count: 1,
			tags: ["x"],
		}));
		expect(parser.parse({
			label: "A",
			count: null,
			tags: [],
		})).toStrictEqual(DEither.success({
			label: "A",
			count: null,
			tags: [],
		}));
		expect(parser.parse({
			label: "A",
			count: "x",
			tags: [],
		})).toStrictEqual(DEither.error(expect.any(Object)));
		expect(treatNewTypeHandler).toHaveBeenCalledTimes(3);
	});

	it("converts identifier definitions", () => {
		const parser = DClean.entityPropertyDefinitionToDataParser(
			DClean.entityPropertyDefinitionTools.identifier("published"),
			() => DDataParser.string(),
		);

		expect(parser.parse("published")).toStrictEqual(DEither.success("published"));
		expect(parser.parse("draft")).toStrictEqual(DEither.error(expect.any(Object)));
	});
});
