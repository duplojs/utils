import { type Kind } from "@scripts/common/kind";
import { wrapValue, type WrappedValue } from "@scripts/common/wrapValue";
import { createEitherKind, eitherInformationKind } from "../kind";

export const eitherLeftKind = createEitherKind("left");

type _EitherLeft<
	GenericInformation extends string = string,
	GenericValue extends unknown = unknown,
> = (
	& Kind<typeof eitherLeftKind.definition>
	& Kind<
		typeof eitherInformationKind.definition,
		GenericInformation
	>
	& WrappedValue<GenericValue>
);

export interface EitherLeft<
	GenericInformation extends string = string,
	GenericValue extends unknown = unknown,
> extends _EitherLeft<GenericInformation, GenericValue> {

}

/**
 * {@include either/left/index.md}
 */
export function left<
	GenericInformation extends string,
	const GenericValue extends unknown = undefined,
>(
	information: GenericInformation,
	value: GenericValue = undefined as GenericValue,
): EitherLeft<
		GenericInformation,
		GenericValue
	> {
	return eitherLeftKind.setTo(
		eitherInformationKind.setTo(
			wrapValue(value),
			information,
		),
	);
}
