import type { Kind, EscapeVoid } from "@scripts/common";
import { createEitherKind } from "./kind";
import { type EitherLeft, isLeft, left } from "./left";
import { isRight, right, type EitherRight } from "./right";

export const eitherCallbackErrorKind = createEitherKind(
	"callback-error",
);

export const eitherCallbackSuccessKind = createEitherKind(
	"callback-success",
);

type _EitherCallbackError = (
	& EitherLeft<"callback", unknown>
	& Kind<typeof eitherCallbackErrorKind.definition>
);

type _EitherCallbackSuccess<
	GenericValue extends unknown,
> = (
	& EitherRight<"callback", GenericValue>
	& Kind<typeof eitherCallbackSuccessKind.definition>
);

export interface EitherCallbackError extends _EitherCallbackError {}

export interface EitherCallbackSuccess<
	GenericValue extends unknown,
> extends _EitherCallbackSuccess<GenericValue> {}

export function callbackError(value: unknown): EitherCallbackError {
	return eitherCallbackErrorKind.setTo(
		left("callback", value),
	);
}

export function callbackSuccess<
	GenericValue extends unknown,
>(value: GenericValue): EitherCallbackSuccess<GenericValue> {
	return eitherCallbackSuccessKind.setTo(
		right("callback", value),
	);
}

type Either = EitherRight | EitherLeft;

type ComputeSafeCallbackResult<
	GenericOutput extends unknown,
> = GenericOutput extends Either
	? GenericOutput
	: GenericOutput extends EscapeVoid
		? EitherCallbackSuccess<undefined>
		: EitherCallbackSuccess<GenericOutput>;

/**
 * {@include either/safeCallback/index.md}
 */
export function safeCallback<
	GenericOutput extends unknown,
>(
	theFunction: () => GenericOutput,
): ComputeSafeCallbackResult<GenericOutput> | EitherCallbackError {
	try {
		const result = theFunction();

		if (isRight(result) || isLeft(result)) {
			return result as ComputeSafeCallbackResult<GenericOutput>;
		}

		return callbackSuccess(
			result,
		) as ComputeSafeCallbackResult<GenericOutput>;
	} catch (error) {
		return callbackError(error);
	}
}
