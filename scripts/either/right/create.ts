import { type Kind } from "@scripts/common/kind";
import { wrapValue, type WrappedValue } from "@scripts/common/wrapValue";
import { createEitherKind, eitherInformationKind } from "../kind";

export const eitherRightKind = createEitherKind("right");

type _EitherRight<
	GenericInformation extends string = string,
	GenericValue extends unknown = unknown,
> = (
	& Kind<typeof eitherRightKind.definition>
	& Kind<
		typeof eitherInformationKind.definition,
		GenericInformation
	>
	& WrappedValue<GenericValue>
);

export interface EitherRight<
	GenericInformation extends string = string,
	GenericValue extends unknown = unknown,
> extends _EitherRight<GenericInformation, GenericValue> {

}

/**
 * {@include either/right/index.md}
 */
export function right<
	GenericInformation extends string,
	const GenericValue extends unknown = undefined,
>(
	information: GenericInformation,
	value: GenericValue = undefined as GenericValue,
): EitherRight<
		GenericInformation,
		GenericValue
	> {
	return eitherRightKind.setTo(
		eitherInformationKind.setTo(
			wrapValue(value),
			information,
		),
	);
}
