import { right, type EitherRight } from "./create";
import { createKind, type Kind } from "@scripts/common/kind";

export const eitherSuccessKind = createKind("either-success");

export type EitherSuccess<
	GenericValue extends unknown = unknown,
> = (
	& EitherRight<"success", GenericValue>
	& Kind<typeof eitherSuccessKind.definition>
);

export function success<
	const GenericValue extends unknown,
>(
	value: GenericValue,
): EitherSuccess<GenericValue> {
	return eitherSuccessKind.addTo(
		right("success", value),
	);
}
