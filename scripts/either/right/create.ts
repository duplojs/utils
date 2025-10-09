import { createKind, type Kind } from "@scripts/common/kind";
import { wrapValue, type WrappedValue } from "@scripts/common/wrapValue";
import { eitherInformationKind } from "../base";

export const eitherRightKind = createKind("either-right");

export type EitherRight<
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
	return eitherRightKind.addTo(
		eitherInformationKind.addTo(
			wrapValue(value),
			information,
		),
	);
}
