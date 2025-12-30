import { type AnyTuple } from "../common/types/anyTuple";
import { type JoinTuple } from "./types";
export declare function join<GenericArray extends readonly string[], GenericSeparator extends string>(separator: GenericSeparator): (array: GenericArray) => GenericArray extends AnyTuple ? JoinTuple<GenericArray, GenericSeparator> : string;
export declare function join<GenericArray extends readonly string[], GenericSeparator extends string>(array: GenericArray, separator: GenericSeparator): GenericArray extends AnyTuple ? JoinTuple<GenericArray, GenericSeparator> : string;
