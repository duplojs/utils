import type { TheDate } from "./types";
declare const InvalidTheDateError_base: new (params: {
    "@DuplojsUtilsError/invalid-the-Date-error"?: unknown;
}, parentParams: [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & import("../common").Kind<import("../common").KindDefinition<"invalid-the-Date-error", unknown>, unknown> & import("../common").Kind<import("../common").KindDefinition<"@DuplojsUtilsError/invalid-the-Date-error", unknown>, unknown>;
export declare class InvalidTheDateError extends InvalidTheDateError_base {
    theDate: TheDate;
    constructor(theDate: TheDate);
}
export declare function toTimestamp<GenericInput extends TheDate>(input: GenericInput): number;
export {};
