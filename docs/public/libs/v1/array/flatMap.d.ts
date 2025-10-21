interface ArrayMapParams {
    index: number;
}
export declare function flatMap<GenericArray extends readonly unknown[], GenericOutput extends unknown>(theFunction: (element: GenericArray[number], params: ArrayMapParams) => GenericOutput): (array: GenericArray) => FlatArray<GenericOutput, 1>[];
export declare function flatMap<GenericElement extends unknown, GenericOutput extends unknown>(array: readonly GenericElement[], theFunction: (element: GenericElement, params: ArrayMapParams) => GenericOutput): FlatArray<GenericOutput, 1>[];
export {};
