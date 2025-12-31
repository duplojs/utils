import { type CreateTuple } from "./types";
export declare function lengthEqual<GenericArray extends readonly unknown[], GenericLength extends number>(length: GenericLength): (array: GenericArray) => array is CreateTuple<GenericArray[number], GenericLength>;
export declare function lengthEqual<GenericArray extends readonly unknown[], GenericLength extends number>(array: GenericArray, length: GenericLength): array is CreateTuple<GenericArray[number], GenericLength>;
