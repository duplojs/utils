import { type Adaptor, type FixDeepFunctionInfer, type AnyFunction, type SimplifyTopLevel } from "../common";
type TransformObject<GenericObjectInput extends object = object> = {
    [Prop in keyof GenericObjectInput]?: (input: GenericObjectInput[Prop]) => unknown;
};
type ComputesResult<GenericObjectInput extends object, GenericTransformObject extends TransformObject<GenericObjectInput>> = SimplifyTopLevel<Omit<GenericObjectInput, keyof GenericTransformObject> & {
    [Prop in keyof GenericTransformObject]: (ReturnType<Adaptor<GenericTransformObject[Prop], AnyFunction>> | (undefined extends GenericTransformObject[Prop] ? GenericObjectInput[Adaptor<Prop, keyof GenericObjectInput>] : never));
}>;
export declare function transformProperties<GenericObjectInput extends object, GenericTransformObject extends TransformObject<NoInfer<GenericObjectInput>>>(transformObject: TransformObject<NoInfer<GenericObjectInput>> & GenericTransformObject): (obj: GenericObjectInput) => ComputesResult<NoInfer<GenericObjectInput>, NoInfer<GenericTransformObject>>;
export declare function transformProperties<GenericObjectInput extends object, GenericTransformObject extends TransformObject<GenericObjectInput>>(obj: GenericObjectInput, transformObject: FixDeepFunctionInfer<TransformObject<GenericObjectInput>, GenericTransformObject>): ComputesResult<GenericObjectInput, GenericTransformObject>;
export {};
