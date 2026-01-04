/**
 * Overrides object properties, ignoring undefined values.
 * 
 * **Supported call styles:**
 * - Classic: `override(input, value)` → returns a new object
 * - Curried: `override(value)` → returns a function waiting for the input
 * 
 * The input object is not mutated.
 * 
 * @example
 * ```ts
 * O.override(
 * 	{
 * 		name: "Ada",
 * 		age: 36,
 * 	},
 * 	{
 * 		age: undefined,
 * 	},
 * ); // { name: "Ada", age: 36 }
 * 
 * pipe(
 * 	{
 * 		count: 1,
 * 	},
 * 	O.override({
 * 		count: 2,
 * 	}),
 * ); // { count: 2 }
 * 
 * O.override(
 * 	{
 * 		active: true,
 * 	},
 * 	{
 * 		active: false,
 * 	},
 * ); // { active: false }
 * 
 * ```
 * 
 * @remarks
 * - Properties with `undefined` are not applied
 * 
 * @see [`O.assign`](https://utils.duplojs.dev/en/v1/api/object/assign) For direct assignment
 * @see https://utils.duplojs.dev/en/v1/api/object/override
 * 
 * @namespace O
 * 
 */
export declare function override<GenericInput extends object>(value: Partial<NoInfer<GenericInput>>): (input: GenericInput) => GenericInput;
export declare function override<GenericInput extends object>(input: GenericInput, value: Partial<NoInfer<GenericInput>>): GenericInput;
