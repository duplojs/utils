import type { SerializedTheTime, SpoolingTime } from "./types";
import { type TheTime } from "./theTime";
declare const CreateTheTimeError_base: new (params: {
    "@DuplojsUtilsError/create-the-time-error"?: unknown;
}, parentParams: readonly [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & import("../common").Kind<import("../common").KindDefinition<"create-the-time-error", unknown>, unknown> & import("../common").Kind<import("../common").KindDefinition<"@DuplojsUtilsError/create-the-time-error", unknown>, unknown>;
export declare class CreateTheTimeError extends CreateTheTimeError_base {
    input: TheTime | number | SpoolingTime | SerializedTheTime;
    constructor(input: TheTime | number | SpoolingTime | SerializedTheTime);
}
/**
 * Creates a `TheTime` and throws when input is invalid.
 * 
 * Signature: `createTimeOrThrow(input)` → `TheTime`
 * 
 * ```ts
 * const fromNumber = D.createTimeOrThrow(90_000);
 * // fromNumber: TheTime
 * 
 * const fromSerialized = D.createTimeOrThrow("time3600000+");
 * // fromSerialized: TheTime
 * 
 * const fromSpooling = D.createTimeOrThrow({
 * 	hour: 1,
 * 	minute: 30,
 * });
 * // fromSpooling: TheTime
 * 
 * pipe(
 * 	fromNumber,
 * ```
 * 
 * @remarks
 * - Throws `CreateTheTimeError` on invalid input.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/createTimeOrThrow
 * @see https://utils.duplojs.dev/en/v1/api/date/createTime
 * 
 * @namespace D
 * 
 */
export declare function createTimeOrThrow(input: number | TheTime | SpoolingTime | SerializedTheTime): TheTime;
export {};
