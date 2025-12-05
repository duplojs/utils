interface ArrayFindParams {
    index: number;
}
export declare function find<GenericArray extends readonly unknown[], GenericOutput extends GenericArray[number]>(predicate: (element: GenericArray[number], params: ArrayFindParams) => element is GenericOutput): (array: GenericArray) => GenericOutput | undefined;
export declare function find<GenericElement extends unknown, GenericOutput extends GenericElement>(array: readonly GenericElement[], predicate: (element: GenericElement, params: ArrayFindParams) => element is GenericOutput): GenericOutput | undefined;
export declare function find<GenericArray extends readonly unknown[]>(predicate: (element: GenericArray[number], params: ArrayFindParams) => boolean): (array: GenericArray) => GenericArray[number] | undefined;
export declare function find<GenericElement extends unknown>(array: readonly GenericElement[], predicate: (element: GenericElement, params: ArrayFindParams) => boolean): GenericElement | undefined;
export {};
