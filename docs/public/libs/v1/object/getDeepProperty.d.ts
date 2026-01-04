import { type EligibleEqual } from "../common";
import { type FlatObject, type GetPropsWithValueExtends } from "./types";
type ObjectProjection<GenericInput extends object> = FlatObject<GenericInput> extends infer InferredResult extends object ? Omit<Pick<InferredResult, GetPropsWithValueExtends<InferredResult, EligibleEqual>>, `${string}[${string}]${string}`> : never;
/**
 * Gets a nested property value using a path.
 * 
 * **Supported call styles:**
 * - Classic: `getDeepProperty(input, path)` → returns the value
 * - Curried: `getDeepProperty(path)` → returns a function waiting for the input
 * 
 * The path uses dot notation.
 * The input object is not mutated.
 * 
 * @example
 * ```ts
 * O.getDeepProperty(
 * 	{
 * 		user: {
 * 			name: "Ada",
 * 		},
 * 	},
 * 	"user.name",
 * ); // "Ada"
 * 
 * pipe(
 * 	{
 * 		meta: {
 * 			count: 2,
 * 		},
 * 	},
 * 	O.getDeepProperty("meta.count"),
 * ); // 2
 * 
 * O.getDeepProperty(
 * 	{
 * 		settings: {
 * 			theme: "light",
 * 		},
 * 	},
 * 	"settings.theme",
 * ); // "light"
 * 
 * ```
 * 
 * @see [`O.getProperty`](https://utils.duplojs.dev/en/v1/api/object/getProperty) For top-level keys
 * @see https://utils.duplojs.dev/en/v1/api/object/getDeepProperty
 * 
 * @namespace O
 * 
 */
export declare function getDeepProperty<GenericInput extends object, GenericObjectProjection extends ObjectProjection<GenericInput>, GenericPath extends keyof GenericObjectProjection>(path: GenericPath): (input: GenericInput) => GenericObjectProjection[GenericPath];
export declare function getDeepProperty<GenericInput extends object, GenericObjectProjection extends ObjectProjection<GenericInput>, GenericPath extends keyof GenericObjectProjection>(input: GenericInput, path: GenericPath): GenericObjectProjection[GenericPath];
export {};
