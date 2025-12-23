import { type IsUnion, type AnyTuple, type IsEqual } from "../../common";
type CreateTupleFromArray<GenericInput extends readonly any[]> = GenericInput extends AnyTuple ? GenericInput : [GenericInput[number], ...GenericInput];
export type MergeUnionTuple<GenericTuple extends AnyTuple> = IsUnion<GenericTuple> extends true ? [
    GenericTuple[0],
    ...(Extract<GenericTuple, any> extends [any, ...infer InferredRest] ? IsEqual<Extract<InferredRest, AnyTuple | []>, never> extends true ? InferredRest[number][] : (Exclude<InferredRest, readonly []> extends infer InferredValue extends readonly any[] ? IsEqual<InferredValue, never> extends true ? [] : Extract<MergeUnionTuple<CreateTupleFromArray<InferredValue>>, any> : never) : [])
] : GenericTuple;
export {};
