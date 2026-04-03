import { justExec, type SimplifyTopLevel, type IsEqual, type IsExtends, type Or, forward, type AnyFunction, createExternalPromise, type Queue, createQueue } from "@scripts/common";
import { type TheFlowGenerator, type TheFlow, type TheFlowFunction, type FlowInput, type WrapFlow, type Exit, type Break, type Injection, theFlowKind, exitKind, breakKind, type Step, stepKind, type FlowDependencies, type Effect, injectionKind, dependenceHandlerKind, throttlingKind, calledByNextKind, queueKind, type Throttling } from "./theFlow";
import { type Defer, deferKind } from "./theFlow/defer";
import { type Finalizer, finalizerKind } from "./theFlow/finalizer";
import { calledByNextFunction, queues, throttlingLastTime, throttlingResumer } from "./run";

type ComputeExecParams<
	GenericInput extends unknown,
	GenericDependencies extends Record<string, unknown>,
> = SimplifyTopLevel<
	& (
		Or<[
			IsEqual<GenericInput, unknown>,
			IsEqual<GenericInput, never>,
			IsExtends<GenericInput, undefined>,
		]> extends true
			? { input?: GenericInput }
			: { input: GenericInput }
	)
	& {
		dependencies?: GenericDependencies;
	}
>;

export type ExecResult<
	GenericFlow extends TheFlow,
> = GenericFlow extends TheFlow<infer InferredFunction>
	? InferredFunction extends TheFlowFunction<
		any,
		infer InferredGenerator
	>
		? InferredGenerator extends TheFlowGenerator<
			infer InferredOutput,
			infer InferredEffect
		>
			? [
				(
					| (
						InferredEffect extends Break<infer InferredValue>
							? InferredValue
							: InferredEffect extends Throttling<infer InferredValue>
								? InferredValue
								: never
					)
					| InferredOutput
				),
				Extract<
					InferredEffect,
					| Exit
					| Injection
					| Finalizer
					| Step
				>,
			] extends [
				infer InferredOutput,
				infer InferredEffect,
			]
				? InferredGenerator extends AsyncGenerator
					? AsyncGenerator<InferredEffect, InferredOutput>
					: Generator<InferredEffect, InferredOutput>
				: never
			: never
		: never
	: never;

/**
 * {@include flow/exec/index.md}
 */
export function exec<
	GenericFlow extends(
		| TheFlowFunction<
			any,
			TheFlowGenerator<
				unknown,
				| Injection
				| Step
				| Exit
				| Break
				| Defer
				| Finalizer
			>
		>
		| TheFlow
		| TheFlowGenerator<
			unknown,
			| Injection
			| Step
			| Exit
			| Break
			| Defer
			| Finalizer
		>
	),
	GenericWrapFlow extends WrapFlow<GenericFlow>,
	const GenericParams extends ComputeExecParams<
		FlowInput<GenericWrapFlow>,
		FlowDependencies<GenericWrapFlow>
	>,
>(
	theFlow: GenericFlow,
	...[params]: (
		{} extends GenericParams
			? [params?: GenericParams]
			: [params: GenericParams]
	)
): ExecResult<WrapFlow<GenericFlow>> {
	let result: undefined | IteratorResult<Effect, unknown> = undefined;
	let deferFunctions: (() => unknown)[] | undefined = undefined;
	let alreadyUseThrottling: true | undefined = undefined;
	let alreadyUseCalledByNext: AnyFunction | undefined = undefined;
	let alreadyUseQueue: AnyFunction | undefined = undefined;

	const generator = justExec(() => {
		if (Symbol.asyncIterator in theFlow || Symbol.iterator in theFlow) {
			return forward<TheFlowGenerator>(theFlow);
		} else if (typeof theFlow === "function") {
			return theFlow(params?.input);
		} else {
			return theFlowKind.getValue(theFlow).run(params?.input);
		}
	});

	if (Symbol.asyncIterator in generator) {
		return (async function *() {
			try {
				do {
					result = await generator.next();
					if (result.done === true) {
						break;
					} else if (breakKind.has(result.value)) {
						result = await generator.return(
							breakKind.getValue(result.value).value,
						);
						break;
					} else if (exitKind.has(result.value)) {
						yield result.value;
					} else if (deferKind.has(result.value)) {
						deferFunctions ??= [];
						deferFunctions.push(
							deferKind.getValue(result.value),
						);
					} else if (finalizerKind.has(result.value)) {
						yield result.value;
					} else if (stepKind.has(result.value)) {
						yield result.value;
					} else if (injectionKind.has(result.value)) {
						const injectionProperties = injectionKind.getValue(result.value);

						const dependenceName = dependenceHandlerKind.getValue(injectionProperties.dependenceHandler);
						if (
							!params?.dependencies
							|| !(dependenceName in params.dependencies)
						) {
							yield result.value;
						} else {
							injectionProperties.inject(
								params.dependencies[dependenceName],
							);
						}
					} else if (throttlingKind.has(result.value)) {
						if (alreadyUseThrottling) {
							continue;
						}
						alreadyUseThrottling = true;
						const { time, keepLast, returnValue } = throttlingKind.getValue(result.value);
						const lastTime = throttlingLastTime.get(theFlow);
						const now = Date.now();
						throttlingLastTime.set(theFlow, now);
						if (typeof lastTime === "number" && (lastTime + time) > now) {
							if (keepLast === true) {
								const resumer = throttlingResumer.get(theFlow);
								resumer?.(false);

								const externalPromise = createExternalPromise<boolean>();
								throttlingResumer.set(theFlow, externalPromise.resolve);

								if (await externalPromise.promise) {
									continue;
								}
							}

							result = await generator.return(
								returnValue,
							);
							break;
						} else if (keepLast === true) {
							setTimeout(
								() => {
									const resumer = throttlingResumer.get(theFlow);
									resumer?.(true);
								},
								time,
							);
						}
					} else if (calledByNextKind.has(result.value)) {
						if (alreadyUseCalledByNext) {
							continue;
						}
						alreadyUseCalledByNext = calledByNextKind.getValue(result.value);
						const lastFunction = calledByNextFunction.get(theFlow);
						const lastResult = lastFunction?.();
						if (lastResult instanceof Promise) {
							await lastResult;
						}

						calledByNextFunction.set(
							theFlow,
							alreadyUseCalledByNext,
						);
					} else if (queueKind.has(result.value)) {
						if (alreadyUseQueue) {
							continue;
						}
						const { concurrency, injectResolver } = queueKind.getValue(result.value);
						let queue = queues.get(theFlow);
						if (queue === undefined) {
							queue = createQueue({ concurrency });
							queues.set(theFlow, queue);
						}
						alreadyUseQueue = await queue.addExternal();
						injectResolver(alreadyUseQueue);
					}
				} while (true);

				return result.value;
			} finally {
				if (
					alreadyUseCalledByNext
					&& calledByNextFunction.get(theFlow) === alreadyUseCalledByNext
				) {
					calledByNextFunction.delete(theFlow);
				}
				if (alreadyUseQueue) {
					alreadyUseQueue();
				}
				await generator.return(undefined);
				if (deferFunctions) {
					await Promise.all(
						deferFunctions.map(
							justExec,
						),
					);
				}
			}
		})() as never;
	}

	return (function *() {
		try {
			do {
				result = generator.next();
				if (result.done === true) {
					break;
				} else if (breakKind.has(result.value)) {
					result = generator.return(
						breakKind.getValue(result.value).value,
					);
					break;
				} else if (exitKind.has(result.value)) {
					yield result.value;
				} else if (deferKind.has(result.value)) {
					deferFunctions ??= [];
					deferFunctions.push(
						deferKind.getValue(result.value),
					);
				} else if (finalizerKind.has(result.value)) {
					yield result.value;
				} else if (stepKind.has(result.value)) {
					yield result.value;
				} else if (injectionKind.has(result.value)) {
					const injectionProperties = injectionKind.getValue(result.value);

					const dependenceName = dependenceHandlerKind.getValue(injectionProperties.dependenceHandler);
					if (
						!params?.dependencies
						|| !(dependenceName in params.dependencies)
					) {
						yield result.value;
					} else {
						injectionProperties.inject(
							params.dependencies[dependenceName],
						);
					}
				} else if (throttlingKind.has(result.value)) {
					const { time, returnValue } = throttlingKind.getValue(result.value);
					const lastTime = throttlingLastTime.get(theFlow);
					const now = Date.now();
					throttlingLastTime.set(theFlow, now);
					if (typeof lastTime === "number" && (lastTime + time) > now) {
						result = generator.return(
							returnValue,
						);
						break;
					}
				}
			} while (true);

			return result.value;
		} finally {
			generator.return(undefined);
			if (deferFunctions) {
				deferFunctions.map(
					justExec,
				);
			}
		}
	})() as never;
}
