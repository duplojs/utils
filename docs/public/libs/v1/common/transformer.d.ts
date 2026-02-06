import type { GetPropsWithValueExtends } from "../object/types";
import type { Adaptor, AnyFunction, IsEqual, NeverCoalescing, Or, UnionToIntersection } from "./types";
export type Transformer<GenericValue extends unknown, GenericMethodName extends string> = GenericValue extends Record<GenericMethodName, () => unknown> ? ReturnType<GenericValue[GenericMethodName]> : GenericValue extends readonly [infer InferredFirst, ...infer InferredRest] ? [
    Transformer<InferredFirst, GenericMethodName>,
    ...Adaptor<Transformer<InferredRest, GenericMethodName>, readonly any[]>
] : GenericValue extends readonly [] ? [] : GenericValue extends readonly any[] ? Transformer<GenericValue[number], GenericMethodName>[] : GenericValue extends string ? GenericValue : GenericValue extends Record<number, unknown> ? {
    [Prop in keyof GenericValue]: Transformer<GenericValue[Prop], GenericMethodName>;
} : GenericValue;
declare const SymbolTransformError: unique symbol;
export type CheckTransformArgument<GenericValue extends unknown, GenericMethodName extends string = string> = NeverCoalescing<GenericValue extends any ? (Or<[
    IsEqual<GenericValue, unknown>,
    IsEqual<GenericValue, never>,
    IsEqual<GenericValue, object>,
    IsEqual<GenericValue, any>,
    IsEqual<GenericMethodName, string>
]> extends true ? {
    [SymbolTransformError]: "Input contain an indeterminate value.";
} : GenericValue extends Record<GenericMethodName, () => unknown> ? unknown : GenericValue extends Record<GenericMethodName, AnyFunction> ? {
    [SymbolTransformError]: `A method ${GenericMethodName} in input have an argument.`;
} : GenericValue extends readonly [infer InferredFirst, ...infer InferredRest] ? (CheckTransformArgument<InferredFirst, GenericMethodName> & CheckTransformArgument<InferredRest, GenericMethodName>) : GenericValue extends readonly [] ? unknown : GenericValue extends string ? unknown : GenericValue extends readonly (infer InferredValue)[] ? CheckTransformArgument<InferredValue, GenericMethodName> : GenericValue extends Record<number, unknown> ? {
    [Prop in keyof GenericValue]: CheckTransformArgument<GenericValue[Prop], GenericMethodName>;
} extends infer InferredResult extends object ? UnionToIntersection<NeverCoalescing<InferredResult[GetPropsWithValueExtends<InferredResult, object>], unknown>> : never : unknown) extends infer InferredResult ? IsEqual<InferredResult, unknown> extends true ? never : InferredResult : never : never, unknown>;
export declare function transformer<GenericInput extends unknown, GenericMethodName extends string>(input: GenericInput & CheckTransformArgument<GenericInput, GenericMethodName>, methodName: GenericMethodName): Transformer<GenericInput, GenericMethodName>;
export type TransformerFunction<GenericMethodName extends string = string> = <GenericInput extends unknown>(input: GenericInput) => Transformer<GenericInput, GenericMethodName>;
/**
 * Creates a recursive transformer function based on a method name.
 * 
 * Signature: `createTransformer(methodName)` → `TransformerFunction`
 * 
 * The returned function walks through nested objects and arrays, and calls `methodName()` on values that implement it.
 * 
 * ```ts
 * const input = {
 * 	date: D.create("2024-01-01"),
 * 	duration: D.createTime(90, "minute"),
 * 	list: [D.create("2024-01-02")],
 * };
 * 
 * const nativeValues = toNative(input);
 * // nativeValues: { date: Date; duration: number; list: Date[] }
 * 
 * const jsonValues = toJSON(input);
 * // jsonValues: { date: SerializedTheDate; duration: SerializedTheTime; list: SerializedTheDate[] }
 * 
 * const toStringTree = createTransformer("toString");
 * const stringValues = toStringTree(input);
 * // stringValues: string-based recursive projection
 * ```
 * 
 * @remarks
 * - Two default transformers are provided out of the box: `toNative` and `toJSON`.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/createTransformer
 * 
 * @namespace C
 * 
 */
export declare function createTransformer<GenericMethodName extends string>(methodName: GenericMethodName): TransformerFunction<GenericMethodName>;
export declare const toNative: TransformerFunction<"toNative">;
export declare const toJSON: TransformerFunction<"toJSON">;
export {};
