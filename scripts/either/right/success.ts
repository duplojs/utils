import { type MergeKind, type Kind } from "@scripts/common/kind";
import { createEitherKind } from "../base";
import { right, type EitherRight } from "./create";

export const eitherSuccessKind = createEitherKind("success");

export interface EitherSuccess<
	GenericValue extends unknown = unknown,
> extends MergeKind<
		Kind<typeof eitherSuccessKind.definition>,
		EitherRight<"success", GenericValue>
	> {

}

export function success<
	const GenericValue extends unknown,
>(
	value: GenericValue,
): EitherSuccess<GenericValue> {
	return eitherSuccessKind.setTo(
		right("success", value),
	);
}
