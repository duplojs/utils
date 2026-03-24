import { justExec, type SimplifyTopLevel, type IsEqual, type IsExtends, type Or, forward } from "@scripts/common";
import { type TheFlowGenerator, type TheFlow, type TheFlowFunction, type FlowInput, type WrapFlow, type Exit, type Break, type Injection, theFLowKind, exitKind, breakKind, type Step, stepKind, type FlowDependencies, type Effect, injectionKind, dependenceHandlerKind } from "./theFlow";
import { deferKind } from "./theFlow/defer";
import { type Finalizer, finalizerKind } from "./theFlow/finalizer";

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

export function exec<
	GenericFlow extends(
		| TheFlowFunction
		| TheFlow
		| TheFlowGenerator
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

	const generator = justExec(() => {
		if (Symbol.asyncIterator in theFlow || Symbol.iterator in theFlow) {
			return forward<TheFlowGenerator>(theFlow);
		} else if (typeof theFlow === "function") {
			return theFlow(params?.input);
		} else {
			return theFLowKind.getValue(theFlow).run(params?.input);
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
					}
				} while (true);

				return result.value;
			} finally {
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
