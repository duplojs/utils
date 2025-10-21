export type EligibleEqual = string | null | number | undefined | bigint | boolean | symbol;
export declare function equal<GenericInput extends EligibleEqual, GenericValue extends GenericInput>(value: GenericValue | GenericValue[]): (input: GenericInput) => input is NoInfer<GenericValue>;
export declare function equal<GenericInput extends EligibleEqual, GenericValue extends GenericInput>(input: GenericInput, value: GenericValue | GenericValue[]): input is GenericValue;
