import { type SimplifyTopLevel, type IsEqual, type IsExtends, type Or, justExec } from "@scripts/common";
import { type TheFlow, type TheFlowFunction, create, createBreak, type TheFlowInput, type WrapTheFlowFunction, type TheFlowGenerator, type Exit, type Break, breakKind, exitKind, theFLowKind, createExit, stepKind, type Step, type TheFlowDependencies, createDependence, injectionKind, type Effect, dependenceHandlerKind } from "./theFlow";
import { exec } from "./exec";
import { deferKind } from "./theFlow/defer";
import { finalizerKind } from "./theFlow/finalizer";
import { defer } from "./defer";
import { finalizer } from "./finalizer";
import { step } from "./step";
import { inject } from "./inject";

type ComputeRunParams<
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
> = GenericFlow extends TheFlow<infer InferredFunction>
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
	: never;

export function run<
	GenericFlow extends(
		| TheFlowFunction
		| TheFlow
	),
	GenericWrapFlow extends WrapTheFlowFunction<GenericFlow>,
	const GenericParams extends ComputeRunParams<
		TheFlowInput<GenericWrapFlow>,
		TheFlowDependencies<GenericWrapFlow>
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

	const generator = typeof theFlow === "function"
		? theFlow(params?.input)
		: theFLowKind.getValue(theFlow).run(params?.input);

	if (Symbol.asyncIterator in generator) {
		return (async function() {
			try {
				do {
					result = await generator.next();
					if (result.done === true) {
						break;
					} else if (breakKind.has(result.value)) {
						result = await generator.return(
							breakKind.getValue(result.value),
						);
					} else if (exitKind.has(result.value)) {
						result = await generator.return(
							exitKind.getValue(result.value),
						);
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
							throw new Error("");
						}

						injectionProperties.inject(
							params.dependencies[dependenceName],
						);
					}
				} while (true);

				return result.value;
			} finally {
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
					breakKind.getValue(result.value),
				);
			} else if (exitKind.has(result.value)) {
				result = generator.return(
					exitKind.getValue(result.value),
				);
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
					throw new Error("");
				}

				injectionProperties.inject(
					params.dependencies[dependenceName],
				);
			}
		} while (true);

		return result.value as never;
	} finally {
		if (deferFunctions) {
			deferFunctions.map(
				justExec,
			);
		}
	}
}
