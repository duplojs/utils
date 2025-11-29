import type { Split } from "./types/split";
interface StringSplitParams<GenericLimit extends number> {
    limit: GenericLimit;
}
export declare function split<GenericString extends string, GenericSeparator extends string>(separator: GenericSeparator | RegExp): (input: GenericString) => Split<GenericString, GenericSeparator>;
export declare function split<GenericString extends string, GenericSeparator extends string, GenericLimit extends number>(input: GenericString, separator: GenericSeparator | RegExp, params?: StringSplitParams<GenericLimit>): Split<GenericString, GenericSeparator, GenericLimit>;
export {};
