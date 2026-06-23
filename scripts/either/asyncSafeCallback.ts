import { type Left, isLeft, left } from "./left";
import { isRight, right, type Right } from "./right";
import { type SafeCallbackError, type SafeCallbackSuccess } from "./safeCallback";

type Either = Right | Left;

type ComputeSafeCallbackResult<
	GenericOutput extends unknown,
> = Extract<
	| (
		GenericOutput extends Either
			? GenericOutput
			: GenericOutput extends Promise<infer InferredValue>
				? ComputeSafeCallbackResult<
					InferredValue
				>
				: SafeCallbackSuccess<GenericOutput>
	),
	any
>;

/**
 * {@include either/asyncSafeCallback/index.md}
 */
export async function asyncSafeCallback<
	const GenericOutput extends unknown,
>(
	maybeFunction: (() => GenericOutput) | Promise<GenericOutput>,
): Promise<
		ComputeSafeCallbackResult<GenericOutput> | SafeCallbackError
	> {
	let result: unknown = undefined;

	try {
		result = await (
			typeof maybeFunction === "function"
				? maybeFunction()
				: maybeFunction
		);
	} catch (error) {
		return left("safe-callback-error", error) as never;
	}

	if (isRight(result) || isLeft(result)) {
		return result;
	}

	return right(
		"safe-callback-success",
		result,
	) as never;
}
