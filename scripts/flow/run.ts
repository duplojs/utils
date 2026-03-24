import { type SimplifyTopLevel, type IsEqual, type IsExtends, type Or, justExec, kindHeritage } from "@scripts/common";
import { type TheFlow, type TheFlowFunction, type FlowInput, type WrapFlow, type TheFlowGenerator, type Exit, type Break, breakKind, exitKind, theFLowKind, stepKind, type Step, type FlowDependencies, injectionKind, type Effect, dependenceHandlerKind, type DependenceHandler, type ExtractFlowGenerator } from "./theFlow";
import { deferKind } from "./theFlow/defer";
import { finalizerKind } from "./theFlow/finalizer";
import { createFlowKind } from "./kind";

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

/**
 * {@include flow/run/index.md}
 */
export function run<
	GenericFlow extends(
		| TheFlowFunction
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
					}
				} while (true);

				return params?.includeDetails === true
					? {
						result: result.value,
						steps: steps ?? [],
					}
					: result.value;
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
