import { type Left, isLeft } from "../left";
import { type Right, isRight } from "../right";
import { futureSuccess, type FutureSuccess } from "./success";
import { futureError, type FutureError } from "./error";
import { type IsEqual } from "@scripts/common/types/isEqual";
import { type AnyValue } from "@scripts/common";

type Either = Right | Left;

type ComputeEitherFutureSuccessResult<
	GenericValue extends unknown,
> = IsEqual<never, Exclude<GenericValue, Either>> extends false
	? FutureSuccess<Exclude<GenericValue, Either>>
	: never;

type ComputeEitherFutureErrorResult<
	GenericValue extends unknown,
> = GenericValue extends Future<any>
	? GenericValue
	: GenericValue extends Promise<unknown>
		? FutureError
		: never;

type ComputeFutureEitherResult<
	GenericValue extends unknown = unknown,
> = Extract<
	(
		| Extract<
			Awaited<GenericValue>,
			Either
		>
		| ComputeEitherFutureSuccessResult<
			Awaited<GenericValue>
		>
		| ComputeEitherFutureErrorResult<GenericValue>
	),
	any
>;

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
		Extract<
			ComputeFutureEitherResult<GenericValue>,
			any
		>
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

	// default declaration
	public override then<
		TResult1 = Extract<
			ComputeFutureEitherResult<GenericValue>,
			any
		>,
		TResult2 = never,
	>(
		onfulfilled?: ((
			value: Extract<
				ComputeFutureEitherResult<GenericValue>,
				any
			>
		) => TResult1 | PromiseLike<TResult1>) | null,
	): Promise<TResult1 | TResult2> {
		return super.then(onfulfilled);
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

	public static rightAll<
		const GenericArray extends readonly unknown[],
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

/**
 * {@include either/future/index.md}
 */
export function future<
	GenericEither extends AnyValue,
>(
	value: GenericEither,
) {
	return new Future(value);
}
