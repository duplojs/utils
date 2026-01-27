import { type Kind } from "@scripts/common/kind";
import { wrapValue, type WrappedValue } from "@scripts/common/wrapValue";
import { createEitherKind, informationKind } from "../kind";

export const rightKind = createEitherKind("right");

/**
 * @deprecated use rightKind
 */
export const eitherRightKind = rightKind;

type _Right<
	GenericInformation extends string = string,
	GenericValue extends unknown = unknown,
> = (
	& Kind<typeof rightKind.definition>
	& Kind<
		typeof informationKind.definition,
		GenericInformation
	>
	& WrappedValue<GenericValue>
);

export interface Right<
	GenericInformation extends string = string,
	GenericValue extends unknown = unknown,
> extends _Right<GenericInformation, GenericValue> {

}

/**
 * @deprecated use Right
 */
export type EitherRight<
	GenericInformation extends string = string,
	GenericValue extends unknown = unknown,
> = Right<GenericInformation, GenericValue>;

/**
 * {@include either/right/index.md}
 */
export function right<
	GenericInformation extends string,
	const GenericValue extends unknown = undefined,
>(
	information: GenericInformation,
	value: GenericValue = undefined as GenericValue,
): Right<
		GenericInformation,
		GenericValue
	> {
	return rightKind.setTo(
		informationKind.setTo(
			wrapValue(value),
			information,
		),
	);
}
