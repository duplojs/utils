import { type SimplifyTopLevel, type IsEqual, type IsExtends, type Or, justExec, type } from "@scripts/common";
import { type TheFlow, type TheFlowFunction, create, createBreak, type TheFlowInput, type WrapTheFlowFunction, type TheFlowGenerator, type Exit, type Break, breakKind, exitKind, theFLowKind, createExit, stepKind, type Step, type TheFlowDependencies, createDependence } from "./theFlow";
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
	let result: undefined | IteratorResult<unknown> = undefined;
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
					if (breakKind.has(result.value)) {
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
					}
				} while (result.done !== true);

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
			if (breakKind.has(result.value)) {
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
			}
		} while (result.done !== true);

		return result.value;
	} finally {
		if (deferFunctions) {
			deferFunctions.map(
				justExec,
			);
		}
	}
}

const dep = createDependence("TheDep")<number>;

const flow = create(
	function *(test: "string") {
		yield createBreak(<const>"test");

		yield createExit(<const>"exit");

		yield *defer(() => {});
		yield *finalizer(() => {});

		yield *step("maSuperStep");
		yield *step("test");

		const value = yield *inject(dep);

		return test;
	},
);

const result = run(
	function *() {
		const result = yield *exec(flow, { input: "string" });

		return 12;
	},
	{
		includeDetails: true,
		dependencies: {
			TheDep: 3,
		},
	},
);

run(
	flow,
	{
		input: "string",
		dependencies: { TheDep: 40 },
	},
);
