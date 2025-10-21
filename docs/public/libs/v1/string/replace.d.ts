export declare function replace<GenericInput extends string>(pattern: string | RegExp, replacement: string): (input: GenericInput) => string;
export declare function replace<GenericInput extends string>(input: GenericInput, pattern: string | RegExp, replacement: string): string;
