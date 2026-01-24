import type { TheDate, SpoolingDate } from "./types";
declare const CreateTheDateError_base: new (params: {
    "@DuplojsUtilsError/create-the-date-error"?: unknown;
}, parentParams: readonly [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & import("../common").Kind<import("../common").KindDefinition<"create-the-date-error", unknown>, unknown> & import("../common").Kind<import("../common").KindDefinition<"@DuplojsUtilsError/create-the-date-error", unknown>, unknown>;
export declare class CreateTheDateError extends CreateTheDateError_base {
    input: string | Date | number | SpoolingDate;
    constructor(input: string | Date | number | SpoolingDate);
}
/**
 * Creates a TheDate or throws on invalid input.
 * 
 * Signature: `createOrThrow(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = 1_700_000_000_000;
 * const result = D.createOrThrow(input);
 * // result: "date1700000000000+"
 * 
 * const input2 = result;
 * const result2 = D.createOrThrow(input2);
 * // result2: "date1700000000000+"
 * 
 * const input3 = new Date("2024-06-20T12:00:00Z");
 * const result3 = D.createOrThrow(input3);
 * // result3: "date1718884800000+"
 * 
 * pipe(
 * 	input,
 * 	(value) => D.createOrThrow(value),
 * ); // result: "date1700000000000+"
 * 
 * ```
 * 
 * @remarks
 * - Throws when the input cannot be converted to TheDate.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/createOrThrow
 * 
 * @namespace D
 * 
 */
export declare function createOrThrow<GenericInput extends TheDate | Date | number>(input: GenericInput): TheDate;
export declare function createOrThrow<GenericInput extends SpoolingDate>(input: GenericInput): TheDate;
export {};
