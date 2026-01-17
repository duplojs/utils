import { type ExpectType, DEither, keyKindPrefix, wrapValue } from "@scripts";

describe("safeCallback", () => {
	it("return value when callback succeeds", () => {
		const result = DEither.safeCallback(() => 42);

		expect(result).toStrictEqual(DEither.callbackSuccess(42));

		type check = ExpectType<
			typeof result,
			DEither.EitherCallbackSuccess<number> | DEither.EitherCallbackError,
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

	it("return either when callback returns an either", () => {
		const either = DEither.left("example", 42);
		const result = DEither.safeCallback(() => either);

		expect(result).toBe(either);

		type check = ExpectType<
			typeof result,
			DEither.EitherLeft<"example", 42> | DEither.EitherCallbackError,
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

	it("return value when callback return void", () => {
		const result = DEither.safeCallback(() => {});

		expect(result).toStrictEqual(DEither.callbackSuccess(undefined));

		type check = ExpectType<
			typeof result,
			DEither.EitherCallbackSuccess<undefined> | DEither.EitherCallbackError,
			"strict"
		>;
	});

	it("return value when callback return void or any values", () => {
		const result = DEither.safeCallback(() => {
			if (3 > 4) {
				return "toto";
			}
			return;
		});
		expect(result).toStrictEqual(DEither.callbackSuccess(undefined));

		type check = ExpectType<
			typeof result,
			DEither.EitherCallbackSuccess<undefined>
			| DEither.EitherCallbackSuccess<"toto">
			| DEither.EitherCallbackError,
			"strict"
		>;
	});
});
