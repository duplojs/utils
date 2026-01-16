declare const InvalidMillisecondInStringError_base: new (params: {
    "@DuplojsUtilsError/missing-builder-methods-error"?: unknown;
}, parentParams: [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & import("./kind").Kind<import("./kind").KindDefinition<"@DuplojsUtilsError/missing-builder-methods-error", unknown>, unknown> & import("./kind").Kind<import("./kind").KindDefinition<"invalid-millisecond-in-string-error", unknown>, unknown>;
export declare class InvalidMillisecondInStringError extends InvalidMillisecondInStringError_base {
    input: string;
    constructor(input: string);
}
declare const unitMapper: {
    ms: number;
    s: number;
    m: number;
    h: number;
    d: number;
    w: number;
};
export type MillisecondInString = `${number}${keyof typeof unitMapper}` | `${number}.${number}${keyof typeof unitMapper}`;
/**
 * The stringToMillisecond() function converts durations expressed as a string ("10s", "2h", "1.5d", etc.) or a number into milliseconds. It throws a typed error if the format is invalid.
 * 
 * Signature: `stringToMillisecond(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const duration = stringToMillisecond("1.5d", "2h", 5000);
 * // duration: number of milliseconds for 1.5 days + 2 hours + 5 seconds
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/stringToMillisecond
 * 
 */
export declare function stringToMillisecond(millisecondInString: MillisecondInString | number, ...millisecondInStrings: (MillisecondInString | number)[]): number;
export {};
