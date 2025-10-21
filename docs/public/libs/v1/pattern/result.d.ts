import { type Kind, type WrappedValue } from "../common";
declare const patternResultKind: import("../common").KindHandler<import("../common").KindDefinition<"pattern-result", unknown>>;
export interface PatternResult<GenericValue extends unknown = any> extends Kind<typeof patternResultKind.definition>, WrappedValue<GenericValue> {
}
export declare function result<const GenericValue extends unknown>(value: GenericValue): PatternResult<GenericValue>;
export declare const isResult: <GenericInput extends unknown>(input: GenericInput) => input is Extract<GenericInput, Kind<import("../common").KindDefinition<"pattern-result", unknown>, unknown>>;
export {};
