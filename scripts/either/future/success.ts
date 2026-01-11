import { type Kind } from "@scripts/common/kind";
import { createEitherKind } from "../kind";
import { eitherFutureKind } from "./base";
import { right, type EitherRight } from "../right";

export const eitherFutureSuccessKind = createEitherKind(
	"future-success",
);

type _EitherFutureSuccess<
	GenericValue extends unknown = unknown,
> = (
	& EitherRight<"future", GenericValue>
	& Kind<typeof eitherFutureKind.definition>
	& Kind<typeof eitherFutureSuccessKind.definition>
);

export interface EitherFutureSuccess<
	GenericValue extends unknown = unknown,
> extends _EitherFutureSuccess<GenericValue> {

}

/**
 * {@include either/futureSuccess/index.md}
 */
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
