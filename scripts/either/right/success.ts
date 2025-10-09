import { right, type EitherRight } from "./create";
import { createKind, type Kind } from "@scripts/common/kind";

export const eitherSuccessKind = createKind("either-success");

type _EitherSuccess<
	GenericValue extends unknown = unknown,
> = (
	& EitherRight<"success", GenericValue>
	& Kind<typeof eitherSuccessKind.definition>
);

export interface EitherSuccess<
	GenericValue extends unknown = unknown,
> extends _EitherSuccess<GenericValue> {

}

export function success<
	const GenericValue extends unknown,
>(
	value: GenericValue,
): EitherSuccess<GenericValue> {
	return eitherSuccessKind.addTo(
		right("success", value),
	);
}
