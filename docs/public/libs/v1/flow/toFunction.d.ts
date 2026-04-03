import { type SimplifyTopLevel, type IsEqual } from "../common";
import { type RunResult } from "./run";
import { type WrapFlow, type TheFlow, type TheFlowFunction, type FlowDependencies, type TheFlowGenerator } from "./theFlow";
type ComputeToFunctionParams<GenericDependencies extends Record<string, unknown> = Record<string, unknown>> = SimplifyTopLevel<{
    includeDetails?: boolean;
} & ({} extends GenericDependencies ? {
    dependencies?: GenericDependencies;
} : {
    dependencies: GenericDependencies;
})>;
/**
 * Converts a flow into a plain callable function that delegates to `F.run(...)`.
 * 
 * **Supported call styles:**
 * - Classic with a flow function: `toFunction(flow, params?)` -> returns a callable function
 * - Classic with a flow instance: `toFunction(flow, params?)` -> returns a callable function
 * 
 * `toFunction` wraps a flow function or a flow created with `F.create(...)` and returns a regular function that accepts only the flow input.
 * The provided options are forwarded to `F.run(...)`, which means you can preconfigure `includeDetails` and `dependencies`.
 * Use it when a flow should be exposed as a reusable application function instead of being run manually each time.
 * 
 * ```ts
 * const runUppercase = F.toFunction(
 * 	function *(input: string) {
 * 		yield *F.step("uppercase");
 * 		return input.toUpperCase();
 * 	},
 * );
 * runUppercase("duplo"); // "DUPLO"
 * 
 * const runWithDetails = F.toFunction(
 * 	function *(input: string) {
 * 		yield *F.step("format");
 * 		return input.length;
 * 	},
 * 	{ includeDetails: true },
 * );
 * runWithDetails("hello"); // { result: 5, steps: ["format"] }
 * 
 * const service = F.createDependence("service")<string>;
 * const runWithDependencies = F.toFunction(
 * 	function *(input: string) {
 * 		const currentService = yield *F.inject(service);
 * ```
 * 
 * @remarks
 * - `toFunction` keeps the same sync or async return shape as `F.run(...)` for the wrapped flow
 * 
 * @see [`F.run`](https://utils.duplojs.dev/en/v1/api/flow/run) For the execution behavior used internally
 * @see https://utils.duplojs.dev/en/v1/api/flow/toFunction
 * 
 * @namespace F
 * 
 */
export declare function toFunction<GenericInput extends unknown, GenericOutput extends TheFlowGenerator, GenericWrapFlow extends WrapFlow<TheFlowFunction<GenericInput, GenericOutput>>, const GenericParams extends ComputeToFunctionParams<FlowDependencies<GenericWrapFlow>>>(flow: (TheFlowFunction<GenericInput, GenericOutput> | TheFlow<TheFlowFunction<GenericInput, GenericOutput>>), ...[params]: ({} extends GenericParams ? [params?: GenericParams] : [params: GenericParams])): (input: GenericInput) => RunResult<GenericWrapFlow, IsEqual<GenericParams["includeDetails"], true>>;
export {};
