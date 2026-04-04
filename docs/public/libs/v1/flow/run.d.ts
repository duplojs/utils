import { type SimplifyTopLevel, type IsEqual, type IsExtends, type Or } from "../common";
import { type TheFlow, type TheFlowFunction, type FlowInput, type WrapFlow, type TheFlowGenerator, type Exit, type Break, type Step, type FlowDependencies, type DependenceHandler, type ExtractFlowGenerator, type Throttling, type Injection, type Debounce } from "./theFlow";
import { type Defer } from "./theFlow/defer";
import { type Finalizer } from "./theFlow/finalizer";
type ComputeRunParams<GenericInput extends unknown = unknown, GenericDependencies extends Record<string, unknown> = Record<string, unknown>> = SimplifyTopLevel<(Or<[
    IsEqual<GenericInput, unknown>,
    IsEqual<GenericInput, never>,
    IsExtends<GenericInput, undefined>
]> extends true ? {
    input?: GenericInput;
} : {
    input: GenericInput;
}) & {
    includeDetails?: boolean;
} & ({} extends GenericDependencies ? {
    dependencies?: GenericDependencies;
} : {
    dependencies: GenericDependencies;
})>;
export interface FlowDetails<GenericValue extends unknown, GenericStepName extends string> {
    result: GenericValue;
    steps: GenericStepName[];
}
export type RunResult<GenericFlow extends TheFlow, GenericIncludeDetails extends boolean = false> = (GenericFlow extends TheFlow<infer InferredFunction> ? InferredFunction extends TheFlowFunction<any, infer InferredGenerator> ? InferredGenerator extends TheFlowGenerator<infer InferredOutput, infer InferredEffect> ? ((InferredEffect extends Exit<infer InferredValue> ? InferredValue : InferredEffect extends Break<infer InferredValue> ? InferredValue : InferredEffect extends Throttling<infer InferredValue> ? InferredValue : InferredEffect extends Debounce<infer InferredValue> ? InferredValue : never) | InferredOutput) extends infer InferredResult ? IsEqual<GenericIncludeDetails, true> extends true ? FlowDetails<InferredResult, InferredEffect extends Step<infer InferredName> ? InferredName : never> : InferredResult : never : never : never : never) extends infer InferredResult ? ExtractFlowGenerator<GenericFlow> extends AsyncGenerator ? Promise<InferredResult> : InferredResult : never;
declare const MissingDependenceError_base: new (params: {
    "@DuplojsUtilsFlow/missing-dependence-error"?: unknown;
}, parentParams: readonly [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & import("../common").Kind<import("../common").KindDefinition<"missing-dependence-error", unknown>, unknown> & import("../common").Kind<import("../common").KindDefinition<"@DuplojsUtilsFlow/missing-dependence-error", unknown>, unknown>;
export declare class MissingDependenceError extends MissingDependenceError_base {
    dependenceHandler: DependenceHandler;
    constructor(dependenceHandler: DependenceHandler);
}
/**
 * Runs a flow and resolves its final result.
 * 
 * **Supported call styles:**
 * - Classic with a flow function: `run(theFlow, params?)` -> executes the provided flow function
 * - Classic with a flow instance: `run(theFlow, params?)` -> executes a flow created with `F.create(...)`
 * 
 * `run` is the entry point of the flow system.
 * It executes synchronous or asynchronous flows, handles break and exit effects, collects steps when `includeDetails` is enabled, runs deferred and finalizer callbacks, and injects declared dependencies.
 * Use `run` to start a top-level flow and get its final value.
 * 
 * ```ts
 * F.run(
 * 	function *(input: string) {
 * 		return input.toUpperCase();
 * 	},
 * 	{ input: "hello" },
 * ); // "HELLO"
 * 
 * F.run(
 * 	function *() {
 * 		yield *F.step("check cache");
 * 		yield *F.breakIf(2, (value) => value === 2);
 * 		return "done";
 * 	},
 * 	{ includeDetails: true },
 * ); // { result: 2, steps: ["check cache"] }
 * 
 * const service = F.createDependence("service")<string>;
 * 
 * F.run(
 * 	function *() {
 * 		const currentService = yield *F.inject(service);
 * 		yield *F.finalizer(() => currentService.toUpperCase());
 * 		return currentService;
 * 	},
 * 	{ dependencies: { service: "api" } },
 * ); // "api"
 * ```
 * 
 * @remarks
 * - `run` returns a `Promise` when the executed flow is asynchronous
 * 
 * @see [`F.exec`](https://utils.duplojs.dev/en/v1/api/flow/exec) To run a nested flow from inside another flow
 * @see https://utils.duplojs.dev/en/v1/api/flow/run
 * 
 * @namespace F
 * 
 */
export declare function run<GenericFlow extends (TheFlowFunction<any, TheFlowGenerator<unknown, Injection | Step | Exit | Break | Defer | Finalizer>> | TheFlow), GenericWrapFlow extends WrapFlow<GenericFlow>, const GenericParams extends ComputeRunParams<FlowInput<GenericWrapFlow>, FlowDependencies<GenericWrapFlow>>>(theFlow: GenericFlow, ...[params]: ({} extends GenericParams ? [params?: GenericParams] : [params: GenericParams])): RunResult<GenericWrapFlow, IsEqual<GenericParams["includeDetails"], true>>;
export {};
