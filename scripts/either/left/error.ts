import { createKind, type Kind } from "@scripts/common/kind";
import { left, type EitherLeft } from "./create";

export const eitherErrorKind = createKind("either-error");

type _EitherError<
	GenericValue extends unknown = unknown,
> = (
	& EitherLeft<"error", GenericValue>
	& Kind<typeof eitherErrorKind.definition>
);

export interface EitherError<
	GenericValue extends unknown = unknown,
> extends _EitherError<GenericValue> {

}

export function error<
	const GenericValue extends unknown,
>(
	value: GenericValue,
): EitherError<GenericValue> {
	return eitherErrorKind.setTo(
		left("error", value),
	);
}
