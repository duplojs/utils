import type { TheDate } from "./types";

declare const InvalidTheDateError_base: new (params: {
    "@DuplojsUtilsError/invalid-the-Date-error"?: unknown;
}, parentParams: [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & import("../common").Kind<import("../common").KindDefinition<"invalid-the-Date-error", unknown>, unknown> & import("../common").Kind<import("../common").KindDefinition<"@DuplojsUtilsError/invalid-the-Date-error", unknown>, unknown>;
export declare class InvalidTheDateError extends InvalidTheDateError_base {
    theDate: TheDate;
    constructor(theDate: TheDate);
}

/**
 * Converts a TheDate to a UTC timestamp.
 * 
 * Signature: `toTimestamp(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const result = D.toTimestamp(input);
 * // result: 1718841600000
 * 
 * pipe(
 * 	input,
 * 	D.toTimestamp,
 * ); // result: 1718841600000
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/toTimestamp
 * 
 * @namespace D
 * 
 */
export declare function toTimestamp<GenericInput extends TheDate>(input: GenericInput): number;
