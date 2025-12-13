interface ArrayFilterParams<GenericInputArray extends readonly unknown[]> {
    index: number;
    self: GenericInputArray;
}
export declare function filter<GenericInput extends readonly unknown[], GenericOutput extends GenericInput[number]>(predicate: (item: GenericInput[number], params: ArrayFilterParams<GenericInput>) => item is GenericOutput): (input: GenericInput) => GenericOutput[];
export declare function filter<GenericInput extends readonly unknown[], GenericOutput extends GenericInput[number]>(input: GenericInput, predicate: (item: GenericInput[number], params: ArrayFilterParams<GenericInput>) => item is GenericOutput): GenericOutput[];
export declare function filter<GenericInput extends readonly unknown[]>(predicate: (item: GenericInput[number], params: ArrayFilterParams<GenericInput>) => boolean): (input: GenericInput) => GenericInput[number][];
export declare function filter<GenericInput extends readonly unknown[]>(input: GenericInput, predicate: (item: GenericInput[number], params: ArrayFilterParams<GenericInput>) => boolean): GenericInput[number][];
export {};
