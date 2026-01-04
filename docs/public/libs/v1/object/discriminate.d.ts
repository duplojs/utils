import { type EligibleEqual, type MaybeArray } from "../common";
/**
 * Checks a property value and narrows the object type.
 * 
 * **Supported call styles:**
 * - Classic: `discriminate(input, key, value)` → returns a boolean
 * - Curried: `discriminate(key, value)` → returns a function waiting for the input
 * - Classic predicate: `discriminate(input, key, value)` → narrows the object type
 * - Curried predicate: `discriminate(key, value)` → narrows the object type
 * 
 * The input object is not mutated.
 * 
 * @example
 * ```ts
 * const shapeObj = {
 * 	kind: "circle",
 * 	radius: 2,
 * } as {
 * 	kind: "circle";
 * 	radius: number;
 * } | {
 * 	kind: "square";
 * 	size: number;
 * };
 * 
 * if (O.discriminate(shapeObj, "kind", "circle")) {
 * 	// shapeObj is circle
 * }
 * 
 * pipe(
 * 	shapeObj,
 * 	when(
 * 		O.discriminate("kind", "square"),
 * 		(value) => {
 * 			// value is square
 * 		},
 * 	),
 * );
 * 
 * O.discriminate(
 * 	{
 * 		status: "ready",
 * 	},
 * ```
 * 
 * @remarks
 * - Predicate overloads (type guards) narrow the output type
 * - The discriminated value can be an array, acting as an "or" list
 * 
 * @see [`O.deepDiscriminate`](https://utils.duplojs.dev/en/v1/api/object/deepDiscriminate) For deep paths
 * @see https://utils.duplojs.dev/en/v1/api/object/discriminate
 * 
 * @namespace O
 * 
 */
export declare function discriminate<GenericInput extends object, GenericKey extends keyof GenericInput, GenericValue extends EligibleEqual>(key: GenericKey, value: (MaybeArray<(GenericValue & Extract<GenericInput[GenericKey], EligibleEqual>)> | MaybeArray<Extract<GenericInput[GenericKey], EligibleEqual>>)): (input: GenericInput) => input is Extract<GenericInput, {
    [Prop in GenericKey]: GenericValue;
}>;
export declare function discriminate<GenericInput extends object, GenericKey extends keyof GenericInput, GenericValue extends EligibleEqual>(input: GenericInput, key: GenericKey, value: (MaybeArray<(GenericValue & Extract<GenericInput[GenericKey], EligibleEqual>)> | MaybeArray<Extract<GenericInput[GenericKey], EligibleEqual>>)): input is Extract<GenericInput, {
    [Prop in GenericKey]: GenericValue;
}>;
