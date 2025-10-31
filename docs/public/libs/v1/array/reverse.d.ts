import { type AnyTuple } from "../common/types/anyTuple";
import { type ReverseTuple } from ".";
export declare function reverse<GenericArray extends readonly unknown[]>(array: GenericArray): GenericArray extends AnyTuple ? ReverseTuple<GenericArray> : GenericArray;
