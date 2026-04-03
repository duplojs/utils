import { type Kind } from "../../common";
export declare const throttlingKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsFlow/throttling", unknown>>;
export interface ThrottlingProperties<GenericValue extends unknown = unknown> {
    time: number;
    returnValue: GenericValue;
    keepLast: boolean;
}
export interface Throttling<GenericValue extends unknown = unknown> extends Kind<typeof throttlingKind.definition, ThrottlingProperties<GenericValue>> {
}
export declare function createThrottling<GenericValue extends unknown>(properties: ThrottlingProperties<GenericValue>): Throttling<GenericValue>;
