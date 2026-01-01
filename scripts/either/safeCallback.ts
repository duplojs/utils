import { type Kind } from "@scripts/common";
import { createEitherKind } from "./kind";
import { type EitherLeft, left } from "./left";

export const eitherCallbackErrorKind = createEitherKind(
	"callback-error",
);

type _EitherCallbackError = (
	& EitherLeft<"callback", unknown>
	& Kind<typeof eitherCallbackErrorKind.definition>
);

export interface EitherCallbackError extends _EitherCallbackError {

}

export function callbackError(value: unknown): EitherCallbackError {
	return eitherCallbackErrorKind.setTo(
		left("callback", value),
	);
}

export function safeCallback<
	GenericOutput extends unknown,
>(
	theFunction: () => GenericOutput,
): GenericOutput | EitherCallbackError {
	try {
		return theFunction();
	} catch (error) {
		return callbackError(error);
	}
}
