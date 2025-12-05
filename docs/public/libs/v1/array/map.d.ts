interface ArrayMapParams {
    index: number;
}
export declare function map<GenericArray extends readonly unknown[], GenericOutput extends unknown>(theFunction: (element: GenericArray[number], params: ArrayMapParams) => GenericOutput): (array: GenericArray) => GenericOutput[];
export declare function map<GenericElement extends unknown, GenericOutput extends unknown>(array: readonly GenericElement[], theFunction: (element: GenericElement, params: ArrayMapParams) => GenericOutput): GenericOutput[];
export {};
