import type { SimplifyTopLevel } from "../common";
export interface GroupFunctionOutput<GenericGroupName extends string = string, GenericGroupValue extends unknown = unknown> {
    group: GenericGroupName;
    value: GenericGroupValue;
}
/**
 * Creates a group output object for `group` and `asyncGroup`.
 * 
 * **Supported call styles:**
 * - Classic: `groupOutput(group, value)` → returns a group output
 * - Curried: `groupOutput(group)` → returns a function waiting for the value
 * 
 * Behavior:
 * - The returned object always has `{ group, value }`
 * - The `group` name is preserved as a string literal when possible
 * 
 * ```ts
 * G.groupOutput(
 * 	"even",
 * 	2,
 * ); // { group: "even", value: 2 }
 * 
 * pipe(
 * 	"alpha",
 * 	G.groupOutput("word"),
 * ); // { group: "word", value: "alpha" }
 * 
 * G.groupOutput(
 * 	"status",
 * 	{
 * 		ok: true,
 * 	},
 * ); // { group: "status", value: { ok: true } }
 * ```
 * 
 * @see [`G.group`](https://utils.duplojs.dev/en/v1/api/generator/group) For grouping sync iterables
 * @see [`G.asyncGroup`](https://utils.duplojs.dev/en/v1/api/generator/asyncGroup) For grouping async iterables
 * @see https://utils.duplojs.dev/en/v1/api/generator/groupOutput
 * 
 * @namespace G
 * 
 */
export declare function groupOutput<const GenericGroupName extends string, GenericGroupValue extends unknown>(group: GenericGroupName): (value: GenericGroupValue) => GroupFunctionOutput<GenericGroupName, GenericGroupValue>;
export declare function groupOutput<const GenericGroupName extends string, GenericGroupValue extends unknown>(group: GenericGroupName, value: GenericGroupValue): GroupFunctionOutput<GenericGroupName, GenericGroupValue>;
export interface GroupFunctionParams {
    index: number;
    output: typeof groupOutput;
}
export type GroupResult<GenericOutput extends GroupFunctionOutput> = SimplifyTopLevel<{
    readonly [Output in GenericOutput as Output["group"]]?: readonly [Output["value"], ...Output["value"][]];
}>;
/**
 * Groups elements from an iterable into an object by a group name.
 * 
 * **Supported call styles:**
 * - Classic: `group(iterator, theFunction)` → returns a grouped object
 * - Curried: `group(theFunction)` → returns a function waiting for the iterator
 * 
 * Behavior:
 * - The function receives `(element, { index, output })`
 * - `output` is `groupOutput` and returns `{ group, value }`
 * - The input iterator is not mutated
 * 
 * ```ts
 * G.group(
 * 	[1, 2, 3, 4],
 * 	(value, { output }) => output(value % 2 ? "odd" : "even", value),
 * );
 * // { odd: [1, 3], even: [2, 4] }
 * 
 * pipe(
 * 	new Set(["alpha", "beta", "gamma"]),
 * 	G.group((value, { index, output }) => output(
 * 		"entry",
 * 		{
 * 			index,
 * 			value,
 * 		},
 * 	)),
 * );
 * // { entry: [{ index: 0, value: "alpha" }, ...] }
 * 
 * G.group(
 * 	["apple", "pear", "plum"],
 * 	(value, { output }) => output(
 * 		value.startsWith("p") ? "startsWithP" : "other",
 * 		value.length,
 * 	),
 * );
 * // { startsWithP: [5, 4, 4] }
 * ```
 * 
 * @see [`G.groupOutput`](https://utils.duplojs.dev/en/v1/api/generator/groupOutput) For creating group outputs
 * @see [`G.asyncGroup`](https://utils.duplojs.dev/en/v1/api/generator/asyncGroup) For async iterables
 * @see https://utils.duplojs.dev/en/v1/api/generator/group
 * 
 * @namespace G
 * 
 */
export declare function group<GenericElement extends unknown, GenericOutput extends GroupFunctionOutput>(theFunction: (element: GenericElement, params: GroupFunctionParams) => GenericOutput): (iterator: Iterable<GenericElement>) => GroupResult<GenericOutput>;
export declare function group<GenericElement extends unknown, GenericOutput extends GroupFunctionOutput>(iterator: Iterable<GenericElement>, theFunction: (element: GenericElement, params: GroupFunctionParams) => GenericOutput): GroupResult<GenericOutput>;
