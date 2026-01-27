import { type Kind } from "@scripts/common/kind";
import { wrapValue, type WrappedValue } from "@scripts/common/wrapValue";
import { createEitherKind, informationKind } from "../kind";

export const leftKind = createEitherKind("left");

/**
 * @deprecated use leftKind
 */
export const eitherLeftKind = leftKind;

type _Left<
	GenericInformation extends string = string,
	GenericValue extends unknown = unknown,
> = (
	& Kind<typeof leftKind.definition>
	& Kind<
		typeof informationKind.definition,
		GenericInformation
	>
	& WrappedValue<GenericValue>
);

export interface Left<
	GenericInformation extends string = string,
	GenericValue extends unknown = unknown,
> extends _Left<GenericInformation, GenericValue> {

}

/**
 * @deprecated use Left
 */
export type EitherLeft<
	GenericInformation extends string = string,
	GenericValue extends unknown = unknown,
> = Left<GenericInformation, GenericValue>;

/**
 * {@include either/left/index.md}
 */
export function left<
	GenericInformation extends string,
	const GenericValue extends unknown = undefined,
>(
	information: GenericInformation,
	value: GenericValue = undefined as GenericValue,
): Left<
		GenericInformation,
		GenericValue
	> {
	return leftKind.setTo(
		informationKind.setTo(
			wrapValue(value),
			information,
		),
	);
}
