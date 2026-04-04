import { type Kind } from "../../common";
export declare const debounceKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsFlow/debounce", unknown>>;
export interface DebounceProperties<GenericValue extends unknown = unknown> {
    time: number;
    returnValue: GenericValue;
}
export interface Debounce<GenericValue extends unknown = unknown> extends Kind<typeof debounceKind.definition, DebounceProperties<GenericValue>> {
}
export declare function createDebounce<GenericValue extends unknown>(properties: DebounceProperties<GenericValue>): Debounce<GenericValue>;
