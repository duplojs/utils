interface ArrayEveryParams {
    index: number;
}
export declare function every<GenericArray extends readonly unknown[]>(predicate: (element: GenericArray[number], params: ArrayEveryParams) => boolean): (array: GenericArray) => boolean;
export declare function every<GenericElement extends unknown>(array: readonly GenericElement[], predicate: (element: GenericElement, params: ArrayEveryParams) => boolean): boolean;
export {};
