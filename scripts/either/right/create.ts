import { type MergeKind, type Kind } from "@scripts/common/kind";
import { wrapValue, type WrappedValue } from "@scripts/common/wrapValue";
import { createEitherKind, eitherInformationKind } from "../kind";

export const eitherRightKind = createEitherKind("right");

export interface EitherRight<
	GenericInformation extends string = string,
	GenericValue extends unknown = unknown,
> extends MergeKind<
		| Kind<typeof eitherRightKind.definition>
		| Kind<
			typeof eitherInformationKind.definition,
			GenericInformation
		>,
		WrappedValue<GenericValue>
	> {

}

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
