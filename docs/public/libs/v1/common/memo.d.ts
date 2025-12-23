import { type AnyValue } from "./types";
export interface Memoized<GenericValue extends unknown> {
    readonly value: GenericValue;
}
export declare function memo<GenericOutput extends AnyValue>(theFunction: () => GenericOutput): Memoized<GenericOutput>;
