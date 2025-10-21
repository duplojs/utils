export declare function match<GenericInput extends string>(pattern: string | RegExp): (input: GenericInput) => RegExpMatchArray | undefined;
export declare function match<GenericInput extends string>(input: GenericInput, pattern: string | RegExp): RegExpMatchArray | undefined;
