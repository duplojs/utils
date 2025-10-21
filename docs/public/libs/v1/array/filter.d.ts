interface ArrayFilterParams {
    index: number;
}
export declare function filter<GenericArray extends readonly unknown[], GenericOutput extends GenericArray[number]>(predicate: (item: GenericArray[number], params: ArrayFilterParams) => item is GenericOutput): (array: GenericArray) => GenericOutput[];
export declare function filter<GenericElement extends unknown, GenericOutput extends GenericElement>(array: readonly GenericElement[], predicate: (item: GenericElement, params: ArrayFilterParams) => item is GenericOutput): GenericOutput[];
export declare function filter<GenericArray extends readonly unknown[]>(predicate: (item: GenericArray[number], params: ArrayFilterParams) => boolean): (array: GenericArray) => GenericArray[number][];
export declare function filter<GenericElement extends unknown>(array: readonly GenericElement[], predicate: (item: GenericElement, params: ArrayFilterParams) => boolean): GenericElement[];
export {};
