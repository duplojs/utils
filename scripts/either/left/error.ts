import { type MergeKind, type Kind } from "@scripts/common/kind";
import { createEitherKind } from "../base";
import { left, type EitherLeft } from "./create";

export const eitherErrorKind = createEitherKind("error");

export interface EitherError<
	GenericValue extends unknown = unknown,
> extends MergeKind<
		Kind<typeof eitherErrorKind.definition>,
		EitherLeft<"error", GenericValue>
	> {

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
