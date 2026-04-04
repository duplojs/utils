import { type GetKindValue, type Kind } from "../../common";
import { type Step } from "./step";
import { type Exit } from "./exit";
import { type Injection } from "./injection";
import { type Break } from "./break";
import { type Defer } from "./defer";
import { type Finalizer } from "./finalizer";
import { type DependenceHandler, type dependenceHandlerKind } from "./dependence";
import { type Throttling } from "./throttling";
import { type CalledByNext } from "./calledByNext";
import { type Queue } from "./queue";
import { type Debounce } from "./debounce";
export * from "./step";
export * from "./exit";
export * from "./break";
export * from "./injection";
export * from "./defer";
export * from "./finalizer";
export * from "./dependence";
export * from "./throttling";
export * from "./calledByNext";
export * from "./queue";
export * from "./debounce";
export type Effect = (Injection | Step | Exit | Break | Defer | Finalizer | Throttling | CalledByNext | Queue | Debounce);
export type TheFlowGenerator<GenericOutput extends unknown = unknown, GenericEffect extends Effect = Effect> = (Generator<Exclude<GenericEffect, (Queue | CalledByNext | Debounce)>, GenericOutput> | AsyncGenerator<GenericEffect, GenericOutput>);
export type TheFlowFunction<GenericInput extends any = any, GenericGenerator extends TheFlowGenerator = TheFlowGenerator> = (input: GenericInput) => GenericGenerator;
export interface TheFlowProperties<GenericFunction extends TheFlowFunction = TheFlowFunction> {
    run: GenericFunction;
}
export declare const theFlowKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsFlow/the-flow", TheFlowProperties<TheFlowFunction<any, TheFlowGenerator<unknown, Effect>>>>>;
export interface TheFlow<GenericFunction extends TheFlowFunction = TheFlowFunction> extends Kind<typeof theFlowKind.definition, TheFlowProperties<GenericFunction>> {
}
/**
 * Creates a reusable flow object from a flow function.
 * 
 * **Supported call styles:**
 * - Classic: `create(theFunction)` -> returns a flow instance that can be passed to `F.run(...)` or `F.exec(...)`
 * 
 * `create` wraps a generator-based flow function into a flow object understood by the flow runtime.
 * The returned flow can be executed multiple times with different inputs and can be composed with `F.exec(...)`.
 * Use it to name, share, and reuse flow definitions without executing them immediately.
 * 
 * ```ts
 * const greetingFlow = F.create(
 * 	function *(name: string) {
 * 		return `hello ${name}`;
 * 	},
 * );
 * 
 * F.run(greetingFlow, { input: "Ada" }); // "hello Ada"
 * 
 * const breakableFlow = F.create(
 * 	function *(value: number) {
 * 		yield *F.breakIf(value, (current) => current === 0);
 * 		return value * 2;
 * 	},
 * );
 * 
 * F.run(breakableFlow, { input: 0 }); // 0
 * 
 * F.run(
 * 	function *() {
 * 		return yield *F.exec(greetingFlow, { input: "Linus" });
 * 	},
 * ); // "hello Linus"
 * 
 * const asyncFlow = F.create(
 * 	async function *(name: string) {
 * 		const value = await name.toUpperCase();
 * 		return value;
 * 	},
 * );
 * 
 * await F.run(asyncFlow, { input: "flow" }); // Promise<"FLOW">
 * ```
 * 
 * @remarks
 * - `create` does not execute the flow, it only wraps it for later use
 * 
 * @see [`F.run`](https://utils.duplojs.dev/en/v1/api/flow/run) To execute a created flow
 * @see [`F.exec`](https://utils.duplojs.dev/en/v1/api/flow/exec) To execute a created flow inside another flow
 * @see https://utils.duplojs.dev/en/v1/api/flow/create
 * 
 * @namespace F
 * 
 */
export declare function create<GenericTheFlowFunction extends TheFlowFunction>(theFunction: GenericTheFlowFunction): TheFlow<GenericTheFlowFunction>;
export type FlowInput<GenericFlow extends TheFlow> = GenericFlow extends TheFlow<infer InferredFunction> ? InferredFunction extends TheFlowFunction<infer InferredInput> ? InferredInput : never : never;
export type WrapFlow<GenericFlow extends (TheFlow | TheFlowFunction | TheFlowGenerator)> = GenericFlow extends TheFlowGenerator ? TheFlow<TheFlowFunction<unknown, GenericFlow>> : GenericFlow extends TheFlowFunction ? TheFlow<GenericFlow> : Extract<GenericFlow, TheFlow>;
export type FlowDependencies<GenericFlow extends TheFlow> = (ExtractFlowGenerator<GenericFlow> extends TheFlowGenerator<any, infer InferredEffect> ? InferredEffect extends Injection<infer InferredDependenceHandler> ? InferredDependenceHandler : never : never) extends infer InferredDependenceHandler extends DependenceHandler ? {
    [Dependence in InferredDependenceHandler as Extract<GetKindValue<typeof dependenceHandlerKind, Dependence>, string>]: ReturnType<InferredDependenceHandler>;
} : never;
export type ExtractFlowGenerator<GenericFlow extends TheFlow> = GenericFlow extends TheFlow<infer InferredFunction> ? InferredFunction extends TheFlowFunction<any, infer InferredGenerator> ? InferredGenerator : never : never;
