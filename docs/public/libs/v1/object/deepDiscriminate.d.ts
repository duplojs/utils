import { type EligibleEqual, type MaybeArray } from "../common";
import { type UnFlatObject, type FlatObject } from "./types";
import { type GetPropsWithValueExtends } from "./types/getPropsWithValueExtends";
type ObjectProjection<GenericInput extends object> = FlatObject<GenericInput> extends infer InferredResult extends object ? Omit<Pick<InferredResult, GetPropsWithValueExtends<InferredResult, EligibleEqual>>, `${string}[${string}]${string}`> : never;
/**
 * Checks a deep property value and narrows the object type.
 * 
 * **Supported call styles:**
 * - Classic: `deepDiscriminate(input, path, value)` → returns a boolean
 * - Curried: `deepDiscriminate(path, value)` → returns a function waiting for the input
 * - Classic predicate: `deepDiscriminate(input, path, value)` → narrows the object type
 * - Curried predicate: `deepDiscriminate(path, value)` → narrows the object type
 * 
 * The input object is not mutated.
 * 
 * @example
 * ```ts
 * const userObj = {
 * 	profile: {
 * 		status: "active",
 * 	},
 * };
 * 
 * if (O.deepDiscriminate(userObj, "profile.status", "active")) {
 * 	// userObj is active
 * }
 * 
 * pipe(
 * 	userObj,
 * 	when(
 * 		O.deepDiscriminate("profile.status", "disabled"),
 * 		(value) => {
 * 			// value is disabled
 * 		},
 * 	),
 * );
 * 
 * O.deepDiscriminate(
 * 	{
 * 		meta: {
 * 			level: 2,
 * 		},
 * 	},
 * 	"meta.level",
 * 	[1, 2], // or
 * ); // true
 * 
 * ```
 * 
 * @remarks
 * - Predicate overloads (type guards) narrow the output type
 * - The discriminated value can be an array, acting as an "or" list
 * 
 * @see [`O.discriminate`](https://utils.duplojs.dev/en/v1/api/object/discriminate) For top-level keys
 * @see https://utils.duplojs.dev/en/v1/api/object/deepDiscriminate
 * 
 * @namespace O
 * 
 */
export declare function deepDiscriminate<GenericInput extends object, GenericObjectProjection extends ObjectProjection<GenericInput>, GenericPath extends keyof GenericObjectProjection, GenericValue extends EligibleEqual>(path: GenericPath, value: (MaybeArray<(GenericValue & GenericObjectProjection[GenericPath])> | MaybeArray<GenericObjectProjection[GenericPath]>)): (input: GenericInput) => input is Extract<GenericInput, UnFlatObject<{
    [Prop in GenericPath]: GenericValue;
}>>;
export declare function deepDiscriminate<GenericInput extends object, GenericObjectProjection extends ObjectProjection<GenericInput>, GenericPath extends keyof GenericObjectProjection, GenericValue extends EligibleEqual>(input: GenericInput, path: GenericPath, value: (MaybeArray<(GenericValue & GenericObjectProjection[GenericPath])> | MaybeArray<GenericObjectProjection[GenericPath]>)): input is Extract<GenericInput, UnFlatObject<{
    [Prop in GenericPath]: GenericValue;
}>>;
export {};
