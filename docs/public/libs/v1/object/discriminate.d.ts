import { type EligibleEqual, type MaybeArray } from "../common";
export declare function discriminate<GenericInput extends object, GenericKey extends keyof GenericInput, GenericValue extends EligibleEqual>(key: GenericKey, value: (MaybeArray<(GenericValue & Extract<GenericInput[GenericKey], EligibleEqual>)> | MaybeArray<Extract<GenericInput[GenericKey], EligibleEqual>>)): (input: GenericInput) => input is Extract<GenericInput, {
    [Prop in GenericKey]: GenericValue;
}>;
export declare function discriminate<GenericInput extends object, GenericKey extends keyof GenericInput, GenericValue extends EligibleEqual>(input: GenericInput, key: GenericKey, value: (MaybeArray<(GenericValue & Extract<GenericInput[GenericKey], EligibleEqual>)> | MaybeArray<Extract<GenericInput[GenericKey], EligibleEqual>>)): input is Extract<GenericInput, {
    [Prop in GenericKey]: GenericValue;
}>;
