import { type SimplifyTopLevel, type IsEqual, type IsExtends, type Or } from "../common";
import { type TheFlowGenerator, type TheFlow, type TheFlowFunction, type FlowInput, type WrapFlow, type Exit, type Break, type Injection, type Step, type FlowDependencies, type Throttling } from "./theFlow";
import { type Defer } from "./theFlow/defer";
import { type Finalizer } from "./theFlow/finalizer";
type ComputeExecParams<GenericInput extends unknown, GenericDependencies extends Record<string, unknown>> = SimplifyTopLevel<(Or<[
    IsEqual<GenericInput, unknown>,
    IsEqual<GenericInput, never>,
    IsExtends<GenericInput, undefined>
]> extends true ? {
    input?: GenericInput;
} : {
    input: GenericInput;
}) & {
    dependencies?: GenericDependencies;
}>;
export type ExecResult<GenericFlow extends TheFlow> = GenericFlow extends TheFlow<infer InferredFunction> ? InferredFunction extends TheFlowFunction<any, infer InferredGenerator> ? InferredGenerator extends TheFlowGenerator<infer InferredOutput, infer InferredEffect> ? [
    ((InferredEffect extends Break<infer InferredValue> ? InferredValue : InferredEffect extends Throttling<infer InferredValue> ? InferredValue : never) | InferredOutput),
    Extract<InferredEffect, Exit | Injection | Finalizer | Step>
] extends [
    infer InferredOutput,
    infer InferredEffect
] ? InferredGenerator extends AsyncGenerator ? AsyncGenerator<InferredEffect, InferredOutput> : Generator<InferredEffect, InferredOutput> : never : never : never : never;
/**
 * Executes a nested flow inside the current flow.
 * 
 * **Supported call styles:**
 * - Classic with a flow function: `exec(theFlow, params?)` -> runs the provided flow function
 * - Classic with a flow instance: `exec(theFlow, params?)` -> runs a flow created with `F.create(...)`
 * - Classic with a generator: `exec(theGenerator, params?)` -> runs an existing generator directly
 * 
 * `exec` lets a parent flow call another flow while staying in the same execution model.
 * Break values are converted into the local return value of `exec`, while exit, step, injection, and finalizer effects are forwarded to the outer flow.
 * It can be used in synchronous and asynchronous flows.
 * 
 * ```ts
 * 
 * const upperCaseFlow = F.create(
 * 	function *(input: string) {
 * 		return input.toUpperCase();
 * 	},
 * );
 * 
 * const userFlow = F.create(
 * 	function *(id: number) {
 * 		return `user-${id}`;
 * 	},
 * );
 * 
 * const breakableFlow = F.create(
 * 	function *(value: number) {
 * 		yield *F.breakIf(value, (current) => current === 2);
 * 		return "done";
 * 	},
 * );
 * 
 * F.run(
 * 	function *() {
 * 		return yield *F.exec(upperCaseFlow, { input: "hello" });
 * 	},
 * ); // "HELLO"
 * 
 * F.run(
 * 	function *() {
 * 		return yield *F.exec(userFlow, { input: 42 });
 * 	},
 * ); // "user-42"
 * 
 * F.run(
 * 	function *() {
 * 		return yield *F.exec(breakableFlow, { input: 2 });
 * 	},
 * ```
 * 
 * @remarks
 * - `exec` is useful for composing small flows into larger ones
 * 
 * @see [`F.run`](https://utils.duplojs.dev/en/v1/api/flow/run) To execute the root flow
 * @see https://utils.duplojs.dev/en/v1/api/flow/exec
 * 
 * @namespace F
 * 
 */
export declare function exec<GenericFlow extends (TheFlowFunction<any, TheFlowGenerator<unknown, Injection | Step | Exit | Break | Defer | Finalizer>> | TheFlow | TheFlowGenerator<unknown, Injection | Step | Exit | Break | Defer | Finalizer>), GenericWrapFlow extends WrapFlow<GenericFlow>, const GenericParams extends ComputeExecParams<FlowInput<GenericWrapFlow>, FlowDependencies<GenericWrapFlow>>>(theFlow: GenericFlow, ...[params]: ({} extends GenericParams ? [params?: GenericParams] : [params: GenericParams])): ExecResult<WrapFlow<GenericFlow>>;
export {};
