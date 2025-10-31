export declare function override<GenericInput extends object>(value: Partial<NoInfer<GenericInput>>): (input: GenericInput) => GenericInput;
export declare function override<GenericInput extends object>(input: GenericInput, value: Partial<NoInfer<GenericInput>>): GenericInput;
