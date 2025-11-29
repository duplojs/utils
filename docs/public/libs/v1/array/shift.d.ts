import { type AnyTuple } from "../common";
import { type ShiftTuple } from "../array/types/shiftTuple";
export declare function shift<const GenericArray extends readonly unknown[]>(array: GenericArray): GenericArray extends AnyTuple ? ShiftTuple<GenericArray> : GenericArray;
