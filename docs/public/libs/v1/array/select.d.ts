import { type AnyValue } from "../common";
export interface ArraySelectSelect<GenericOutput extends unknown = unknown> {
    "-select": GenericOutput;
}
export interface ArraySelectSkip {
    "-skip": null;
}
interface ArraySelectParams<GenericInputArray extends readonly unknown[]> {
    element: GenericInputArray[number];
    index: number;
    self: GenericInputArray;
    skip(): ArraySelectSkip;
    select<GenericOutput extends AnyValue = AnyValue>(output: GenericOutput): ArraySelectSelect<GenericOutput>;
}
export declare const selectTools: Pick<ArraySelectParams<any>, "skip" | "select">;
export declare function select<GenericInput extends readonly unknown[], GenericSelect extends ArraySelectSelect>(theFunction: (params: ArraySelectParams<GenericInput>) => GenericSelect | ArraySelectSkip): (input: GenericInput) => GenericSelect["-select"][];
export declare function select<GenericInput extends readonly unknown[], GenericSelect extends ArraySelectSelect>(input: GenericInput, theFunction: (params: ArraySelectParams<GenericInput>) => GenericSelect | ArraySelectSkip): GenericSelect["-select"][];
export {};
