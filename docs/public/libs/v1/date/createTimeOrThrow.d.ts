import type { SpoolingTime, TheTime } from "./types";
declare const CreateTheTimeError_base: new (params: {
    "@DuplojsUtilsError/create-the-time-error"?: unknown;
}, parentParams: readonly [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & import("../common").Kind<import("../common").KindDefinition<"create-the-time-error", unknown>, unknown> & import("../common").Kind<import("../common").KindDefinition<"@DuplojsUtilsError/create-the-time-error", unknown>, unknown>;
export declare class CreateTheTimeError extends CreateTheTimeError_base {
    input: TheTime | number | SpoolingTime;
    constructor(input: TheTime | number | SpoolingTime);
}
/**
 * Creates a TheTime or throws on invalid input.
 * 
 * Signature: `createTimeOrThrow(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = 90_000;
 * const result = D.createTimeOrThrow(input);
 * // result: "time90000+"
 * 
 * const input2 = "time3600000+";
 * const result2 = D.createTimeOrThrow(input2);
 * // result2: "time3600000+"
 * 
 * const input3 = {
 * 	hour: 1,
 * 	minute: 30,
 * };
 * const result3 = D.createTimeOrThrow(input3);
 * // result3: "time5400000+"
 * 
 * pipe(
 * 	input,
 * ```
 * 
 * @remarks
 * - Throws when the input cannot be converted to TheTime.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/createTimeOrThrow
 * 
 * @namespace D
 * 
 */
export declare function createTimeOrThrow(input: number | TheTime | SpoolingTime): TheTime;
export {};
