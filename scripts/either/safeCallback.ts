import type { Kind, EscapeVoid } from "@scripts/common";
import { createEitherKind } from "./kind";
import { type Left, isLeft, left } from "./left";
import { isRight, right, type Right } from "./right";

export const callbackErrorKind = createEitherKind(
	"callback-error",
);

/**
 * @deprecated use callbackErrorKind
 */
export const eitherCallbackErrorKind = callbackErrorKind;

export const callbackSuccessKind = createEitherKind(
	"callback-success",
);

/**
 * @deprecated use callbackSuccessKind
 */
export const eitherCallbackSuccessKind = callbackSuccessKind;

type _CallbackError = (
	& Left<"callback", unknown>
	& Kind<typeof callbackErrorKind.definition>
);

type _CallbackSuccess<
	GenericValue extends unknown,
> = (
	& Right<"callback", GenericValue>
	& Kind<typeof callbackSuccessKind.definition>
);

export interface CallbackError extends _CallbackError {}

export interface CallbackSuccess<
	GenericValue extends unknown,
> extends _CallbackSuccess<GenericValue> {}

/**
 * @deprecated use CallbackError
 */
export type EitherCallbackError = CallbackError;

/**
 * @deprecated use CallbackSuccess
 */
export type EitherCallbackSuccess<
	GenericValue extends unknown,
> = CallbackSuccess<GenericValue>;

export function callbackError(value: unknown): CallbackError {
	return callbackErrorKind.setTo(
		left("callback", value),
	);
}

export function callbackSuccess<
	GenericValue extends unknown,
>(value: GenericValue): CallbackSuccess<GenericValue> {
	return callbackSuccessKind.setTo(
		right("callback", value),
	);
}

type Either = Right | Left;

type ComputeSafeCallbackResult<
	GenericOutput extends unknown,
> = GenericOutput extends Either
	? GenericOutput
	: GenericOutput extends EscapeVoid
		? CallbackSuccess<undefined>
		: CallbackSuccess<GenericOutput>;

/**
 * {@include either/safeCallback/index.md}
 */
export function safeCallback<
	GenericOutput extends unknown,
>(
	theFunction: () => GenericOutput,
): ComputeSafeCallbackResult<GenericOutput> | CallbackError {
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
