import { type Adaptor, type FixDeepFunctionInfer, type AnyFunction, type SimplifyTopLevel } from "../common";
type TransformObject<GenericObjectInput extends object = object> = {
    [Prop in keyof GenericObjectInput]?: (input: GenericObjectInput[Prop]) => unknown;
};
type ComputesResult<GenericObjectInput extends object, GenericTransformObject extends TransformObject<GenericObjectInput>> = SimplifyTopLevel<Omit<GenericObjectInput, keyof GenericTransformObject> & {
    [Prop in keyof GenericTransformObject]: (ReturnType<Adaptor<GenericTransformObject[Prop], AnyFunction>> | (undefined extends GenericTransformObject[Prop] ? GenericObjectInput[Adaptor<Prop, keyof GenericObjectInput>] : never));
}>;
/**
 * Transforms multiple object properties.
 * 
 * **Supported call styles:**
 * - Classic: `transformProperties(obj, transformObject)` → returns a new object
 * - Curried: `transformProperties(transformObject)` → returns a function waiting for the object
 * 
 * The input object is not mutated.
 * 
 * @example
 * ```ts
 * O.transformProperties(
 * 	{
 * 		count: 2,
 * 		label: "item",
 * 	},
 * 	{
 * 		count: (value) => value + 1,
 * 		label: (value) => value.toUpperCase(),
 * 	},
 * ); // { count: 3, label: "ITEM" }
 * 
 * pipe(
 * 	{
 * 		name: "Ada",
 * 		age: 36,
 * 	},
 * 	O.transformProperties({
 * 		age: (value) => value + 1,
 * 	}),
 * ); // { name: "Ada", age: 37 }
 * 
 * O.transformProperties(
 * 	{
 * 		active: true,
 * 	},
 * 	{},
 * ); // { active: true }
 * 
 * ```
 * 
 * @see [`O.transformProperty`](https://utils.duplojs.dev/en/v1/api/object/transformProperty) For a single key
 * @see https://utils.duplojs.dev/en/v1/api/object/transformProperties
 * 
 * @namespace O
 * 
 */
export declare function transformProperties<GenericObjectInput extends object, GenericTransformObject extends TransformObject<NoInfer<GenericObjectInput>>>(transformObject: TransformObject<NoInfer<GenericObjectInput>> & GenericTransformObject): (obj: GenericObjectInput) => ComputesResult<NoInfer<GenericObjectInput>, NoInfer<GenericTransformObject>>;
export declare function transformProperties<GenericObjectInput extends object, GenericTransformObject extends TransformObject<GenericObjectInput>>(obj: GenericObjectInput, transformObject: FixDeepFunctionInfer<TransformObject<GenericObjectInput>, GenericTransformObject>): ComputesResult<GenericObjectInput, GenericTransformObject>;
export {};
