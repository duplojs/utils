import { type MergeKind, type Kind } from "@scripts/common/kind";
import { wrapValue, type WrappedValue } from "@scripts/common/wrapValue";
import { createEitherKind, eitherInformationKind } from "../base";

export const eitherLeftKind = createEitherKind("left");

export interface EitherLeft<
	GenericInformation extends string = string,
	GenericValue extends unknown = unknown,
> extends MergeKind<
		| Kind<typeof eitherLeftKind.definition>
		| Kind<
			typeof eitherInformationKind.definition,
			GenericInformation
		>,
		WrappedValue<GenericValue>
	> {

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
	return eitherLeftKind.setTo(
		eitherInformationKind.setTo(
			wrapValue(value),
			information,
		),
	);
}
