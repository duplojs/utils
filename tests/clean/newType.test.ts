import { DClean, DEither, DDataParser, type ExpectType, unwrap, wrapValue } from "@scripts";

describe("createNewType", () => {
	it("creates a wrapped new type with parser success", () => {
		const parser = DDataParser.string();
		const handler = DClean.createNewType("my-string", parser);

		const result = handler.create("hello");

		expect(unwrap(result)).toStrictEqual(
			DClean.newTypeKind.setTo(wrapValue("hello"), "my-string"),
		);

		type Check = ExpectType<
			typeof result,
			| DEither.EitherRight<"createNewType", DClean.NewType<"my-string", "hello">>
			| DEither.EitherLeft<"createNewTypeError", DDataParser.DataParserError>,
			"strict"
		>;
	});

	it("returns error when parser fails", () => {
		const parser = DDataParser.string();
		const handler = DClean.createNewType("my-string", parser);

		const result = handler.create(123 as unknown as string);

		expect(DEither.isLeft(result)).toBe(true);
	});

	it("createOrThrow throws on invalid input", () => {
		const parser = DDataParser.number();
		const handler = DClean.createNewType("my-number", parser);

		expect(() => handler.createOrThrow("not-a-number" as any)).toThrow(DClean.CreateNewTypeError);
	});

	it("createOrThrow returns unwrapped value on success", () => {
		const parser = DDataParser.number();
		const handler = DClean.createNewType("my-number", parser);

		const value = handler.createOrThrow(42);

		expect(value).toBe(42);
	});

	it("aliases createWithUnknown and createWithUnknownOrThrow behave identically", () => {
		const parser = DDataParser.string();
		const handler = DClean.createNewType("alias", parser);

		const success = handler.createWithUnknown("ok");
		const successAlias = handler.create("ok");

		expect(success).toStrictEqual(successAlias);
		expect(handler.createWithUnknownOrThrow("ok")).toBe(handler.createOrThrow("ok"));
	});
});
