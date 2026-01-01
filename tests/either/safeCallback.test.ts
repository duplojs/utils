import { type ExpectType, DEither, keyKindPrefix, wrapValue } from "@scripts";

describe("safeCallback", () => {
	it("return value when callback succeeds", () => {
		const result = DEither.safeCallback(() => 42);

		expect(result).toBe(42);

		type check = ExpectType<
			typeof result,
			number | DEither.EitherCallbackError,
			"strict"
		>;
	});

	it("return callback error when callback throws", () => {
		const error = new Error("boom");

		const result = DEither.safeCallback(() => {
			throw error;
		});

		expect(result).toStrictEqual(DEither.callbackError(error));

		type check = ExpectType<
			typeof result,
			DEither.EitherCallbackError,
			"strict"
		>;
	});

	it("callbackError structure", () => {
		const value = "boom";
		const result = DEither.callbackError(value);

		expect(result).toStrictEqual({
			[`${keyKindPrefix}${DEither.eitherCallbackErrorKind.definition.name}`]: null,
			[`${keyKindPrefix}${DEither.eitherInformationKind.definition.name}`]: "callback",
			[`${keyKindPrefix}${DEither.eitherLeftKind.definition.name}`]: null,
			...wrapValue(value),
		});

		type check = ExpectType<
			typeof result,
			DEither.EitherCallbackError,
			"strict"
		>;
	});
});
