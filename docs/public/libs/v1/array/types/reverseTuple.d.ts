import { type AnyTuple } from "../../common/types/anyTuple";
export type ReverseTuple<GenericTuple extends AnyTuple> = GenericTuple extends readonly [infer InferredValue, ...infer InferredRest extends AnyTuple] ? [...ReverseTuple<InferredRest>, InferredValue] : GenericTuple;
