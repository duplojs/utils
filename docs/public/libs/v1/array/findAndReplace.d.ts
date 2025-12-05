import { type AnyValue } from "../common";
interface ArrayFindAndSetIndexParams {
    index: number;
}
export declare function findAndReplace<GenericArray extends readonly unknown[], GenericValue extends AnyValue>(predicate: (element: GenericArray[number], params: ArrayFindAndSetIndexParams) => boolean, value: GenericValue): (input: GenericArray) => (GenericArray[number] | GenericValue)[] | undefined;
export declare function findAndReplace<GenericArray extends readonly unknown[], GenericValue extends AnyValue>(input: GenericArray, predicate: (element: GenericArray[number], params: ArrayFindAndSetIndexParams) => boolean, value: GenericValue): (GenericArray[number] | GenericValue)[] | undefined;
export {};
