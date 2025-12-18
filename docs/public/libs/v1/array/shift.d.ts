import { type AnyTuple } from "../common";
import { type ShiftTuple } from "./types/shiftTuple";
export declare function shift<const GenericArray extends readonly unknown[]>(array: GenericArray): GenericArray extends AnyTuple ? ShiftTuple<GenericArray> : GenericArray;
