interface ArrayMapParams<GenericInputArray extends readonly unknown[]> {
    index: number;
    self: GenericInputArray;
}
export declare function map<GenericInput extends readonly unknown[], GenericOutput extends unknown>(theFunction: (element: GenericInput[number], params: ArrayMapParams<GenericInput>) => GenericOutput): (input: GenericInput) => GenericOutput[];
export declare function map<GenericInput extends readonly unknown[], GenericOutput extends unknown>(input: GenericInput, theFunction: (element: GenericInput[number], params: ArrayMapParams<GenericInput>) => GenericOutput): GenericOutput[];
export {};
