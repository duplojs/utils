export declare function matchAll<GenericInput extends string>(pattern: RegExp): (input: GenericInput) => RegExpStringIterator<RegExpMatchArray>;
export declare function matchAll<GenericInput extends string>(input: GenericInput, pattern: RegExp): RegExpStringIterator<RegExpMatchArray>;
