export interface StringReplacerParams {
    matchedValue: string;
    groups: string[];
    namedGroups?: Record<string, string>;
    offset: number;
    self: string;
}
export type StringReplacer = (params: StringReplacerParams) => string;
export declare function replace<GenericInput extends string>(pattern: string | RegExp, replacement: string | StringReplacer): (input: GenericInput) => string;
export declare function replace<GenericInput extends string>(input: GenericInput, pattern: string | RegExp, replacement: string | StringReplacer): string;
