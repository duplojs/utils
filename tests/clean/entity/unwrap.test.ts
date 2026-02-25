import { DClean, DDataParser, pipe, type ExpectType } from "@scripts";

describe("unwrapEntityProperty", () => {
	it("unwraps wrapped values without transformer and supports pipe", () => {
		const Label = DClean.createNewType("label", DDataParser.string());
		const wrapped = Label.createOrThrow("hello");

		const result = pipe(
			wrapped,
			(value) => DClean.unwrapEntityProperty(value),
		);

		expect(result).toBe("hello");

		type Check = ExpectType<
			typeof result,
			"hello",
			"strict"
		>;
	});

	it("applies transformer on wrapped values when provided", () => {
		const Label = DClean.createNewType("label", DDataParser.string());
		const wrapped = Label.createOrThrow("hello");

		const result = DClean.unwrapEntityProperty(
			wrapped,
			{
				transformer: ((value: string) => value.toUpperCase()) as any,
			},
		);

		expect(result).toBe("HELLO");
	});

	it("returns null unchanged", () => {
		const result = DClean.unwrapEntityProperty(null);

		expect(result).toBeNull();

		type Check = ExpectType<
			typeof result,
			null,
			"strict"
		>;
	});

	it("unwraps nested arrays recursively", () => {
		const Label = DClean.createNewType("label", DDataParser.string());
		const Count = DClean.createNewType("count", DDataParser.number());

		const result = DClean.unwrapEntityProperty([
			Label.createOrThrow("a"),
			null,
			[Count.createOrThrow(1)] as const,
		] as const);

		expect(result).toStrictEqual([
			"a",
			null,
			[1],
		]);

		type Check = ExpectType<
			typeof result,
			readonly ["a", null, readonly [1]],
			"strict"
		>;
	});

	it("unwraps plain objects recursively", () => {
		const Label = DClean.createNewType("label", DDataParser.string());
		const Count = DClean.createNewType("count", DDataParser.number());

		const value = {
			label: Label.createOrThrow("x"),
			nested: {
				count: Count.createOrThrow(2),
			},
			list: [Label.createOrThrow("y")] as const,
		} as const;

		const result = DClean.unwrapEntityProperty(value);

		expect(result).toStrictEqual({
			label: "x",
			nested: {
				count: 2,
			},
			list: ["y"],
		});
		expect(result).not.toBe(value);

		type Check = ExpectType<
			typeof result,
			{
				readonly label: "x";
				readonly nested: {
					readonly count: 2;
				};
				readonly list: readonly ["y"];
			},
			"strict"
		>;
	});

	it("returns non plain object values unchanged", () => {
		const value = {
			date: new Date("2024-01-01T00:00:00.000Z"),
		};

		const result = DClean.unwrapEntityProperty(value.date);

		expect(result).toBe(value.date);

		type Check = ExpectType<
			typeof result,
			Date,
			"strict"
		>;
	});
});

describe("unwrapEntity", () => {
	it("unwraps entity properties and exposes _entityName and _flags", () => {
		const Name = DClean.createNewType("name", DDataParser.string());
		const Tag = DClean.createNewType("tag", DDataParser.string());
		const Revision = DClean.createNewType("revision", DDataParser.number());

		const Article = DClean.createEntity(
			"Article",
			({ nullable, array, structure }) => ({
				name: Name,
				tags: array(nullable(Tag)),
				meta: nullable(Tag),
				settings: structure({
					revision: Revision,
					pinTag: nullable(Tag),
				}),
			}),
		);

		const entity = Article.new({
			name: Name.createOrThrow("Post"),
			tags: [
				Tag.createOrThrow("x"),
				null,
			] as const,
			meta: null,
			settings: {
				revision: Revision.createOrThrow(1),
				pinTag: Tag.createOrThrow("top"),
			},
		});

		const Archived = DClean.createFlag<typeof entity, "archived", boolean>("archived");
		const featuredEntity = Archived.append(entity, true);

		const result = pipe(
			featuredEntity,
			(value) => DClean.unwrapEntity(value),
		);

		expect(result).toStrictEqual({
			name: "Post",
			tags: ["x", null],
			meta: null,
			settings: {
				revision: 1,
				pinTag: "top",
			},
			_entityName: "Article",
			_flags: {
				archived: true,
			},
		});

		type Check = ExpectType<
			typeof result,
			{
				readonly name: "Post";
				readonly tags: readonly ["x", null];
				readonly meta: null;
				readonly settings: {
					readonly revision: 1;
					readonly pinTag: "top";
				};
				readonly _entityName: "Article";
				readonly _flags: {
					readonly archived: true;
				};
			},
			"strict"
		>;
	});

	it("passes transformer to nested property unwrapping", () => {
		const Name = DClean.createNewType("name", DClean.String.dataParser);
		const Label = DClean.createNewType("label", DDataParser.string());

		const User = DClean.createEntity(
			"User",
			({ structure }) => ({
				name: Name,
				profile: structure({
					label: Label,
				}),
			}),
		);

		const entity = User.new({
			name: Name.createOrThrow("alice"),
			profile: {
				label: Label.createOrThrow("member"),
			},
		});

		const result = DClean.unwrapEntity(
			entity,
			{
				transformer: ((value: string) => `#${value}`) as any,
			},
		);

		expect(result).toStrictEqual({
			name: "#alice",
			profile: {
				label: "#member",
			},
			_entityName: "User",
		});
	});
});
