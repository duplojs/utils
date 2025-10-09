import { createKind, type Kind } from "@scripts/common/kind";
import { wrapValue, type WrappedValue } from "@scripts/common/wrapValue";
import { eitherInformationKind } from "../base";

export const eitherLeftKind = createKind("either-left");

type _EitherLeft<
	GenericInformation extends string = string,
	GenericValue extends unknown = unknown,
> = (
	& Kind<typeof eitherLeftKind.definition>
	& Kind<typeof eitherInformationKind.definition, GenericInformation>
	& WrappedValue<GenericValue>
);

export interface EitherLeft<
	GenericInformation extends string = string,
	GenericValue extends unknown = unknown,
> extends _EitherLeft<GenericInformation, GenericValue> {

}

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
	return eitherLeftKind.addTo(
		eitherInformationKind.addTo(
			wrapValue(value),
			information,
		),
	);
}
