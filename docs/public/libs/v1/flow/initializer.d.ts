import { type AnyFunction, type IsExtends, type Or } from "../common";
import { type RequireAtLeastOne } from "../object";
import { type Defer, type Finalizer } from "./theFlow";
export interface CreateInitializerParams<GenericOutput extends unknown = unknown> {
    defer?(output: Awaited<GenericOutput>): unknown;
    finalizer?(output: Awaited<GenericOutput>): unknown;
}
export type Initializer<GenericArgs extends unknown[], GenericOutput extends unknown, GenericParams extends CreateInitializerParams<GenericOutput>> = Extract<(...args: GenericArgs) => (((GenericParams["finalizer"] extends AnyFunction ? Finalizer<ReturnType<GenericParams["finalizer"]>> : never) | (GenericParams["defer"] extends AnyFunction ? Defer<ReturnType<GenericParams["defer"]>> : never)) extends infer InferredEffect ? (Generator<InferredEffect, Awaited<GenericOutput>> | (Or<[
    IsExtends<GenericOutput, Promise<unknown>>,
    IsExtends<InferredEffect, Finalizer<Promise<unknown>>>,
    IsExtends<InferredEffect, Defer<Promise<unknown>>>
]> extends true ? AsyncGenerator<InferredEffect, Awaited<GenericOutput>> : never)) : never), any>;
/**
 * Creates an initializer that returns a value and automatically registers flow cleanup effects.
 * 
 * **Supported call styles:**
 * - Classic: `createInitializer(initializer, params)` -> returns a function that can be yielded inside a flow
 * 
 * `createInitializer` wraps an initializer function and turns its result into a flow-friendly generator.
 * Depending on the provided options, it can register a `defer` callback, a `finalizer` callback, or both, using the produced value.
 * The returned initializer can then be executed inside `F.run(...)` like any other flow generator.
 * 
 * ```ts
 * const userInitializer = F.createInitializer(
 * 	(name: string) => ({ name }),
 * 	{ defer: (user) => void console.log(`close:${user.name}`) },
 * );
 * 
 * F.run(
 * 	function *() {
 * 		return yield *userInitializer("Ada");
 * 	},
 * ); // { name: "Ada" }
 * 
 * const finalizerLogs: string[] = [];
 * const tokenInitializer = F.createInitializer(
 * 	(id: number) => `token-${id}`,
 * 	{ finalizer: (token) => finalizerLogs.push(token) },
 * );
 * 
 * F.run(
 * 	function *() {
 * 		return yield *tokenInitializer(42);
 * 	},
 * ); // "token-42"
 * 
 * const asyncInitializer = F.createInitializer(
 * 	(name: string) => Promise.resolve({
 * 		name,
 * 		ready: true,
 * 	}),
 * 	{ defer: (user) => void console.log(`async:${user.name}`) },
 * );
 * 
 * void await F.run(
 * 	async function *() {
 * 		const value = yield *asyncInitializer("Linus");
 * 		// Promise<{ name: string; ready: true }>
 * 
 * 		return;
 * 	},
 * );
 * ```
 * 
 * @remarks
 * - `createInitializer` is useful when a setup step should also declare matching cleanup logic
 * 
 * @see [`F.defer`](https://utils.duplojs.dev/en/v1/api/flow/defer) For cleanup callbacks
 * @see [`F.finalizer`](https://utils.duplojs.dev/en/v1/api/flow/finalizer) For final callbacks
 * @see https://utils.duplojs.dev/en/v1/api/flow/createInitializer
 * 
 * @namespace F
 * 
 */
export declare function createInitializer<GenericArgs extends unknown[], GenericOutput extends unknown, GenericParams extends CreateInitializerParams<GenericOutput>>(initializer: (...args: GenericArgs) => GenericOutput, params: GenericParams & RequireAtLeastOne<GenericParams, keyof CreateInitializerParams>): Initializer<GenericArgs, GenericOutput, GenericParams>;
