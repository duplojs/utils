export declare function isIn<GenericInput extends string, GenericValue extends GenericInput>(array: readonly GenericValue[]): (input: GenericInput) => input is Extract<GenericInput, GenericValue>;
export declare function isIn<GenericInput extends string, GenericValue extends GenericInput>(input: GenericInput, array: readonly GenericValue[]): input is Extract<GenericInput, GenericValue>;
