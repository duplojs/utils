interface ArrayFindLastIndexParams {
    index: number;
}
export declare function findLastIndex<GenericArray extends readonly unknown[]>(predicate: (element: GenericArray[number], params: ArrayFindLastIndexParams) => boolean): (array: GenericArray) => number | undefined;
export declare function findLastIndex<GenericElement extends unknown>(array: readonly GenericElement[], predicate: (element: GenericElement, params: ArrayFindLastIndexParams) => boolean): number | undefined;
export {};
