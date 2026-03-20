import { justExec, type SimplifyTopLevel, type IsEqual, type IsExtends, type Or } from "@scripts/common";
import { type TheFlowGenerator, type TheFlow, type TheFlowFunction, type TheFlowInput, type WrapTheFlowFunction, type Exit, type Break, type Injection, theFLowKind, exitKind, breakKind, type Step, stepKind } from "./theFlow";
import { deferKind } from "./theFlow/defer";
import { type Finalizer, finalizerKind } from "./theFlow/finalizer";

type ComputeExecParams<
	GenericInput extends unknown,
> = SimplifyTopLevel<
	| (
		Or<[
			IsEqual<GenericInput, unknown>,
			IsEqual<GenericInput, never>,
			IsExtends<GenericInput, undefined>,
		]> extends true
			? { input?: GenericInput }
			: { input: GenericInput }
	)
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
	),
	GenericInput extends TheFlowInput<
		WrapTheFlowFunction<GenericFlow>
	>,
>(
	theFlow: GenericFlow,
	...[params]: (
		ComputeExecParams<GenericInput> extends infer InferredParams
			? {} extends InferredParams
				? [param?: InferredParams]
				: [params: InferredParams]
			: never
	)
): ExecResult<WrapTheFlowFunction<GenericFlow>> {
	let result: undefined | IteratorResult<unknown> = undefined;
	let deferFunctions: (() => unknown)[] | undefined = undefined;

	const generator = typeof theFlow === "function"
		? theFlow((params as Record<string, unknown>).input)
		: theFLowKind.getValue(theFlow).run((params as Record<string, unknown>).input);

	if (Symbol.asyncIterator in generator) {
		return (async function *() {
			try {
				do {
					result = await generator.next();
					if (breakKind.has(result.value)) {
						result = await generator.return(
							breakKind.getValue(result.value),
						);
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

	return (function *() {
		try {
			do {
				result = generator.next();
				if (breakKind.has(result.value)) {
					result = generator.return(
						breakKind.getValue(result.value),
					);
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
	})() as never;
}
