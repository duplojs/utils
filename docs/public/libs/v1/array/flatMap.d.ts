interface ArrayFlatMapParams<GenericInputArray extends readonly unknown[]> {
    index: number;
    self: GenericInputArray;
}
export declare function flatMap<GenericInput extends readonly unknown[], GenericOutput extends unknown>(theFunction: (element: GenericInput[number], params: ArrayFlatMapParams<GenericInput>) => GenericOutput): (input: GenericInput) => FlatArray<GenericOutput, 1>[];
export declare function flatMap<GenericInput extends readonly unknown[], GenericOutput extends unknown>(input: GenericInput, theFunction: (element: GenericInput[number], params: ArrayFlatMapParams<GenericInput>) => GenericOutput): FlatArray<GenericOutput, 1>[];
export {};
