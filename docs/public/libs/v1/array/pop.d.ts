import { type AnyTuple } from "../common";
import { type PopTuple } from "./types";
export declare function pop<const GenericArray extends readonly unknown[]>(array: GenericArray): GenericArray extends AnyTuple ? PopTuple<GenericArray> : GenericArray;
