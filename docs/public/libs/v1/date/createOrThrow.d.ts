import type { SerializedTheDate, SpoolingDate } from "./types";
import type { TheDate } from "./theDate";
declare const CreateTheDateError_base: new (params: {
    "@DuplojsUtilsError/create-the-date-error"?: unknown;
}, parentParams: readonly [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & import("../common").Kind<import("../common").KindDefinition<"create-the-date-error", unknown>, unknown> & import("../common").Kind<import("../common").KindDefinition<"@DuplojsUtilsError/create-the-date-error", unknown>, unknown>;
export declare class CreateTheDateError extends CreateTheDateError_base {
    input: string | Date | number | SpoolingDate | TheDate;
    constructor(input: string | Date | number | SpoolingDate | TheDate);
}
/**
 * Creates a `TheDate` and throws when input cannot be parsed or normalized.
 * 
 * Signature: `createOrThrow(input)` → `TheDate`
 * 
 * `input` accepts the same runtime shapes as `create` (`Date`, `number`, `SerializedTheDate`, `SpoolingDate`, strings).
 * 
 * ```ts
 * const fromTimestamp = D.createOrThrow(1_700_000_000_000);
 * // fromTimestamp: TheDate
 * 
 * const fromSerialized = D.createOrThrow("date1700000000000+");
 * // fromSerialized: TheDate
 * 
 * const fromDate = D.createOrThrow(new Date("2024-06-20T12:00:00Z"));
 * // fromDate: TheDate
 * 
 * pipe(
 * 	fromTimestamp,
 * 	(value) => D.createOrThrow(value),
 * ); // TheDate
 * ```
 * 
 * @remarks
 * - Throws `CreateTheDateError` on invalid input.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/createOrThrow
 * @see https://utils.duplojs.dev/en/v1/api/date/create
 * 
 * @namespace D
 * 
 */
export declare function createOrThrow<GenericInput extends TheDate | Date | number | SerializedTheDate>(input: GenericInput): TheDate;
export declare function createOrThrow<GenericInput extends SpoolingDate>(input: GenericInput): TheDate;
export {};
