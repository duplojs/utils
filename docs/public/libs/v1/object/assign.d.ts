import { type AnyObject } from "../common/types/anyObject";
import { type AssignObjects } from "./types";
/**
 * Assigns properties from one object to another.
 * 
 * **Supported call styles:**
 * - Classic: `assign(input, value)` → returns a new object
 * - Curried: `assign(value)` → returns a function waiting for the input
 * 
 * The input object is not mutated.
 * 
 * @example
 * ```ts
 * O.assign(
 * 	{
 * 		name: "Alice",
 * 		age: 30,
 * 	},
 * 	{
 * 		age: 31,
 * 		city: "Paris",
 * 	},
 * ); // { name: "Alice", age: 31, city: "Paris" }
 * 
 * pipe(
 * 	{
 * 		name: "William",
 * 		age: 24,
 * 	},
 * 	O.assign({
 * 		age: 25,
 * 		role: "client",
 * 	}),
 * ); // // { name: "William", age: 25, role: "client" }
 * 
 * ```
 * 
 * @see [`O.override`](https://utils.duplojs.dev/en/v1/api/object/override) For skipping undefined values
 * @see https://utils.duplojs.dev/en/v1/api/object/assign
 * 
 * @namespace O
 * 
 */
export declare function assign<GenericInput extends object, GenericValue extends Partial<Record<keyof GenericInput, unknown>> & AnyObject>(value: GenericValue): (input: GenericInput) => AssignObjects<GenericInput, GenericValue>;
export declare function assign<GenericInput extends object, GenericValue extends Partial<Record<keyof GenericInput, unknown>> & AnyObject>(input: GenericInput, value: GenericValue): AssignObjects<GenericInput, GenericValue>;
