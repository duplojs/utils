import { type FixDeepFunctionInfer, type AnyFunction, type SimplifyTopLevel, type Adaptor } from "../common";
type ShapeObject<GenericInput extends unknown = unknown> = {
    [Prop in string]?: (input: GenericInput) => unknown;
};
type ComputesResult<GenericShapeObject extends ShapeObject<any>> = SimplifyTopLevel<{
    [Prop in keyof GenericShapeObject]: (ReturnType<Adaptor<GenericShapeObject[Prop], AnyFunction>> | (undefined extends GenericShapeObject[Prop] ? undefined : never));
}>;
export declare function to<GenericInput extends unknown, GenericShapeObject extends ShapeObject<NoInfer<GenericInput>>>(shapeObject: ShapeObject<NoInfer<GenericInput>> & GenericShapeObject): (input: GenericInput) => ComputesResult<NoInfer<GenericShapeObject>>;
export declare function to<GenericInput extends unknown, GenericShapeObject extends ShapeObject<GenericInput>>(input: GenericInput, shapeObject: FixDeepFunctionInfer<ShapeObject<GenericInput>, GenericShapeObject>): ComputesResult<GenericShapeObject>;
export {};
