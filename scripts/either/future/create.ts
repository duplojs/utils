import { type EitherLeft, isEitherLeft } from "../left";
import { type EitherRight, isEitherRight } from "../right";
import { createEitherFutureSuccess, type EitherFutureSuccess } from "./success";
import { createEitherFutureError, type EitherFutureError } from "./error";
import { type IsEqual } from "@scripts/common/types/isEqual";
import { type AnyValue } from "@scripts/common/types/anyValue";

type Either = EitherRight | EitherLeft;

type ComputeEitherFutureSuccess<
	GenericValue extends unknown,
> = IsEqual<never, Exclude<GenericValue, Either>> extends false
	? EitherFutureSuccess<Exclude<GenericValue, Either>>
	: never;

export class FutureEither<
	GenericValue extends AnyValue = AnyValue,
> extends Promise<
	| EitherFutureError
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
					.catch((error: AnyValue) => createEitherFutureError(error)),
			),
		);
	}

	public "kind-future-either" = null as unknown;

	public static override get [Symbol.species]() {
		return Promise;
	}

	public static instanceof(value: unknown): value is FutureEither {
		return value?.constructor?.name === "FutureEither";
	}
}

export function createFutureEither<
	GenericEither extends AnyValue,
>(
	value: GenericEither,
) {
	return new FutureEither(value);
}
