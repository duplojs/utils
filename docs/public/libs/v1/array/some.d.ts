interface ArraySomeParams {
    index: number;
}
export declare function some<GenericArray extends readonly unknown[]>(predicate: (element: GenericArray[number], params: ArraySomeParams) => boolean): (array: GenericArray) => boolean;
export declare function some<GenericElement extends unknown>(array: readonly GenericElement[], predicate: (element: GenericElement, params: ArraySomeParams) => boolean): boolean;
export {};
