import { type SymbolKind } from "../../common";
export type RemoveKind<GenericArray extends readonly unknown[]> = GenericArray extends infer InferredArray & Pick<GenericArray, Extract<SymbolKind, keyof GenericArray>> ? InferredArray : GenericArray;
