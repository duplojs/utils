import { type CreateTuple } from "./types/createTuple";
export declare function minElements<GenericArray extends readonly unknown[], GenericLength extends number>(minLength: GenericLength): (array: GenericArray) => array is [
    ...CreateTuple<GenericArray[number], GenericLength>,
    ...GenericArray[number][]
];
export declare function minElements<GenericArray extends readonly unknown[], GenericLength extends number>(array: GenericArray, minLength: GenericLength): array is [
    ...CreateTuple<GenericArray[number], GenericLength>,
    ...GenericArray[number][]
];
