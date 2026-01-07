declare const InvalidBytesInStringError_base: new (params: {
    "@DuplojsUtilsError/missing-builder-methods-error"?: unknown;
}, parentParams: [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & import("./kind").Kind<import("./kind").KindDefinition<"invalid-bytes-in-string-error", unknown>, unknown> & import("./kind").Kind<import("./kind").KindDefinition<"@DuplojsUtilsError/missing-builder-methods-error", unknown>, unknown>;
export declare class InvalidBytesInStringError extends InvalidBytesInStringError_base {
    input: string;
    constructor(input: string);
}
declare const unitMapper: {
    b: number;
    kb: number;
    mb: number;
    gb: number;
    tb: number;
    pb: number;
};
export type BytesInString = `${number}${keyof typeof unitMapper}`;
/**
 * The stringToBytes() function converts a size ("10mb", "2gb", etc.) or a number into bytes. It throws a typed error if the format is invalid.
 * 
 * Signature: `stringToBytes(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const size = stringToBytes("1.5gb");
 * // size: number of bytes for 1.5 gigabytes
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/stringToBytes
 * 
 * @namespace C
 * 
 */
export declare function stringToBytes(bytesInString: BytesInString | number): number;
export {};
