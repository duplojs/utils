import type { SpoolingTime, TheTime } from "./types";
declare const CreateTheTimeError_base: new (params: {
    "@DuplojsUtilsError/create-the-time-error"?: unknown;
}, parentParams: [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & import("../common").Kind<import("../common").KindDefinition<"create-the-time-error", unknown>, unknown> & import("../common").Kind<import("../common").KindDefinition<"@DuplojsUtilsError/create-the-time-error", unknown>, unknown>;
export declare class CreateTheTimeError extends CreateTheTimeError_base {
    input: TheTime | number | SpoolingTime;
    constructor(input: TheTime | number | SpoolingTime);
}
export declare function createTimeOrThrow(input: number | TheTime | SpoolingTime): TheTime;
export {};
