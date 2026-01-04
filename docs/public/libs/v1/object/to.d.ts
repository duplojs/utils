import { type FixDeepFunctionInfer, type AnyFunction, type SimplifyTopLevel, type Adaptor } from "../common";
type ShapeObject<GenericInput extends unknown = unknown> = {
    [Prop in string]?: (input: GenericInput) => unknown;
};
type ComputesResult<GenericShapeObject extends ShapeObject<any>> = SimplifyTopLevel<{
    [Prop in keyof GenericShapeObject]: (ReturnType<Adaptor<GenericShapeObject[Prop], AnyFunction>> | (undefined extends GenericShapeObject[Prop] ? undefined : never));
}>;
/**
 * Builds an object from an input using a shape of functions.
 * 
 * **Supported call styles:**
 * - Classic: `to(input, shapeObject)` → returns a new object
 * - Curried: `to(shapeObject)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * @example
 * ```ts
 * O.to(
 * 	{
 * 		name: "Ada",
 * 		age: 36,
 * 	},
 * 	{
 * 		label: (input) => `${input.name}:${input.age}`,
 * 	},
 * ); // { label: "Ada:36" }
 * 
 * pipe(
 * 	{
 * 		name: "Ada",
 * 	},
 * 	O.to({
 * 		upper: (input) => input.name.toUpperCase(),
 * 	}),
 * ); // { upper: "ADA" }
 * 
 * O.to(
 * 	"alpha",
 * 	{
 * 		len: (input) => input.length,
 * 	},
 * ); // { len: 5 }
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/object/to
 * 
 * @namespace O
 * 
 */
export declare function to<GenericInput extends unknown, GenericShapeObject extends ShapeObject<NoInfer<GenericInput>>>(shapeObject: ShapeObject<NoInfer<GenericInput>> & GenericShapeObject): (input: GenericInput) => ComputesResult<NoInfer<GenericShapeObject>>;
export declare function to<GenericInput extends unknown, GenericShapeObject extends ShapeObject<GenericInput>>(input: GenericInput, shapeObject: FixDeepFunctionInfer<ShapeObject<GenericInput>, GenericShapeObject>): ComputesResult<GenericShapeObject>;
export {};
