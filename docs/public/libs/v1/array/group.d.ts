import { type SimplifyTopLevel } from "../common/types/simplifyTopLevel";
export interface ArrayGroupFunctionOutput<GenericGroupName extends string = string, GenericGroupValue extends unknown = unknown> {
    group: GenericGroupName;
    value: GenericGroupValue;
}
/**
 * Creates a group output object for `group`.
 * 
 * **Supported call styles:**
 * - Classic: `groupOutput(group, value)` → returns a group output
 * - Curried: `groupOutput(group)` → returns a function waiting for the value
 * 

 * ```ts
 * A.groupOutput(
 * 	"even",
 * 	2,
 * ); // { group: "even", value: 2 }
 * 
 * pipe(
 * 	3,
 * 	A.groupOutput("odd"),
 * ); // { group: "odd", value: 3 }
 * 
 * A.groupOutput(
 * 	"status",
 * 	true,
 * ); // { group: "status", value: true }
 * 
 * ```
 * 
 * @see [`A.group`](https://utils.duplojs.dev/en/v1/api/array/group) For grouping arrays
 * @see https://utils.duplojs.dev/en/v1/api/array/groupOutput
 * 
 * @namespace A
 * 
 */
export declare function groupOutput<GenericGroupValue extends unknown, GenericGroupName extends string>(group: GenericGroupName): (value: GenericGroupValue) => ArrayGroupFunctionOutput<GenericGroupName, GenericGroupValue>;
export declare function groupOutput<GenericGroupValue extends unknown, GenericGroupName extends string>(group: GenericGroupName, value: GenericGroupValue): ArrayGroupFunctionOutput<GenericGroupName, GenericGroupValue>;
export interface ArrayGroupFunctionParams {
    index: number;
    output: typeof groupOutput;
}
export type ArrayGroupResult<GenericOutput extends ArrayGroupFunctionOutput> = SimplifyTopLevel<{
    [Output in GenericOutput as Output["group"]]?: Output["value"][];
}>;
/**
 * Groups elements into an object by a group name.
 * 
 * **Supported call styles:**
 * - Classic: `group(array, theFunction)` → returns a grouped object
 * - Curried: `group(theFunction)` → returns a function waiting for the array
 * 
 * The function receives `(element, { index, output })`, where `output` is `groupOutput`.
 * The input array is not mutated.
 * 

 * ```ts
 * A.group(
 * 	[1, 2, 3],
 * 	(value, { output }) => output(value % 2 ? "odd" : "even", value),
 * );
 * // { even: [2], odd: [1, 3] }
 * 
 * pipe(
 * 	["alpha", "beta"],
 * 	A.group((value, { output }) => output("len", value.length)),
 * ); // { len: [5, 4] }
 * 
 * A.group(
 * 	[true, false],
 * 	(_value, { output }) => output("flag", true),
 * );
 * // { flag: [true, true] }
 * 
 * ```
 * 
 * @see [`A.groupOutput`](https://utils.duplojs.dev/en/v1/api/array/groupOutput) For creating group outputs
 * @see https://utils.duplojs.dev/en/v1/api/array/group
 * 
 * @namespace A
 * 
 */
export declare function group<GenericArray extends readonly unknown[], GenericOutput extends ArrayGroupFunctionOutput>(theFunction: (element: GenericArray[number], params: ArrayGroupFunctionParams) => GenericOutput): (array: GenericArray) => ArrayGroupResult<GenericOutput>;
export declare function group<GenericElement extends unknown, GenericOutput extends ArrayGroupFunctionOutput>(array: readonly GenericElement[], theFunction: (element: GenericElement, params: ArrayGroupFunctionParams) => GenericOutput): ArrayGroupResult<GenericOutput>;
