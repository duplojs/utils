import { type Kind } from "@scripts/common/kind";
import { createEitherKind } from "../kind";
import { right, type Right } from "./create";

export const successKind = createEitherKind("success");

/**
 * @deprecated use successKind
 */
export const eitherSuccessKind = successKind;

type _Success<
	GenericValue extends unknown = unknown,
> = (
	& Right<"success", GenericValue>
	& Kind<typeof successKind.definition>
);

export interface Success<
	GenericValue extends unknown = unknown,
> extends _Success<GenericValue> {

}

/**
 * @deprecated use Success
 */
export type EitherSuccess<
	GenericValue extends unknown = unknown,
> = Success<GenericValue>;

/**
 * {@include either/success/index.md}
 */
export function success<
	const GenericValue extends unknown,
>(
	value: GenericValue,
): Success<GenericValue> {
	return successKind.setTo(
		right("success", value),
	);
}
