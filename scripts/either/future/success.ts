import { type Kind, type MergeKind } from "@scripts/common/kind";
import { createEitherKind } from "../base";
import { eitherFutureKind } from "./base";
import { right, type EitherRight } from "../right";

export const eitherFutureSuccessKind = createEitherKind(
	"future-success",
);

export interface EitherFutureSuccess<
	GenericValue extends unknown = unknown,
> extends MergeKind<
		| Kind<typeof eitherFutureKind.definition>
		| Kind<typeof eitherFutureSuccessKind.definition>,
		EitherRight<"future", GenericValue>
	> {

}

export function futureSuccess<
	const GenericValue extends unknown,
>(
	value: GenericValue,
): EitherFutureSuccess<GenericValue> {
	return eitherFutureKind.setTo(
		eitherFutureSuccessKind.setTo(
			right("future", value),
		),
	);
}
