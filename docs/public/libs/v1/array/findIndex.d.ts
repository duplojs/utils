interface ArrayFindIndexParams {
    index: number;
}
export declare function findIndex<GenericArray extends readonly unknown[]>(predicate: (element: GenericArray[number], params: ArrayFindIndexParams) => boolean): (array: GenericArray) => number | undefined;
export declare function findIndex<GenericElement extends unknown>(array: readonly GenericElement[], predicate: (element: GenericElement, params: ArrayFindIndexParams) => boolean): number | undefined;
export {};
