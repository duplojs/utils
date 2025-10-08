import { createKind, type Kind } from "@scripts/common/kind";
import { left, type EitherLeft } from "./create";

export const eitherErrorKind = createKind("either-error");

export type EitherError<
	GenericValue extends unknown = unknown,
> = (
	& EitherLeft<"error", GenericValue>
	& Kind<typeof eitherErrorKind.definition>
);

export function error<
	const GenericValue extends unknown,
>(
	value: GenericValue,
): EitherError<GenericValue> {
	return eitherErrorKind.addTo(
		left("error", value),
	);
}
