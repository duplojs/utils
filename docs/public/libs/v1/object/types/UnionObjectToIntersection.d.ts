import { type UnionToIntersection } from "../../common";
export type UnionObjectToIntersection<GenericValue extends object> = UnionToIntersection<GenericValue> extends infer InferredObject extends object ? InferredObject : never;
