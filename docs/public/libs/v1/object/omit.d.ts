import { type ObjectKey, type SimplifyTopLevel } from "../common";
import { type Adaptor } from "../common/types/adaptor";
import { type GetPropsWithValue } from "./types/getPropsWithValue";
import { type PartialKeys } from "./types";
type ComputeResultWithOmitIsObject<GenericInput extends object, GenericOmitValue extends Partial<Record<keyof GenericInput, boolean>>> = SimplifyTopLevel<Omit<GenericInput, GetPropsWithValue<GenericOmitValue, true>> extends infer InferredValue extends object ? PartialKeys<InferredValue, Adaptor<GetPropsWithValue<GenericOmitValue, boolean> | GetPropsWithValue<GenericOmitValue, boolean | undefined> | GetPropsWithValue<GenericOmitValue, true | undefined>, keyof InferredValue>> : never>;
/**
 * Removes properties from an object.
 * 
 * **Supported call styles:**
 * - Classic: `omit(input, omitValue)` → returns a new object
 * - Curried: `omit(omitValue)` → returns a function waiting for the input
 * 
 * The `omitValue` can be a key array or a map of keys to booleans.
 * The input object is not mutated.
 * 
 * @example
 * ```ts
 * O.omit(
 * 	{
 * 		name: "Ada",
 * 		age: 36,
 * 	},
 * 	["age"],
 * ); // { name: "Ada" }
 * 
 * O.omit(
 * 	{
 * 		name: "Ada",
 * 		age: 36,
 * 		active: true,
 * 	},
 * 	{
 * 		active: true,
 * 	},
 * ); // { name: "Ada", age: 36 }
 * 
 * pipe(
 * 	{
 * 		role: "admin",
 * 		level: 3,
 * 	},
 * 	O.omit(["level"]),
 * ); // { role: "admin" }
 * 
 * ```
 * 
 * @see [`O.pick`](https://utils.duplojs.dev/en/v1/api/object/pick) For selecting keys
 * @see https://utils.duplojs.dev/en/v1/api/object/omit
 * 
 * @namespace O
 * 
 */
export declare function omit<GenericInput extends object, const GenericOmitValue extends Partial<Record<keyof GenericInput, boolean>> | readonly (keyof GenericInput)[]>(omitValue: GenericOmitValue): (input: GenericInput) => GenericOmitValue extends Partial<Record<keyof GenericInput, boolean>> ? ComputeResultWithOmitIsObject<GenericInput, GenericOmitValue> : SimplifyTopLevel<Omit<GenericInput, Adaptor<GenericOmitValue, readonly ObjectKey[]>[number]>>;
export declare function omit<GenericInput extends object, const GenericOmitValue extends Partial<Record<keyof GenericInput, boolean>> | readonly (keyof GenericInput)[]>(input: GenericInput, omitValue: GenericOmitValue): GenericOmitValue extends Partial<Record<keyof GenericInput, boolean>> ? ComputeResultWithOmitIsObject<GenericInput, GenericOmitValue> : SimplifyTopLevel<Omit<GenericInput, Adaptor<GenericOmitValue, readonly ObjectKey[]>[number]>>;
export {};
