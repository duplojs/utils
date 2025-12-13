interface ArraySomeParams<GenericInputArray extends readonly unknown[]> {
    index: number;
    self: GenericInputArray;
}
export declare function some<GenericInput extends readonly unknown[]>(predicate: (element: GenericInput[number], params: ArraySomeParams<GenericInput>) => boolean): (input: GenericInput) => boolean;
export declare function some<GenericInput extends readonly unknown[]>(input: GenericInput, predicate: (element: GenericInput[number], params: ArraySomeParams<GenericInput>) => boolean): boolean;
export {};
