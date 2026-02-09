import type { MaybePromise } from "../common";
import { type GroupFunctionOutput, type GroupFunctionParams, type GroupResult } from "./group";
/**
 * Groups elements from an async iterable into an object by a group name.
 * 
 * **Supported call styles:**
 * - Classic: `asyncGroup(asyncIterator, theFunction)` → returns a promise of grouped object
 * - Curried: `asyncGroup(theFunction)` → returns a function waiting for the async iterator
 * 
 * Behavior:
 * - The function receives `(element, { index, output })`
 * - `theFunction` can return a value or a promise of value
 * - `output` is `groupOutput` and returns `{ group, value }`
 * - The input async iterator is not mutated
 * 
 * ```ts
 * const asyncValues = (async function *() {
 * 	yield Promise.resolve(1);
 * 	yield 2;
 * 	yield 3;
 * 	yield 4;
 * })();
 * 
 * await G.asyncGroup(
 * 	asyncValues,
 * 	(value, { output }) => output(value % 2 ? "odd" : "even", value),
 * );
 * // { odd: [1, 3], even: [2, 4] }
 * ```
 * 
 * @see [`G.group`](https://utils.duplojs.dev/en/v1/api/generator/group) For sync iterables
 * @see [`G.groupOutput`](https://utils.duplojs.dev/en/v1/api/generator/groupOutput) For creating group outputs
 * @see https://utils.duplojs.dev/en/v1/api/generator/asyncGroup
 * 
 * @namespace G
 * 
 */
export declare function asyncGroup<GenericElement extends unknown, GenericOutput extends GroupFunctionOutput>(theFunction: (element: GenericElement, params: GroupFunctionParams) => MaybePromise<GenericOutput>): (asyncIterator: AsyncIterable<GenericElement>) => Promise<GroupResult<GenericOutput>>;
export declare function asyncGroup<GenericElement extends unknown, GenericOutput extends GroupFunctionOutput>(asyncIterator: AsyncIterable<GenericElement>, theFunction: (element: GenericElement, params: GroupFunctionParams) => MaybePromise<GenericOutput>): Promise<GroupResult<GenericOutput>>;
