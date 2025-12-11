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

		const expectedError = DDataParser.addIssue(
			DDataParser.createError(),
			DClean.String.dataParser,
			invalidValue,
		);

		expect(result).toStrictEqual(
			DEither.left(
				"createPrimitiveError",
				expectedError,
			),
		);
	});

	it("createOrThrow returns primitive and is() accepts it", () => {
		const primitive = DClean.String.createOrThrow("world");

		expect(primitive).toStrictEqual(wrapValue("world"));
		expect(DClean.String.is(primitive)).toBe(true);
	});

	it("createOrThrow throws on invalid value with error details", () => {
		const invalidValue = 10;
		const expectedError = DDataParser.addIssue(
			DDataParser.createError(),
			DClean.String.dataParser,
			invalidValue,
		);

		expect(() => DClean.String.createOrThrow(invalidValue as never)).toThrow(DClean.CreatePrimitiveError);
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

	it("createWithUnknownOrThrow matches createOrThrow", () => {
		const createResult = DClean.String.createOrThrow("test");
		const result = DClean.String.createWithUnknownOrThrow("test");

		expect(result).toStrictEqual(createResult);
	});
});
