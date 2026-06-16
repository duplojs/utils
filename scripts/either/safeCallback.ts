import { type Left, isLeft, left } from "./left";
import { isRight, right, type Right } from "./right";

export type SafeCallbackSuccess<
	GenericValue extends unknown,
> = Right<"safe-callback-success", GenericValue>;

export type SafeCallbackError = Left<"safe-callback-error", unknown>;

type Either = Right | Left;

type ComputeSafeCallbackResult<
	GenericOutput extends unknown,
> = (
	| (
		GenericOutput extends Either
			? GenericOutput
			: GenericOutput extends Promise<infer InferredValue>
				? Promise<
					ComputeSafeCallbackResult<
						InferredValue
					>
				>
				: SafeCallbackSuccess<GenericOutput>
	)
	| SafeCallbackError
);

/**
 * {@include either/safeCallback/index.md}
 */
export function safeCallback<
	const GenericOutput extends unknown,
>(
	theFunction: () => GenericOutput,
): Extract<ComputeSafeCallbackResult<GenericOutput>, any> {
	let result: unknown = undefined;

	try {
		result = theFunction();
	} catch (error) {
		return left("safe-callback-error", error) as never;
	}

	if (result instanceof Promise) {
		return result
			.then((result) => {
				if (isRight(result) || isLeft(result)) {
					return result;
				}

				return right(
					"safe-callback-success",
					result,
				);
			})
			.catch((error) => left("safe-callback-error", error)) as never;
	}

	if (isRight(result) || isLeft(result)) {
		return result;
	}

	return right(
		"safe-callback-success",
		result,
	) as never;
}
