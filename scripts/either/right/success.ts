import { type Kind } from "@scripts/common/kind";
import { createEitherKind } from "../kind";
import { right, type EitherRight } from "./create";

export const eitherSuccessKind = createEitherKind("success");

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

/**
 * {@include either/success/index.md}
 */
export function success<
	const GenericValue extends unknown,
>(
	value: GenericValue,
): EitherSuccess<GenericValue> {
	return eitherSuccessKind.setTo(
		right("success", value),
	);
}
