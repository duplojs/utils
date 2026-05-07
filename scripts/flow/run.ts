import { type SimplifyTopLevel, type IsEqual, type Or, justExec, kindHeritage, type AnyFunction, createExternalPromise, type Queue, createQueue, type UnionContain } from "@scripts/common";
import { type TheFlow, type TheFlowFunction, type FlowInput, type WrapFlow, type TheFlowGenerator, type Exit, type Break, breakKind, exitKind, theFlowKind, stepKind, type Step, type FlowDependencies, injectionKind, type Effect, dependenceHandlerKind, type DependenceHandler, type ExtractFlowGenerator, throttlingKind, type Throttling, calledByNextKind, queueKind, type Injection, debounceKind, type Debounce } from "./theFlow";
import { type Defer, deferKind } from "./theFlow/defer";
import { type Finalizer, finalizerKind } from "./theFlow/finalizer";
import { createFlowKind } from "./kind";

type ComputeRunParams<
	GenericInput extends unknown= unknown,
	GenericDependencies extends Record<string, unknown> = Record<string, unknown>,
> = SimplifyTopLevel<
	& (
		Or<[
			IsEqual<GenericInput, unknown>,
			IsEqual<GenericInput, never>,
			IsEqual<GenericInput, any>,
			UnionContain<GenericInput, undefined>,
		]> extends true
			? { input?: GenericInput }
			: { input: GenericInput }
	)
	& {
		includeDetails?: boolean;
	}
	& (
		{} extends GenericDependencies
			? { dependencies?: GenericDependencies }
			: { dependencies: GenericDependencies }
	)
>;

export interface FlowDetails<
	GenericValue extends unknown,
	GenericStepName extends string,
> {
	result: GenericValue;
	steps: GenericStepName[];
}

export type RunResult<
	GenericFlow extends TheFlow,
	GenericIncludeDetails extends boolean = false,
> = (
	GenericFlow extends TheFlow<infer InferredFunction>
		? InferredFunction extends TheFlowFunction<
			any,
			infer InferredGenerator
		>
			? InferredGenerator extends TheFlowGenerator<
				infer InferredOutput,
				infer InferredEffect
			>
				? (
					| (
						InferredEffect extends Exit<infer InferredValue>
							? InferredValue
							: InferredEffect extends Break<infer InferredValue>
								? InferredValue
								: InferredEffect extends Throttling<infer InferredValue>
									? InferredValue
									: InferredEffect extends Debounce<infer InferredValue>
										? InferredValue
										: never
					)
					| InferredOutput
				) extends infer InferredResult
					? IsEqual<GenericIncludeDetails, true> extends true
						? FlowDetails<
							InferredResult,
							InferredEffect extends Step<infer InferredName>
								? InferredName
								: never
						>
						: InferredResult
					: never
				: never
			: never
		: never
) extends infer InferredResult
	? ExtractFlowGenerator<GenericFlow> extends AsyncGenerator
		? Promise<InferredResult>
		: InferredResult
	: never;

export class MissingDependenceError extends kindHeritage(
	"missing-dependence-error",
	createFlowKind("missing-dependence-error"),
	Error,
) {
	public constructor(
		public dependenceHandler: DependenceHandler,
	) {
		super({}, [`Missing dependence : ${dependenceHandlerKind.getValue(dependenceHandler)}`]);
	}
}

/** @internal */
export const throttlingLastTimeWeakStore = new WeakMap<
	TheFlow | TheFlowFunction | TheFlowGenerator,
	number
>();

/** @internal */
export const throttlingResumerWeakStore = new WeakMap<
	TheFlow | TheFlowFunction | TheFlowGenerator,
	AnyFunction<[toResume: boolean], void>
>();

/** @internal */
export const debounceTimeoutIdWeakStore = new WeakMap<
	TheFlow | TheFlowFunction | TheFlowGenerator,
	number
>();

/** @internal */
export const debounceResumerWeakStore = new WeakMap<
	TheFlow | TheFlowFunction | TheFlowGenerator,
	AnyFunction<[toResume: boolean], void>
>();

/** @internal */
export const calledByNextFunctionWeakStore = new WeakMap<
	TheFlow | TheFlowFunction | TheFlowGenerator,
	AnyFunction<[]>
>();

/** @internal */
export const queuesWeakStore = new WeakMap<
	TheFlow | TheFlowFunction | TheFlowGenerator,
	Queue
>();

/**
 * {@include flow/run/index.md}
 */
export function run<
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
	),
	GenericWrapFlow extends WrapFlow<GenericFlow>,
	const GenericParams extends ComputeRunParams<
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

): RunResult<
		GenericWrapFlow,
		IsEqual<GenericParams["includeDetails"], true>
	> {
	let result: undefined | IteratorResult<Effect, unknown> = undefined;
	let deferFunctions: (() => unknown)[] | undefined = undefined;
	let steps: string[] | undefined = undefined;
	let alreadyUseThrottling: true | undefined = undefined;
	let alreadyUseDebounce: true | undefined = undefined;
	let alreadyUseCalledByNext: AnyFunction | undefined = undefined;
	let alreadyUseQueue: AnyFunction | undefined = undefined;

	const generator = typeof theFlow === "function"
		? theFlow(params?.input)
		: theFlowKind.getValue(theFlow).run(params?.input);

	if (Symbol.asyncIterator in generator) {
		return (async function() {
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
						result = await generator.return(
							exitKind.getValue(result.value).value,
						);
						break;
					} else if (deferKind.has(result.value)) {
						deferFunctions ??= [];
						deferFunctions.push(
							deferKind.getValue(result.value),
						);
					} else if (finalizerKind.has(result.value)) {
						deferFunctions ??= [];
						deferFunctions.push(
							finalizerKind.getValue(result.value),
						);
					} else if (
						params?.includeDetails === true
						&& stepKind.has(result.value)
					) {
						steps ??= [];
						steps.push(
							stepKind.getValue(result.value),
						);
					} else if (injectionKind.has(result.value)) {
						const injectionProperties = injectionKind.getValue(result.value);

						const dependenceName = dependenceHandlerKind.getValue(injectionProperties.dependenceHandler);
						if (
							!params?.dependencies
							|| !(dependenceName in params.dependencies)
						) {
							throw new MissingDependenceError(injectionProperties.dependenceHandler);
						}

						injectionProperties.inject(
							params.dependencies[dependenceName],
						);
					} else if (throttlingKind.has(result.value)) {
						if (alreadyUseThrottling) {
							continue;
						}
						alreadyUseThrottling = true;
						const { time, keepLast, returnValue } = throttlingKind.getValue(result.value);
						const lastTime = throttlingLastTimeWeakStore.get(theFlow);
						const now = Date.now();
						throttlingLastTimeWeakStore.set(theFlow, now);
						if (typeof lastTime === "number" && (lastTime + time) > now) {
							if (keepLast === true) {
								const resumer = throttlingResumerWeakStore.get(theFlow);
								resumer?.(false);

								const externalPromise = createExternalPromise<boolean>();
								throttlingResumerWeakStore.set(theFlow, externalPromise.resolve);

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
									const resumer = throttlingResumerWeakStore.get(theFlow);
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
						const lastFunction = calledByNextFunctionWeakStore.get(theFlow);
						const lastResult = lastFunction?.();
						if (lastResult instanceof Promise) {
							await lastResult;
						}

						calledByNextFunctionWeakStore.set(
							theFlow,
							alreadyUseCalledByNext,
						);
					} else if (queueKind.has(result.value)) {
						if (alreadyUseQueue) {
							continue;
						}
						const { concurrency, injectResolver } = queueKind.getValue(result.value);
						let queue = queuesWeakStore.get(theFlow);
						if (queue === undefined) {
							queue = createQueue({ concurrency });
							queuesWeakStore.set(theFlow, queue);
						}
						alreadyUseQueue = await queue.addExternal();
						injectResolver(alreadyUseQueue);
					} else if (debounceKind.has(result.value)) {
						if (alreadyUseDebounce) {
							continue;
						}
						alreadyUseDebounce = true;
						const { time, returnValue } = debounceKind.getValue(result.value);
						const lastTimeout = debounceTimeoutIdWeakStore.get(theFlow);
						clearTimeout(lastTimeout);
						const lastResumer = debounceResumerWeakStore.get(theFlow);
						lastResumer?.(false);
						const externalPromise = createExternalPromise<boolean>();
						debounceTimeoutIdWeakStore.set(
							theFlow,
							setTimeout(
								() => void externalPromise.resolve(true),
								time,
							) as never,
						);
						debounceResumerWeakStore.set(
							theFlow,
							externalPromise.resolve,
						);
						if (await externalPromise.promise) {
							continue;
						}
						result = await generator.return(
							returnValue,
						);
						break;
					}
				} while (true);

				return params?.includeDetails === true
					? {
						result: result.value,
						steps: steps ?? [],
					}
					: result.value;
			} finally {
				if (
					alreadyUseCalledByNext
					&& calledByNextFunctionWeakStore.get(theFlow) === alreadyUseCalledByNext
				) {
					calledByNextFunctionWeakStore.delete(theFlow);
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
				result = generator.return(
					exitKind.getValue(result.value).value,
				);
				break;
			} else if (deferKind.has(result.value)) {
				deferFunctions ??= [];
				deferFunctions.push(
					deferKind.getValue(result.value),
				);
			} else if (finalizerKind.has(result.value)) {
				deferFunctions ??= [];
				deferFunctions.push(
					finalizerKind.getValue(result.value),
				);
			} else if (
				params?.includeDetails === true
				&& stepKind.has(result.value)
			) {
				steps ??= [];
				steps.push(
					stepKind.getValue(result.value),
				);
			} else if (injectionKind.has(result.value)) {
				const injectionProperties = injectionKind.getValue(result.value);

				const dependenceName = dependenceHandlerKind.getValue(injectionProperties.dependenceHandler);
				if (
					!params?.dependencies
					|| !(dependenceName in params.dependencies)
				) {
					throw new MissingDependenceError(injectionProperties.dependenceHandler);
				}

				injectionProperties.inject(
					params.dependencies[dependenceName],
				);
			} else if (throttlingKind.has(result.value)) {
				const { time, returnValue } = throttlingKind.getValue(result.value);
				const lastTime = throttlingLastTimeWeakStore.get(theFlow);
				const now = Date.now();
				throttlingLastTimeWeakStore.set(theFlow, now);
				if (typeof lastTime === "number" && (lastTime + time) > now) {
					result = generator.return(
						returnValue,
					);
					break;
				}
			}
		} while (true);

		return (
			params?.includeDetails === true
				? {
					result: result.value,
					steps: steps ?? [],
				}
				: result.value
		) as never;
	} finally {
		generator.return(undefined);
		if (deferFunctions) {
			deferFunctions.map(
				justExec,
			);
		}
	}
}
