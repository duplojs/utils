import { type SimplifyTopLevel, type IsEqual } from "@scripts/common";
import { type RunResult, run } from "./run";
import { type WrapFlow, type TheFlow, type TheFlowFunction, type FlowDependencies, type TheFlowGenerator } from "./theFlow";

type ComputeToFunctionParams<
	GenericDependencies extends Record<string, unknown> = Record<string, unknown>,
> = SimplifyTopLevel<
	& {
		includeDetails?: boolean;
	}
	& (
		{} extends GenericDependencies
			? { dependencies?: GenericDependencies }
			: { dependencies: GenericDependencies }
	)
>;

/**
 * {@include flow/toFunction/index.md}
 */
export function toFunction<
	GenericInput extends unknown,
	GenericOutput extends TheFlowGenerator,
	GenericWrapFlow extends WrapFlow<
		TheFlowFunction<GenericInput, GenericOutput>
	>,
	const GenericParams extends ComputeToFunctionParams<
		FlowDependencies<GenericWrapFlow>
	>,
>(
	flow: (
		| TheFlowFunction<GenericInput, GenericOutput>
		| TheFlow<
			TheFlowFunction<GenericInput, GenericOutput>
		>
	),
	...[params]: (
		{} extends GenericParams
			? [params?: GenericParams]
			: [params: GenericParams]
	)
): (input: GenericInput) => RunResult<
		GenericWrapFlow,
		IsEqual<GenericParams["includeDetails"], true>
	> {
	return (input) => run(
		flow as never,
		{
			...params,
			input,
		} as never,
	) as never;
}
