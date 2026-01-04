import { type ObjectKey, type SimplifyTopLevel } from "../common";
import { type Adaptor } from "../common/types/adaptor";
import { type GetPropsWithValue } from "./types/getPropsWithValue";
type ComputeResultWithPickIsObject<GenericInput extends object, GenericPickValue extends Partial<Record<keyof GenericInput, boolean>>> = SimplifyTopLevel<Pick<GenericInput, Adaptor<GetPropsWithValue<GenericPickValue, true>, keyof GenericInput>> & Partial<Pick<GenericInput, Adaptor<GetPropsWithValue<GenericPickValue, boolean> | GetPropsWithValue<GenericPickValue, boolean | undefined> | GetPropsWithValue<GenericPickValue, true | undefined>, keyof GenericInput>>>>;
/**
 * Selects properties from an object.
 * 
 * **Supported call styles:**
 * - Classic: `pick(input, pickValue)` → returns a new object
 * - Curried: `pick(pickValue)` → returns a function waiting for the input
 * 
 * The `pickValue` can be a key array or a map of keys to booleans.
 * The input object is not mutated.
 * 
 * ```ts
 * O.pick(
 * 	{
 * 		name: "Ada",
 * 		age: 36,
 * 	},
 * 	["name"],
 * ); // { name: "Ada" }
 * 
 * O.pick(
 * 	{
 * 		name: "Ada",
 * 		age: 36,
 * 		active: true,
 * 	},
 * 	{
 * 		name: true,
 * 		active: true,
 * 	},
 * ); // { name: "Ada", active: true }
 * 
 * pipe(
 * 	{
 * 		role: "admin",
 * 		level: 3,
 * 	},
 * 	O.pick(["role"]),
 * ); // { role: "admin" }
 * 
 * ```
 * 
 * @see [`O.omit`](https://utils.duplojs.dev/en/v1/api/object/omit) For removing keys
 * @see https://utils.duplojs.dev/en/v1/api/object/pick
 * 
 * @namespace O
 * 
 */
export declare function pick<GenericInput extends object, const GenericPickValue extends Partial<Record<keyof GenericInput, boolean>> | readonly (keyof GenericInput)[]>(pickValue: GenericPickValue): (input: GenericInput) => GenericPickValue extends Partial<Record<keyof GenericInput, boolean>> ? ComputeResultWithPickIsObject<GenericInput, GenericPickValue> : SimplifyTopLevel<Pick<GenericInput, Adaptor<GenericPickValue, readonly ObjectKey[]>[number]>>;
export declare function pick<GenericInput extends object, const GenericPickValue extends Partial<Record<keyof GenericInput, boolean>> | readonly (keyof GenericInput)[]>(input: GenericInput, pickValue: GenericPickValue): GenericPickValue extends Partial<Record<keyof GenericInput, boolean>> ? ComputeResultWithPickIsObject<GenericInput, GenericPickValue> : SimplifyTopLevel<Pick<GenericInput, Adaptor<GenericPickValue, readonly ObjectKey[]>[number]>>;
export {};
