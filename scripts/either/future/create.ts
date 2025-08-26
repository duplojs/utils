import { type EitherLeft, isEitherLeft } from "../left";
import { type EitherRight, isEitherRight } from "../right";
import { createEitherFutureSuccess, type EitherFutureSuccess } from "./success";
import { createEitherFutureError, type EitherFutureError } from "./error";
import { type IsEqual } from "@scripts/common/types/isEqual";
import { type AnyValue } from "@scripts/common/types/anyValue";
import { type MaybePromise } from "@scripts/common/types/maybePromise";

type Either = EitherRight | EitherLeft;

type ComputeEitherFutureSuccessResult<
	GenericValue extends unknown,
> = IsEqual<never, Exclude<GenericValue, Either>> extends false
	? EitherFutureSuccess<Exclude<GenericValue, Either>>
	: never;

type ComputeEitherFutureErrorResult<
	GenericValue extends unknown,
> = GenericValue extends Promise<unknown>
	? EitherFutureError
	: never;

type ComputeFutureEitherResult<
	GenericValue extends AnyValue = AnyValue,
> =
	| Extract<
		Awaited<GenericValue>,
		Either
	>
	| ComputeEitherFutureSuccessResult<
		Awaited<GenericValue>
	>
	| ComputeEitherFutureErrorResult<GenericValue>;

export type FutureEitherAllResult<
	GenericArray extends readonly AnyValue[] | [],
> = FutureEither<{
	-readonly [Prop in keyof GenericArray]: Awaited<
		FutureEither<GenericArray[Prop]>
	>;
}>;

const kind = "kind-future-either";

export class FutureEither<
	GenericValue extends AnyValue = AnyValue,
> extends Promise<
		ComputeFutureEitherResult<GenericValue>
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
							return value as never;
						} else if (isEitherLeft(value)) {
							return value as never;
						} else {
							return createEitherFutureSuccess(value) as never;
						}
					})
					.catch((error: AnyValue) => createEitherFutureError(error) as never),
			),
		);
	}

	public [kind] = null as unknown;

	// @ts-expect-error override signature error
	public override then<
		GenericOutput extends AnyValue,
	>(
		theFunction: (
			result: Extract<ComputeFutureEitherResult<GenericValue>, any>
		) => MaybePromise<GenericOutput>,
	) {
		return new FutureEither<GenericOutput>(
			super.then(theFunction) as never,
		);
	}

	public static override get [Symbol.species]() {
		return Promise;
	}

	public static instanceof(value: unknown): value is FutureEither {
		return typeof value === "object"
			&& value?.constructor?.name === "FutureEither"
			&& kind in value;
	}

	public static override all<
		GenericValue extends AnyValue,
		GenericArray extends readonly GenericValue[] | [],
	>(values: GenericArray): FutureEitherAllResult<GenericArray> {
		return new FutureEither(
			Promise.all(
				values.map(
					(value) => new FutureEither(value),
				),
			),
		) as never;
	}
}

export function createFutureEither<
	GenericEither extends AnyValue,
>(
	value: GenericEither,
) {
	return new FutureEither(value);
}
