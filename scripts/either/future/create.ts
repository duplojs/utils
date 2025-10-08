import { type EitherLeft, isLeft } from "../left";
import { type EitherRight, isRight } from "../right";
import { futureSuccess, type EitherFutureSuccess } from "./success";
import { futureError, type EitherFutureError } from "./error";
import { type IsEqual } from "@scripts/common/types/isEqual";
import { type MaybePromise } from "@scripts/common/types/maybePromise";
import { type AnyValue } from "@scripts/common";

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
	GenericValue extends unknown = unknown,
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
	GenericArray extends readonly unknown[] | [],
> = Future<{
	-readonly [Prop in keyof GenericArray]: Awaited<
		Future<GenericArray[Prop]>
	>;
}>;

const kind = "kind-future-either";

export class Future<
	const GenericValue extends unknown = unknown,
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
						if (isRight(value)) {
							return value as never;
						} else if (isLeft(value)) {
							return value as never;
						} else {
							return futureSuccess(value) as never;
						}
					})
					.catch((error: unknown) => futureError(error) as never),
			),
		);
	}

	public [kind] = null as unknown;

	// @ts-expect-error override signature error
	public override then<
		const GenericOutput extends AnyValue,
	>(
		theFunction: (
			result: Extract<ComputeFutureEitherResult<GenericValue>, any>
		) => MaybePromise<GenericOutput>,
	) {
		return new Future<GenericOutput>(
			super.then(theFunction) as never,
		);
	}

	public static override get [Symbol.species]() {
		return Promise;
	}

	public static instanceof<
		GenericValue extends unknown,
	>(value: GenericValue): value is Extract<GenericValue, Future<any>> {
		return typeof value === "object"
			&& value?.constructor?.name === "Future"
			&& kind in value;
	}

	public static override all<
		const GenericValue extends unknown,
		GenericArray extends readonly GenericValue[] | [],
	>(values: GenericArray): FutureEitherAllResult<GenericArray> {
		return new Future(
			Promise.all(
				values.map(
					(value) => new Future(value),
				),
			),
		) as never;
	}
}

export function future<
	const GenericEither extends unknown,
>(
	value: GenericEither,
) {
	return new Future(value);
}
