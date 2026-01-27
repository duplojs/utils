import { type Kind } from "@scripts/common/kind";
import { createEitherKind } from "../kind";
import { left, type Left } from "./create";

export const errorKind = createEitherKind("error");

/**
 * @deprecated use errorKind
 */
export const eitherErrorKind = errorKind;

type _Error<
	GenericValue extends unknown = unknown,
> = (
	& Left<"error", GenericValue>
	& Kind<typeof errorKind.definition>
);

export interface Error<
	GenericValue extends unknown = unknown,
> extends _Error<GenericValue> {

}

/**
 * @deprecated use Error
 */
export type EitherError<
	GenericValue extends unknown = unknown,
> = Error<GenericValue>;

/**
 * {@include either/error/index.md}
 */
export function error<
	const GenericValue extends unknown,
>(
	value: GenericValue,
): Error<GenericValue> {
	return errorKind.setTo(
		left("error", value),
	);
}
