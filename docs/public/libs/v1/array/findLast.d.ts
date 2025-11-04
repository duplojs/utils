interface ArrayFindLastParams {
    index: number;
}
export declare function findLast<GenericArray extends readonly unknown[], GenericOutput extends GenericArray[number]>(predicate: (element: GenericArray[number], params: ArrayFindLastParams) => element is GenericOutput): (input: GenericArray) => GenericOutput | undefined;
export declare function findLast<GenericElement extends unknown, GenericOutput extends GenericElement>(input: readonly GenericElement[], predicate: (element: GenericElement, params: ArrayFindLastParams) => element is GenericOutput): GenericOutput | undefined;
export declare function findLast<GenericArray extends readonly unknown[]>(predicate: (element: GenericArray[number], params: ArrayFindLastParams) => boolean): (input: GenericArray) => GenericArray[number] | undefined;
export declare function findLast<GenericElement extends unknown>(input: readonly GenericElement[], predicate: (element: GenericElement, params: ArrayFindLastParams) => boolean): GenericElement | undefined;
export {};
