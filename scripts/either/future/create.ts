import { type EitherError, type EitherLeft, isEitherLeft } from "../left";
import { type EitherRight, isEitherRight } from "../right";
import { createEitherFutureSuccess, type EitherFutureSuccess } from "./success";
import { createEitherFutureError } from "./error";
import { type IsEqual } from "@scripts/common/types/isEqual";
import { type AnyValue } from "@scripts/common/types/AnyValue";

type Either = EitherRight | EitherLeft;

type ComputeEitherFutureSuccess<
	GenericValue extends unknown,
> = IsEqual<never, Exclude<GenericValue, Either>> extends false
	? EitherFutureSuccess<Exclude<GenericValue, Either>>
	: never;

export class FutureEither<
	GenericValue extends unknown,
> extends Promise<
	| EitherError
	| Extract<
		Awaited<GenericValue>,
		Either
	>
	| ComputeEitherFutureSuccess<Awaited<GenericValue>>
	> {
	public constructor(
		value: GenericValue,
	) {
		super(
			(resolve) => void resolve(
				(
					value instanceof Promise
						? value
						: Promise.resolve(value)
				)
					.then((value) => {
						if (isEitherRight(value)) {
							return value;
						} else if (isEitherLeft(value)) {
							return value;
						} else {
							return createEitherFutureSuccess(value);
						}
					})
					.catch((error) => createEitherFutureError(error)),
			),
		);
	}

	public "kind-future-either" = null as unknown;

	public static override get [Symbol.species]() {
		return Promise;
	}
}

export function createFutureEither<
	GenericEither extends AnyValue,
>(
	value: GenericEither,
) {
	return new FutureEither(value);
}
