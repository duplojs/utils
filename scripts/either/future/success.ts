import { type Kind } from "@scripts/common/kind";
import { createEitherKind } from "../kind";
import { futureKind } from "./base";
import { right, type Right } from "../right";

export const futureSuccessKind = createEitherKind(
	"future-success",
);

/**
 * @deprecated use futureSuccessKind
 */
export const eitherFutureSuccessKind = futureSuccessKind;

type _FutureSuccess<
	GenericValue extends unknown = unknown,
> = (
	& Right<"future", GenericValue>
	& Kind<typeof futureKind.definition>
	& Kind<typeof futureSuccessKind.definition>
);

export interface FutureSuccess<
	GenericValue extends unknown = unknown,
> extends _FutureSuccess<GenericValue> {

}

/**
 * @deprecated use FutureSuccess
 */
export type EitherFutureSuccess<
	GenericValue extends unknown = unknown,
> = FutureSuccess<GenericValue>;

/**
 * {@include either/futureSuccess/index.md}
 */
export function futureSuccess<
	const GenericValue extends unknown,
>(
	value: GenericValue,
): FutureSuccess<GenericValue> {
	return futureKind.setTo(
		futureSuccessKind.setTo(
			right("future", value),
		),
	);
}
