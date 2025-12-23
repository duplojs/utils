export type UnionToIntersection<GenericUnion extends unknown> = (GenericUnion extends any ? (_x: GenericUnion) => any : never) extends (_x: infer InferredArg) => any ? InferredArg : never;
