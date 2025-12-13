interface ArrayEveryParams<GenericInputArray extends readonly unknown[]> {
    index: number;
    self: GenericInputArray;
}
export declare function every<GenericInput extends readonly unknown[]>(predicate: (element: GenericInput[number], params: ArrayEveryParams<GenericInput>) => boolean): (input: GenericInput) => boolean;
export declare function every<GenericInput extends readonly unknown[]>(input: GenericInput, predicate: (element: GenericInput[number], params: ArrayEveryParams<GenericInput>) => boolean): boolean;
export {};
