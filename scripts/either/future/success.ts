import { right, type EitherRight } from "../right";
import { createKind, type Kind } from "@scripts/common/kind";
import { eitherFutureKind } from "./base";

export const eitherFutureSuccessKind = createKind(
	"either-future-success",
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

export function futureSuccess<
	const GenericValue extends unknown,
>(
	value: GenericValue,
): EitherFutureSuccess<GenericValue> {
	return eitherFutureKind.addTo(
		eitherFutureSuccessKind.addTo(
			right("future", value),
		),
	);
}
