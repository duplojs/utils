import { type AnyTuple } from "../../common";
export declare function first<GenericArray extends readonly unknown[]>(array: GenericArray): GenericArray extends AnyTuple ? GenericArray[0] : GenericArray[number] | undefined;
