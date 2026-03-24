import { type AnyFunction, type IsExtends, type Or } from "@scripts/common";
import { type RequireAtLeastOne } from "@scripts/object";
import { createDefer, createFinalizer, type Defer, type Finalizer } from "./theFlow";

export interface CreateInitializerParams<
	GenericOutput extends unknown = unknown,
> {
	defer?(output: Awaited<GenericOutput>): unknown;
	finalizer?(output: Awaited<GenericOutput>): unknown;
}

export type Initializer<
	GenericArgs extends unknown[],
	GenericOutput extends unknown,
	GenericParams extends CreateInitializerParams<GenericOutput>,
> = Extract<
	(...args: GenericArgs) => (
		(
			| (
				GenericParams["finalizer"] extends AnyFunction
					? Finalizer<ReturnType<GenericParams["finalizer"]>>
					: never
			)
			| (
				GenericParams["defer"] extends AnyFunction
					? Defer<ReturnType<GenericParams["defer"]>>
					: never
			)
		) extends infer InferredEffect
			? (
				| Generator<
					InferredEffect,
					Awaited<GenericOutput>
				>
				| (
					Or<[
						IsExtends<GenericOutput, Promise<unknown>>,
						IsExtends<InferredEffect, Finalizer<Promise<unknown>>>,
						IsExtends<InferredEffect, Defer<Promise<unknown>>>,
					]> extends true
						? AsyncGenerator<
							InferredEffect,
							Awaited<GenericOutput>
						>
						: never
				)
			)
			: never

	),
	any
>;

/**
 * {@include flow/createInitializer/index.md}
 */
export function createInitializer<
	GenericArgs extends unknown[],
	GenericOutput extends unknown,
	GenericParams extends CreateInitializerParams<GenericOutput>,
>(
	initializer: (...args: GenericArgs) => GenericOutput,
	params: GenericParams & RequireAtLeastOne<GenericParams, keyof CreateInitializerParams>,
): Initializer<
		GenericArgs,
		GenericOutput,
		GenericParams
	> {
	return (...args) => {
		const result = initializer(...args);
		const defer = params.defer;
		const finalizer = params.finalizer;

		if (result instanceof Promise) {
			return (async function *() {
				const awaitedResult = await result;

				if (defer) {
					yield createDefer(() => defer(awaitedResult));
				}

				if (finalizer) {
					yield createFinalizer(() => finalizer(awaitedResult));
				}

				return awaitedResult;
			})() as never;
		}

		return (function *() {
			if (defer) {
				yield createDefer(() => defer(result as never));
			}

			if (finalizer) {
				yield createFinalizer(() => finalizer(result as never));
			}

			return result;
		})() as never;
	};
}
