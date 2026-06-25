import { DClean, DDataParser, DEither, type ExpectType, type WrappedValue, wrapValue } from "@scripts";

describe("primitive handler String", () => {
	it("create returns right on valid string", () => {
		const result = DClean.String.create("hello");

		expect(result).toStrictEqual(
			DEither.right(
				"createPrimitive",
				wrapValue("hello"),
			),
		);
	});

	it("create returns left on invalid value", () => {
		const invalidValue = 10;
		const result = DClean.String.create(invalidValue as never);

		const expectedError = DDataParser.createError();
		DDataParser.addIssue(
			expectedError,
			"string",
			invalidValue,
			undefined,
			DDataParser.string(),
		);

		expect(result).toStrictEqual(
			DEither.left(
				"createPrimitiveError",
				{
					primitiveName: "string",
					dataParserError: expectedError,
				},
			),
		);

		type Check = ExpectType<
			typeof result,
			| DEither.Right<"createPrimitive", DClean.Primitive<never>>
			| DEither.Left<"createPrimitiveError", DClean.PrimitiveError<"string">>,
			"strict"
		>;
	});

	it("createOrThrow returns primitive and is() accepts it", () => {
		const primitive = DClean.String.createOrThrow("world");

		expect(primitive).toStrictEqual(wrapValue("world"));
		expect(DClean.String.is(primitive)).toBe(true);
	});

	it("createOrThrow throws on invalid value with error details", () => {
		const invalidValue = 10;
		const expectedError = DDataParser.createError();
		DDataParser.addIssue(
			expectedError,
			"string",
			invalidValue,
			undefined,
			DDataParser.string(),
		);

		try {
			DClean.String.createOrThrow(invalidValue as never);
			expect.fail("Expected createOrThrow to throw.");
		} catch (error) {
			expect(error).toBeInstanceOf(DClean.CreatePrimitiveError);
			expect(error).toMatchObject({
				primitiveName: "string",
				data: invalidValue,
				dataParserError: expectedError,
			});
		}
	});

	it("is returns true for wrapped valid string", () => {
		const value = wrapValue("ok") as WrappedValue<"ok"> | WrappedValue<number>;
		const predicate = DClean.String.is(value);
		expect(
			predicate,
		).toBe(true);

		if (predicate) {
			type Check = ExpectType<
				typeof value,
				WrappedValue<"ok">,
				"strict"
			>;
		}
	});

	it("createWithUnknown matches create", () => {
		const createResult = DClean.String.create("test");
		const result = DClean.String.createWithUnknown("test");

		expect(result).toStrictEqual(createResult);
	});

	it("createWithLarge accepts the wider input type", () => {
		const result = DClean.String.createWithLarge("test");

		expect(result).toStrictEqual(
			DEither.right(
				"createPrimitive",
				wrapValue("test"),
			),
		);

		if (false) {
			// @ts-expect-error createWithLarge does not accept unrelated input.
			DClean.String.createWithLarge(1);
		}

		type Check = ExpectType<
			typeof result,
			| DEither.Right<"createPrimitive", DClean.Primitive<string>>
			| DEither.Left<"createPrimitiveError", DClean.PrimitiveError<"string">>,
			"strict"
		>;
	});

	it("createWithUnknownOrThrow matches createOrThrow", () => {
		const createResult = DClean.String.createOrThrow("test");
		const result = DClean.String.createWithUnknownOrThrow("test");

		expect(result).toStrictEqual(createResult);
	});
});
